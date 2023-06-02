# CarePaw

Welcome to CarePaw, the ultimate platform for collecting and managing your pet cards and learning essential tips for responsible pet ownership. This readme file will guide you through the setup and usage of the CarePaw website.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Running the Frontend](#running-the-frontend)
- [Running the Backend](#running-the-backend)

## Introduction

CarePaw is a website designed to help pet owners keep track of their pets' information through pet cards. Each pet card contains details such as the pet's name, age, breed, gender, and medical history. In addition to the pet card feature, the website also provides essential tips for responsible pet ownership on the homepage.

## Features

1. User Registration and Login:

   - Users can register a new account by providing their name, email, and password.
   - Existing users can log in using their email and password.

2. Homepage:

   - After logging in, users will be directed to the homepage.
   - The homepage displays essential tips for responsible pet ownership.
   - Users can access their pet card collection from the homepage.

3. Pet Card Collection:

   - Users can create, view, edit, and delete pet cards.
   - Each pet card contains information such as the pet's name, age, breed, gender, and medical history.
   - Users can add multiple pet cards to their collection.

4. Profile Management:
   - Users can update their profile information, including their name, email.
   - The profile section provides options to edit and save changes.

## Technology Stack

The CarePaw project utilizes the following technologies:

#### Frontend

| Technology   | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| HTML         | Markup language for creating web pages.                     |
| CSS          | Styling language for designing the website's appearance.    |
| JavaScript   | Programming language for implementing interactive features. |
| React.js     | JavaScript library for building user interfaces.            |
| Axios        | Promise-based HTTP client for making API requests.          |
| React Router | Library for handling navigation within a React application. |

#### Backend

| Technology | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| Node.js    | JavaScript runtime environment for server-side development. |
| Express.js | Web application framework for Node.js.                      |

#### Database

| Technology | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| MariaDB    | Open-source relational database for storing and managing data. |

## Running the Frontend

To run the frontend of the CarePaw website, follow these steps:

1. Navigate to the frontend directory of the CarePaw project:

```
cd carepaw/frontend
```

2. Install the required dependencies:

```
npm install
```

3. Start the frontend:

```
npm run dev
```

## Running the Backend

To run the backend of the CarePaw website, follow these steps:

1. Navigate to the backend directory of the CarePaw project:

```
cd carepaw/backend
```

2. Install the required dependencies:

```
npm install
```

3. Start the backend:

```
npm run dev
```

## API endpoints

### Signup

- Method: POST
- URL: `/signup`

#### Request Body

| Parameter | Type   | Description              |
| --------- | ------ | ------------------------ |
| username  | string | The user's username      |
| email     | string | The user's email address |
| password  | string | The user's password      |

Example:

```json
{
  "username": "exampleuser",
  "email": "example@example.com",
  "password": "Password123"
}
```

#### Response

Success

- Status Code: 200
- Content Type: JSON

The response
| Parameter | Type | Description |
| --------- | ------ | ------------------------ |
| token | string | The JWT token for the authenticated user |
| message | string | A success message indicating the signup was successful|

Example:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ...",
  "message": "Login successful"
}
```

### Login Endpoint

- Method: POST
- URL: `/login`

#### Request Body

| Parameter | Type   | Description              |
| --------- | ------ | ------------------------ |
| email     | string | The user's email address |
| password  | string | The user's password      |

Example:

```json
{
  "email": "example@example.com",
  "password": "Password123"
}
```

#### Response

Success

- Status Code: 200
- Content Type: JSON

The response
| Parameter | Type | Description |
| --------- | ------ | ------------------------ |
| token | string | The generated JWT token for authentication |
| userId | string | The user ID associated with the logged-in user |
| user | object | The user object containing user information |
| message | string | A success message indicating login successful|

Example:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ...",
  "userId": "1",
  "user": {
    "id": "1",
    "username": "exampleuser",
    "email": "example@example.com",
    "password": "$2b$10$dN5MgrHbH1St9mlOIK/dmew7Pi1u3LVDnX1sOOAWSgXpIoVTOFhU."
  },
  "message": "Login successful"
}
```

### User Endpoint

- Method: GET
- URL: `/user/:userId`

#### Path Parameters

The path parameter `userId` represents the unique identifier of the user.

#### Response

Success

- Status Code: 200
- Content Type: JSON

If the user is found, the response will contain a JSON object with the following properties:

| Property | Type   | Description              |
| -------- | ------ | ------------------------ |
| id       | string | The user's ID            |
| username | string | The user's username      |
| email    | string | The user's email address |

Example:

```json
{
  "id": "1",
  "username": "exampleuser",
  "email": "example@example.com"
}
```

### Edit User Endpoint

The Edit User endpoint is used to update the information of a specific user based on their user ID.

- Method: PUT
- URL: `/user/:userId`

#### Path Parameters

The path parameter `userId` represents the unique identifier of the user.

#### Request Body

| Property | Type   | Description               |
| -------- | ------ | ------------------------- |
| username | string | The updated username      |
| email    | string | The updated email address |

Example:

```json
{
  "username": "newusername",
  "email": "newemail@example.com"
}
```

#### Response

Success

- Status Code: 200
- Content Type: JSON

| Property | Type   | Description               |
| -------- | ------ | ------------------------- |
| id       | string | The user's ID             |
| username | string | The updated username      |
| email    | string | The updated email address |

Example:

```json
{
  "id": "1",
  "username": "newusername",
  "email": "newemail@example.com"
}
```

### Show Pets Endpoint

- Method: GET
- URL: `/mypet`

#### Query Parameters

The query parameter `userId` represents the unique identifier of the user.

#### Response

Success

- Status Code: 200
- Content Type: JSON

| Property | Type   | Description            |
| -------- | ------ | ---------------------- |
| id       | string | The pet's ID           |
| name     | string | The pet's name         |
| species  | string | The pet's species      |
| age      | number | The pet's age in years |
| userId   | string | The user's ID          |

Example:

```json
{
  "pets": [
    {
      "id": "1",
      "name": "Fluffy",
      "species": "Cat",
      "age": 3,
      "userId": "1"
    },
    {
      "id": "2",
      "name": "Buddy",
      "species": "Dog",
      "age": 5,
      "userId": "1"
    }
  ]
}
```
### Get Specific Pet Endpoint

The Get Specific Pet endpoint is used to retrieve information about a specific pet for a logged-in user.

- Method: GET
- URL: `/mypet/:petId`

#### Path Parameters

The endpoint expects the following path parameter:

| Parameter | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| petId     | string | The unique identifier of the pet |

#### Query Parameters

The endpoint expects the following query parameter:

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| userId    | string | The unique identifier of the user |

#### Response

Success

- Status Code: 200
- Content Type: JSON

Example:

```json
{
  "id": "1",
  "name": "Fluffy",
  "breed": "Cat",
  "age": 3,
  "gender": "Female",
  "weight": 5.7,
  "medical": "No known medical conditions"
}
```

### Create Pet Endpoint

- Method: POST
- URL: `/mypet`

#### Request Body

The request body should contain the following parameters:

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| userId    | string | The unique identifier of the user |
| name      | string | The name of the pet               |
| breed     | string | The breed of the pet              |
| age       | number | The age of the pet in years       |
| gender    | string | The gender of the pet             |
| weight    | number | The weight of the pet             |
| medical   | string | The medical history of the pet    |

Example:

```json
{
  "userId": "1",
  "name": "Fluffy",
  "breed": "Cat",
  "age": 3,
  "gender": "Female",
  "weight": 5.7,
  "medical": "No known medical conditions"
}
```

#### Response

success

- Status Code: 200
- Content Type: JSON

example:

```json
{
  "message": "Pet added successfully"
}
```

