export const typeDefs = ["type ChangePasswordResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype Mutation {\n  ChangePassword(password: String!): ChangePasswordResponse!\n  ChangeProfile(bio: String, avatar: String): ChangeProfileResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(email: String!, password: String!, fullName: String!, nickName: String!): EmailSignUpResponse!\n}\n\ntype ChangeProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  user: User\n  token: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  profile: User\n}\n\ntype Query {\n  GetMyProfile: GetMyProfileResponse!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  password: String!\n  fullName: String!\n  nickName: String!\n  bio: String\n  avatar: String\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  GetMyProfile: GetMyProfileResponse;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  profile: User | null;
}

export interface User {
  id: number;
  email: string;
  password: string;
  fullName: string;
  nickName: string;
  bio: string | null;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Mutation {
  ChangePassword: ChangePasswordResponse;
  ChangeProfile: ChangeProfileResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
}

export interface ChangePasswordMutationArgs {
  password: string;
}

export interface ChangeProfileMutationArgs {
  bio: string | null;
  avatar: string | null;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  email: string;
  password: string;
  fullName: string;
  nickName: string;
}

export interface ChangePasswordResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface ChangeProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
  token: string | null;
}
