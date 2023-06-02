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
