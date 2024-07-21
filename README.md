# Audiobook Web Application

## Overview

This project is a web application that allows users to browse audiobooks, view details, and submit reviews and ratings. It includes a backend API built with Express and MongoDB and a frontend client built with Next.js.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (or MongoDB Atlas)

### Setting Up the Backend

 **Navigate to the server directory:**

   cd server

  to install dependencies
    npm install

  Create a .env file in the server directory with the following content:
    MONGO_URI=your_mongodb_connection_string
    PORT=5000

  start backend server
    node index.js

## Setting Up the Frontend
Navigate to the client directory:

  cd client

Install dependencies:

  npm install
Start the frontend development server:

  npm run dev
The frontend will run on http://localhost:3000.


# API Endpoints
## Audiobooks
Get all audiobooks

Route: GET /api/audiobooks/

Response: List of all audiobooks.

Get audiobook by ID

Route: GET /api/audiobooks/:id

Response: Details of a single audiobook, including reviews.

Add a new audiobook

Route: POST /api/audiobooks/add

Body:

{
  "title": "string",
  "author": "string",
  "description": "string",
  "coverImage": "string",
  "genre": "string"
}
Response: Success message and added audiobook details.

Reviews
Add a review to an audiobook

Route: POST /api/audiobooks/:id/reviews

Body:

{
  "user": "string",
  "rating": number,    // Rating must be between 0 and 5
  "comment": "string"
}
Response: Success message and added review details.

Folder Structure
client/my-app/: Contains the Next.js frontend application.

pages/: Contains page components and Next.js routing.
components/: Contains React components used in the application.
styles/: Contains CSS modules for styling.
server/: Contains the Express backend application.

models/: Contains Mongoose models for MongoDB schemas.
routes/: Contains Express route handlers.
server.js: Entry point for the backend application.
Notes
Ensure that MongoDB is running and accessible via the connection string provided in .env.
The frontend and backend servers must be running concurrently for the application to function correctly.
