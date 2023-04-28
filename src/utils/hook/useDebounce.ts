import { useState, useEffect } from 'react';

// /.imports

export function useDebounce(value: string, delay: number): string {
    const [debValue, setValue] = useState<string>(value);

    // /. hooks

    useEffect(() => {
        const handler = setTimeout(() => {
            setValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debValue;
}
