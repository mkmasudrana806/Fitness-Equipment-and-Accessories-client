# Fitnes Equipment And Accessories

## Important Links

1. **Live Deployment Link :**

- [Live Server](https://fitness-equipment-and-accessories-client-two.vercel.app/)

2. **GitHub Repository Link :**

- [Client](https://github.com/mkmasudrana806/Fitness-Equipment-and-Accessories-client.git)

- [Server](https://github.com/mkmasudrana806/Fitness-Equipment-and-Accessories-backend.git)

## Introduction

`Fitness Equipment And Accessories` is an ecommerce project built on top of React, NodeJS, Typescript, Expressjs, Mongoose, and Redux with RTK Query. This is full stack project and fully functional with CRUD operations.

## Project Description

`Fitness Equipment And Accessories` is built to leaverse the the fully functional and multi-vendor ecommerce website. where there are user and admin management with different layout for their management. The main purpose of `Fitness Equipment And Accessories` is to build an ecommerce system with user and admin management system and authorization system. all the routes are protected for the different user layer.

## Features

- Authentication and authorization
- Cash on Delivery and stripe payment system
- Protected routes and vast Error handling for different cases
- In stock or out of stock show based on product status
- Each product Reviews, Comments and FAQ

## Technology Stack

- List of technologies, frameworks, and tools used in the project are `React`, `Redux`, `RTK Query`, `Ant Design`, `Node.js`, `Expressjs`, `TypeScript`, `nodemailer`, `zod` validation, `bcrypt`, `cloudinary`, `dotenv`, `MongoDB`, `Multer` for static assets services, `JWT`, `etc. for details, check `package.json` file

## Prerequisites

- Ensure `nodejs` and `typescript` installed on your machine before

## Installation Guideline

`Note:` first install the backend project provided top of this readme file

To get the project up and running locally, follow these steps:

`Note:` before running the application, please include .env file root of your project. below is given instructions of it.

1. **Clone the repository:**

```bash
git clone https://github.com/mkmasudrana806/Fitness-Equipment-and-Accessories-client.git
cd fitness-equipment-and-accessories-client
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Build the project:**

```bash
npm run build
```

4. **Start the development server:**

```bash
npm run dev
```

## Usages Guidline

- keep in mind that after cloning the project,
  must replace `baseUrl` with the `https://localhost:5000/api` inside `baseApi.ts` file

```json
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://localhost:5000/api',
});
```

## Environment Variables

Create a .env file in the root of the project and add your variables:

```bash
empty now
```
