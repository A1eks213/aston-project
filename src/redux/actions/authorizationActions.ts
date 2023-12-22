import { createAsyncThunk } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { removeUser, setUser } from "../store/slices/userSlice";

type IAuthorizationAction = {
  email: string;
  password: string;
};
export const loginAction = createAsyncThunk('user/login', async ({ email, password }: IAuthorizationAction) => {
  signInWithEmailAndPassword(auth, email, password)
    .catch(() => alert('Неверно введены данные!'))
})
export const registerAction = createAsyncThunk('user/register', async ({ email, password }: IAuthorizationAction) => {
  createUserWithEmailAndPassword(auth, email, password)
    .catch(() => alert('Пользователь с данным email уже зарегестрирован!'))
})
export const checkAuthStateAction = createAsyncThunk('user/checkAuthState',
  (_, { dispatch }) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email, uid: user.uid }))
      } else { dispatch(removeUser()) }
    })
  },
);
export const logoutAction = createAsyncThunk('user/logout', async () => signOut(auth));