export interface AuthInfo {
  accessToken: string;
  email: string;
  expiresIn: number;
  refreshToken: string;
  uuid: string;
}

export interface User {
  uuid: string;
  name: string;
  email: string;
  avatar: string;
  city: string;
}

export interface Book {
  id: number;
  title: string;
  users_uuid: string;
  author: string;
  description: string;
  cover: string;
}

export interface Error {
  id: string;
  links: any;
  status: string;
  code: string;
  title: string;
  detail: string;
  source: {
    pointer: string;
    parameter: string;
  };
  meta: any;
  data: ErrorData;
}

export interface ErrorData {
  pattern: any;
  value: string;
  key: string;
  label: string;
}

export interface Request {
  uuid: string;
  confirmed: boolean;
  createdAt: number;
  confirmedAt: number;
  rejectedAt: number;
}

export interface Library {
  id: number;
  title: string;
  users_uuid: string;
  author: string;
  description: string;
  cover: string;
}

export interface Users {
  name: string;
  email: string;
  avatar:string;
  city: string;

}

export interface Stock {
  title: string;
  author: string;
  description:string;
  cover: string;

}


