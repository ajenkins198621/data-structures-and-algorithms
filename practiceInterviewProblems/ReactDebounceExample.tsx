import React, { useEffect, useState } from 'react';

function debounce(fn, time) {
    let setTimeoutId;

    return function() {
        if (setTimeoutId) {
            clearTimeout(setTimeoutId);
        }

        setTimeoutId = setTimeout(() => {
            fn.apply(this, arguments);
            setTimeoutId = null;
        }, time);
    }
}

const ReactDebounceExample = () => {
    const [value, setValue] = useState<string>("");
    const [debounceCount, setDebounceCount] = useState<number>(0);

    useEffect(() => {
        if(!value) {
            return;
        }
        debounce(fetchData, 1000);
    }, [value]);

    function fetchData() {
        setDebounceCount(debounceCount + 1);
    }

    return (
        <div>
            <input
                type="text"
                placeholder='test input'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {
                !!debounceCount && <p>Debounce Count: {debounceCount}</p>
            }
        </div>
    )
}

export default ReactDebounceExample;