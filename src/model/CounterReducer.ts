import {createAction, createReducer} from "@reduxjs/toolkit";

export type CounterState = {
    counter: number,
    maxValue: number,
    minValue: number,
    isSet: boolean,
}

export const initialState: CounterState = {
    counter: 0,
    minValue: 0,
    maxValue: 5,
    isSet: true,
}

export const addValueAC = createAction('counter/add')
export const resetValueAC = createAction('counter/reset')
export const setValuesFromLSAC = createAction<{ min: number; max: number }>(
    'counter/setFromLS'
)
export const setValuesFromSettingAC = createAction('counter/setFromSetting')


export const maxValueAC = createAction<number>('setting/setMax')
export const minValueAC = createAction<number>('setting/setMin')


export const CounterReducer = createReducer(initialState, (builder) => {
    builder.addCase(addValueAC, (state) => {
        if (state.counter < state.maxValue) {
            state.counter += 1
        }
    })
        .addCase(resetValueAC, (state) => {
            state.counter = state.minValue
        })
        .addCase(setValuesFromLSAC, (state, action) => {
            state.minValue = action.payload.min
            state.maxValue = action.payload.max
            state.counter = action.payload.min
            state.isSet = true
        })
        .addCase(setValuesFromSettingAC, (state)=>{
            state.counter = state.minValue
            state.isSet = true
        })
        .addCase(minValueAC, (state, action) => {
            state.minValue = action.payload
            state.counter = action.payload;
            state.isSet = false
        })
        .addCase(maxValueAC, (state, action) => {
            state.maxValue = action.payload
            state.isSet = false
        })
})