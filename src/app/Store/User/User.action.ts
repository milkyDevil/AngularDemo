import { createAction, props } from "@ngrx/store";
import { ILoginPayload, IRegisterPayload } from "../Model/LoginRegister.model";

export const BEGIN_REGISTER = '[auth] begin register';
export const BEGIN_LOGIN = '[auth] begin login';

export const beginRegister = createAction(BEGIN_REGISTER, props<{ userdata: IRegisterPayload }>());
export const beginLogin = createAction(BEGIN_LOGIN, props<{ userdata: ILoginPayload }>());

export const REGISTER_SUCCESS = '[auth] register success';
export const registerSuccess = createAction(REGISTER_SUCCESS, props<{ data: object | null}>());

export const REGISTER_FAILURE = '[auth] register failure';
export const registerFailure = createAction(REGISTER_FAILURE, props<{ data: object | null}>());

export const LOGIN_SUCCESS = '[auth] login success';
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ data: object | null}>());

export const LOGIN_FAILURE = '[auth] login failure';
export const loginFailure = createAction(LOGIN_FAILURE, props<{ data: object | null}>());

