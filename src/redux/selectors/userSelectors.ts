import { RootState } from "../store";

export const uid = (state: RootState) => state.user.uid;
export const email = (state: RootState) => state.user.email;
export const authStatus = (state: RootState) => state.user.authStatus;