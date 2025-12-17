import {Input} from "./Input.tsx";
import Button from "./Button.tsx";
import {ChangeEvent} from "react";
import {useAppDispatch} from "./common/hooks/useAppDispatch.ts";
import {useAppSelector} from "./common/hooks/useAppSelector.ts";
import {CounterSelectors} from "./model/CounterSelectors.ts";
import {maxValueAC, minValueAC, setValuesFromSettingAC} from "./model/CounterReducer.ts";


export const Setting = () => {
    const dispatch = useAppDispatch()

    const minValue = useAppSelector(CounterSelectors.minValue)
    const maxValue = useAppSelector(CounterSelectors.maxValue)

    const textError = minValue < 0 || maxValue <= minValue
    const maxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxValueAC(+event.target.value))
    }
    const minChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(minValueAC(+event.target.value))
    }

    const setHandler = () =>{
        localStorage.setItem("maxValue", String(maxValue))
        localStorage.setItem("minValue", String(minValue))
        dispatch(setValuesFromSettingAC())
    }


    return (
        <div className={'container'}>
            <div className={'setting'}>
                <Input title={'maxValue'} value={maxValue} onChange={maxChangeHandler} textError={textError} />
                <Input title={'minValue'} value={minValue} onChange={minChangeHandler} textError={textError} />
            </div>
            <div className={'buttonsContainer'}>
                <Button title={'set'} onClick={setHandler} disabled={textError}/>
            </div>
        </div>
    );
};
