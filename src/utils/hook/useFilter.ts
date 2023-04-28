import { useState } from 'react';

import { useDebounce } from './useDebounce';

// /.imports

interface returnedTypes {
    enteredSearchValue: string;
    setEnteredSearchValue: (arg: string) => void;
    availableItems: any[]
}

// /. interfaces

export function useFilter(items: any[], filterProp: string): returnedTypes {
    const [enteredSearchValue, setEnteredSearchValue] = useState<string>('');
    const activeSearchValue = useDebounce(enteredSearchValue, 200);

    // /. hooks

    const availableItems = activeSearchValue
        ? items.filter(item =>
            RegExp(activeSearchValue, 'i').test(item[filterProp])
        )
        : items;

    return {
        enteredSearchValue,
        setEnteredSearchValue,
        availableItems
    };
}
