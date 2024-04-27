import {createContext} from 'react';

export type CounterContextType = {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const CounterContext = createContext<CounterContextType>({
    count: 0,
    increment: () => null,
    decrement: () => null
});
