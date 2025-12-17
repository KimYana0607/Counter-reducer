import {useEffect} from "react"
import './App.css'
import {Counter} from '../Counter.tsx'
import {Setting} from "../Setting.tsx";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {addValueAC, resetValueAC, setValuesFromLSAC} from "../model/CounterReducer.ts";
import {CounterSelectors} from "../model/CounterSelectors.ts";


export const App = () => {
    const counter = useAppSelector(CounterSelectors.counter)
    const maxValue = useAppSelector(CounterSelectors.maxValue)
    const minValue = useAppSelector(CounterSelectors.minValue)
    const isSet = useAppSelector(CounterSelectors.isSet)

    const dispatch = useAppDispatch()
    const add = () => {
        dispatch(addValueAC())
    }
    const reset = () => {
        dispatch(resetValueAC())
    }

    useEffect(() => {
        const savedMax = localStorage.getItem("maxValue");
        const savedMin = localStorage.getItem("minValue");

        if (savedMax && savedMin) {
            dispatch(setValuesFromLSAC({
                min: Number(savedMin),
                max: Number(savedMax)
            }))
        }
    }, [dispatch]);

    return (
        <div className="app">
            <Setting/>
            <Counter
                counter={counter}
                add={add}
                reset={reset}
                maxValue={maxValue}
                minValue={minValue}
                isSet={isSet}
            />
        </div>

    )
}
