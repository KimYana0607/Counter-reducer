import {ChangeEvent} from "react";

type InputType = {
    title: string,
    value: number,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    textError: boolean
}
export const Input = ({title, onChange, textError, value}: InputType) => {
    return (
        <div className={'input-container'}>
            <label className={'label'}>{title}</label>
            <input className={`input ${textError ? 'inputError' : ''}`} id={title} value={value} type='number' onChange={onChange} />
        </div>
    );
};
