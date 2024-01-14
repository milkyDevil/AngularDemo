export interface IRegisterPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
}

export interface IRegisterResponse {
  status: string;
  message: string;
  data: null;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: string;
  message: string;
  data: null | ILoginData;
}

export interface ILoginData {
  name: string;
  email: string;
  phone: string;
  role: string;
  userId: number;
}
