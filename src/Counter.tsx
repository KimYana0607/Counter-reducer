import Button from './Button'

type CounterType = {
    counter: number
    add: () => void
    reset: () => void
    maxValue: number
    minValue: number
    isSet: boolean
}

export const Counter = ({counter, add, reset, maxValue, minValue, isSet}: CounterType) => {
    const isError = counter >= maxValue;
    const textError = minValue < 0 || maxValue <= minValue

    let text: number | string = counter
    if (textError){
        text = 'incorrect values!'
    }else if (!isSet) {
        text = 'enter values and press "set"'
    }

    let counterClass = 'counter'

    if (!isSet) {
        counterClass += ' info'
    } else if (textError || isError) {
        counterClass += ' error'
    }

    return (
        <div className="container">
            <div className={counterClass}>
                {text}
            </div>
            <div className={'buttonsContainer'}>
                <Button title={'inc'} onClick={add} disabled={isError || textError || !isSet}/>
                <Button title={'reset'} onClick={reset} disabled={minValue === counter || textError || !isSet}/>
            </div>

        </div>
    );
};
