import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
    email: null | string,
    uid: null | string,
    authStatus: 'LOAD' | 'SUCCESS',
}
const initialState: IInitialState = {
    email: null,
    uid: null,
    authStatus: 'LOAD',
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.uid = action.payload.uid;
            state.authStatus = 'SUCCESS';

        },
        removeUser(state) {
            state.email = null;
            state.uid = null;
            state.authStatus = 'SUCCESS';
        },
    }
})
export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
