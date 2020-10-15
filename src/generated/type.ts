export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type TUser = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type TQuery = {
  __typename?: 'Query';
  getUser?: Maybe<TUser>;
};

export type TGetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type TGetUserQuery = (
  { __typename?: 'Query' }
  & { getUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<TUser, 'id' | 'name'>
  )> }
);
