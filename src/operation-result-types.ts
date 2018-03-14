/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface ProfileInput {
  favoriteColor: string,
};

export interface CreateUserMutationVariables {
  firstName: string,
  profile?: ProfileInput | null,
};

export interface CreateUserMutation {
  createUser:  {
    id: number,
    firstName: string,
    profile:  {
      favoriteColor: string,
    } | null,
  },
};

export interface DeleteUserMutationVariables {
  id: number,
};

export interface DeleteUserMutation {
  deleteUser: boolean | null,
};

export interface UserQueryVariables {
  id: number,
};

export interface UserQuery {
  user:  {
    id: number,
    firstName: string,
  },
};
