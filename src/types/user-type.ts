import { Token } from '../services/token';

export type UserComments = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}


export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: Token;
}

export type AuthDataType = {
  login: string;
  password: string;
}
