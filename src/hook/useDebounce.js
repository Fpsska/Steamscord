import { useState, useEffect } from 'react';

// /.imports

export function useDebounce(value, delay) {
    const [debValue, setValue] = useState(value);

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
