import { EntityState } from "@ngrx/entity";

export interface IRegisterPayload {
    name: string;
    email: string;
    phone: string;
    password: string;
    role: string;
  }
  
  export interface ILoginPayload {
    email: string;
    password: string;
  }
  
  export interface IUserResponse {
    status: string;
    message: string;
    data: null | IUser;
  }

  export interface IRegisterResponse {
    status: string;
    message: string;
    data: null;
  }
  
  export interface IUser {
    name: string;
    email: string;
    phone: string;
    role: string;
    userId: number;
  }

  export interface UserModel extends EntityState<IUser>{}
  