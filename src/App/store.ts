import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {CounterReducer} from "../model/CounterReducer.ts";

// объединение reducer'ов с помощью combineReducers
// const rootReducer = combineReducers({
//     counter: CounterReducer,
// })

// создание store
export const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store