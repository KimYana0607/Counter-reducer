import {ChangeEvent} from "react";

type InputType = {
    title: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    textError: boolean
}
export const Input = ({title, onChange, textError}: InputType) => {
    return (
        <div className={'input-container'}>
            <label className={'label'}>{title}</label>
            <input className={`input ${textError ? 'inputError' : ''}`} id={title} type='number' onChange={onChange} />
        </div>
    );
};
