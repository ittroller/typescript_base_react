export interface AuthReducerType {
  email: string;
  password: string;
  loading: boolean;
  error?: string;
  token: string;
}

export interface GlobalReducerType {
  global: {
    user: AuthReducerType;
  };
}

export interface AuthActionType {
  onRegister: Record<string, unknown>;
  onLogin: Record<string, unknown>;
}
