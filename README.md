# SkillSwap

SkillSwap is a peer-to-peer platform for teaching and learning micro-skills via quick video or chat sessions.

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS (via PostCSS)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Payments**: Stripe
- **Auth**: Firebase Auth or Auth0

## Local Development

### Backend

```bash
cd backend
npm install
cp .env.example .env # update variables
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

This will start the API on `http://localhost:4000` and the frontend on `http://localhost:3000`.

## Project Structure

- `backend/` - Express server and API routes
- `frontend/` - React application
- `.env.example` - sample environment variables for the backend

## Running Tests

Both the backend and frontend use Node's built-in test runner. Run tests from
each directory:

```bash
npm test
```

Each project includes a simple sample test to verify that the setup works.

Feel free to submit pull requests with improvements!

