import type {FC, PropsWithChildren} from "react";
import {useCallback, useMemo, useState} from "react";

import {CounterContext} from "./context";

const CounterProvider: FC<PropsWithChildren> = ({children}) => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(previous => ++previous)
    }, []);
    const decrement = useCallback(() => setCount(previous => --previous), []);

    const value = useMemo(() => ({
        count,
        increment,
        decrement
    }), [count, increment, decrement]);

    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}

export default CounterProvider;