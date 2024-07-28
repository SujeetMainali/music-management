export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: boolean;
  data: string;
  message: string;
}
