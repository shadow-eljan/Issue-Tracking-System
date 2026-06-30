# Issue Tracking System

A simple RESTful Issue Tracking System built with Node.js and Express.

## Overview

This project implements a basic issue tracking API to manage users, projects, and issues. It includes controllers, routes, models, and middleware for authentication and authorization.

## Features

- User management (register, login, profile)
- Project management (create, update, list)
- Issue management (create, update status, assign)
- Authentication and authorization middleware

## Repository Structure

- `app.js` — application entry point
- `Controllers/` — request handlers (`UserController.js`, `issueController.js`, `ProjectController.js`)
- `Routes/` — route definitions (`UserRoutes.js`, `IssueRoutes.js`, `ProjectRoutes.js`)
- `models/` — data models (`User.js`, `Issue.js`, `Project.js`)
- `db/Connection.js` — database connection setup
- `middlewares/` — `auth.js`, `authorize.js`
- `Utils/` — helpers (token generation, status flow)
- `test.js` — simple test or runner script

## Prerequisites

- Node.js 14+ installed
- (Optional) A running MongoDB or other database if configured in `db/Connection.js`

## Installation

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables (example):

```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/issue-tracker
JWT_SECRET=your_jwt_secret
```

3. Start the app:

```bash
node app.js
```

Or with npm (if `package.json` has a `start` script):

```bash
npm start
```

Run the simple test runner (if present):

```bash
node test.js
```

## API Endpoints (summary)

The project exposes REST endpoints grouped under users, projects and issues. See the route files for full details.

- Users: `GET /api/users`, `POST /api/users`, `POST /api/users/login`, `GET /api/users/:id`
- Projects: `GET /api/projects`, `POST /api/projects`, `GET /api/projects/:id`, `PUT /api/projects/:id`
- Issues: `GET /api/issues`, `POST /api/issues`, `GET /api/issues/:id`, `PUT /api/issues/:id`, `DELETE /api/issues/:id`

Authentication: protected routes require a valid JWT in the `Authorization: Bearer <token>` header. See `middlewares/auth.js`.


## License

This project is provided as-is. Add a license file if you intend to publish or share under specific terms.

