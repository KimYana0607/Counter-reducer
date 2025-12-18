import { RootState } from "../app/store";

export const CounterSelectors = {
    counter: (state: RootState) => state.counter.counter,
    minValue: (state: RootState) => state.counter.minValue,
    maxValue: (state: RootState) => state.counter.maxValue,
    isSet: (state: RootState) => state.counter.isSet,
}