import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setUser } from "../store/slices/userSlice";
import { logoutAction } from "../actions/authorizationActions";
export interface IAction{
    payload?: {
        email: string | null;
        uid: string | null;
    };
}
export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: setUser,
    effect: async (action: IAction) => {
        console.group("Вход")
        console.log('Пользователь: ' + action.payload?.email + ' вошёл в аккаунт')
        console.log('Время: ' + new Date().toLocaleString())
        console.groupEnd()
    }
})
listenerMiddleware.startListening({
    actionCreator: logoutAction.fulfilled,
    effect: async () => {
        console.group("Выход")
        console.log('Пользователь вышел из аккаунта')
        console.log('Время: ' + new Date().toLocaleString())
        console.groupEnd()
    }
})