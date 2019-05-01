# Typescript GraphQL API Boilerplate

This is a GraphQL API boilerplate built with Typescript, graphQL-yoga, typeORM, JWT

## Stacks

- Web Server Application : [graphQL-yoga](https://github.com/prisma/graphql-yoga)
- ORM : [typeORM](https://github.com/typeorm/typeorm)
- JWT : [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

## Features

- User Sign Up & Sign In
- Change a Password, Profile

## How to Run

### Configuration

1. Create a database

```shell
postgres=# CREATE DATABASE any;
```

2. Create a user as owner of database

```shell
postgres=# CREATE USER any WITH ENCRYPTED PASSWORD 'any';

postgres=# ALTER DATABASE any OWNER TO any;
```

3. Grant all privileges to user for the database

```shell
postgres=# GRANT ALL PRIVILEGES ON DATABASE any TO any;
```

4. Configure `.env`

```env
JWT_SECRET_KEY=jwt-secret
DB_NAME=any
DB_ENDPOINT=localhost
DB_USERNAME=any
DB_PASSWORD=any
```

> Set a JWT secret key

### Run the server

- Dev

```shell
$ yarn dev
```

- Prod

```shell
$yarn build
$yarn start
```

### GraphQL Playground

Connect to http://localhost:4000

### Authentication : JWT

You need to set the Http request headers `X-JWT`: `{JWT_token}`

## Usage

### Sign Up

```graphql
mutation {
  SignUp(email: "test@test.com", password: "12345678", fullName: "graphql", nickName: "ts") {
    ok
    error
    user {
      id
      email
      fullName
      nickName
      bio
      avatar
      createdAt
      updatedAt
    }
    token
  }
}
```

### Sign In

```graphql
mutation {
  SignIn(email: "test@test.com", password: "12345678") {
    ok
    error
    token
  }
}
```

### Change a Password

```graphql
mutation {
  ChangePassword(password: "87654321") {
    ok
    error
    user {
      id
      email
      fullName
      nickName
      bio
      avatar
      createdAt
      updatedAt
    }
  }
}
```

### Change a Profile

```graphql
mutation {
  ChangeProfile(bio: "developer", avatar: "developer.png") {
    ok
    error
    profile {
      id
      email
      fullName
      nickName
      bio
      avatar
      createdAt
      updatedAt
    }
  }
}
```

### Get my profile

```graphql
query {
  getMyProfile {
    ok
    error
    profile {
      id
      email
      fullName
      nickName
      bio
      avatar
      createdAt
      updatedAt
    }
  }
}
```

### Reference

- DalYoon / graphql-yoga-with-typeorm-boilerplate (https://github.com/DalYoon/graphql-yoga-with-typeorm-boilerplate)
