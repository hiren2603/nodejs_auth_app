export interface loginStateType {
  username: string;
  password: string;
}

export interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  code: string;
  phone: string;
  avatar: string;
}

export interface MenuType {
  id: number;
  link: string;
  text: string;
}

export interface FieldType {
  id: number;
  type: string;
  name: string;
  label: string;
  classes?: string;
}

export interface CountryType {
  name: string;
  dial_code: string;
  code: string;
  image: string;
  emoji: string;
  unicode: string;
}

export interface RagisterType {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
  avatar?: unknown;
}

export interface IProfile {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  phone: string | number;
  avatar?: string;
  token?: string;
}
