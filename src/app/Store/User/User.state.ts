import { createEntityAdapter } from "@ngrx/entity";
import { UserModel, IUser } from "../Model/LoginRegister.model";

export const UserAdapter = createEntityAdapter<IUser>();
export const UserState:UserModel = UserAdapter.getInitialState();