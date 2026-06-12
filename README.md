# GreatNotes

GreatNotes is a Study Notes Management System built using the MERN Stack. It helps students create, organize, and manage study notes in a simple and user-friendly way. Users can create notes and enrich them with different types of content such as text, images, voice recordings, YouTube videos, definitions, and AI-generated summaries.

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### Notes Management

* Create Notes
* View Notes
* Update Notes
* Delete Notes
* Search Notes
* Sort Notes

### Note Content Blocks

Each note acts as a study workspace and can contain multiple content blocks.

#### Text Notes

* Add text content

#### Image Notes

* Upload images
* View images inside notes
* Store images using Cloudinary

#### Voice Notes

* Upload audio recordings
* Play audio recordings
* Store audio files using Cloudinary

#### YouTube Videos

* Add YouTube video links
* Display embedded YouTube players

#### Definitions

* Store important terms and definitions

#### AI Summaries

* Generate summaries from paragraphs
* Save summaries inside notes

### To-Do List

* Create tasks
* Delete tasks
* Mark tasks as completed

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* JWT
* bcryptjs

### File Storage

* Cloudinary

### AI Integration

* Gemini API (for summaries)

## Project Structure

```
GreatNotes
│
├── client
│   └── src
│       ├── components
│       ├── pages
│       ├── services
│       └── context
│    
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── services
│
└── README.md
```

## Installation

### Clone Repository

```
git clone https://github.com/PiyushB752/GreatNotes.git
cd GreatNotes
```

### Backend Setup

```
cd server
npm install
```

Start backend server:

```
npm run dev
```

### Frontend Setup

```
cd client
npm install
```

Start frontend:

```
npm run dev
```

## Application Workflow

1. User registers or logs in.
2. User creates a new note.
3. Each note contains:
   * Title
   * Created Date
   * Updated Date
4. User opens a note.
5. User can add:
   * Text Blocks
   * Image Blocks
   * Voice Recording Blocks
   * YouTube Video Blocks
   * Definition Blocks
   * Summary Blocks
6. Uploaded images and audio files are stored in Cloudinary.
7. Notes can be edited, searched, sorted, and deleted.
8. Users can manage personal to-do tasks.

## Future Improvements

* Google OAuth Authentication
* Drag-and-Drop Block Reordering
* Rich Text Editor
* Note Categories
* Dark Mode
* Flashcard Generation
* Quiz Generation
* Collaborative Notes
* Note Sharing

## Deployment

The application is deployed using:

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
- File Storage: Cloudinary