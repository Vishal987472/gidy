Gidy Profile Page Replica
This project is a full-stack application that recreates the Gidy.ai profile page.

The application allows users to view and edit profile information including:

Name
Bio
Profile picture
Social links
Skills
The data is stored in a database and fetched via a REST API.

Tech Stack
Frontend

React
Vite
TailwindCSS
Backend

Spring Boot
Spring Security
REST API
Database

PostgreSQL (Neon)
Deployment

Render (Backend)
GitHub (Code hosting)
Setup Instructions
Backend
Clone the repository
git clone https://github.com/Vishal987472/gidy

Navigate to project
cd gidy

Add environment variables

DATABASE_URL= JWT_SECRET=

Run backend
./mvnw spring-boot:run

Frontend
cd frontend

npm install

npm run dev

Innovation Feature
I implemented a dark mode toggle for the profile page.

This allows users to switch between light and dark themes. The selected theme is stored in localStorage so the preference persists across sessions.

This improves user experience and accessibility.
