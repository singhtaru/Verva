# Running the Women's Health Quiz Website Locally

This guide explains how to run the educational women's health quiz website on your local development machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

## Installation Steps

### 1. Clone or Download the Project

If you haven't already, get the project files on your local machine.

### 2. Install Dependencies

Open a terminal in the project root directory and run:

```bash
npm install
```

This will install all required packages including:
- React and React Router (wouter)
- Express.js for the backend server
- Vite for development and build tooling
- Tailwind CSS for styling
- TypeScript for type safety

### 3. Set Up Environment Variables (Optional)

The application uses a session secret for security. While it has a default value, you can optionally create a `.env` file in the project root:

```bash
SESSION_SECRET=your-random-secret-key-here
```

**Note:** For local development, this is optional. The application will work without it.

## Running the Application

### Development Mode

To start the application in development mode with hot reloading:

```bash
npm run dev
```

This command will:
- Start the Express backend server
- Start the Vite development server for the React frontend
- Automatically open your browser (or navigate to the URL shown in the terminal)

**Default URL:** The application will be available at `http://localhost:5000`

You should see output similar to:
```
> rest-express@1.0.0 dev
> NODE_ENV=development tsx server/index.ts

Server running on port 5000
```

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates:
- Optimized frontend assets in the `dist/client` directory
- Bundled backend server in the `dist` directory

To run the production build:

```bash
npm start
```

## Project Structure

```
women-health-quiz/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components (Home, Quiz, Results)
│   │   ├── data/           # Quiz data and content
│   │   └── lib/            # Utility functions
│   └── index.html
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── vite.ts             # Vite development server setup
├── shared/                 # Shared TypeScript types
│   └── quiz-schema.ts      # Quiz data types
├── attached_assets/        # Static assets (topic illustrations)
└── package.json            # Project dependencies and scripts
```

## Available Features

Once running, you can:

1. **Browse Topics**: View 4 health topics (Menopause, Endometriosis, Breast Health, PCOS)
2. **Take Quizzes**: Each topic has 10-12 scientifically-based questions
3. **Learn**: Get immediate explanations after each answer with medical terms clearly defined
4. **Track Progress**: See your score and progress through each quiz
5. **Review Results**: View detailed results with correct answers and explanations
6. **Restart**: Use the restart button to retake any quiz

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Wouter (routing)
- **Backend**: Express.js, Node.js
- **Build Tool**: Vite
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Data Storage**: In-memory (no database required)

## Troubleshooting

### Port Already in Use

If port 5000 is already in use, you'll see an error. To fix this:
- Stop any other application using port 5000
- Or modify the port in `server/index.ts`

### Dependencies Installation Issues

If `npm install` fails:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Application Won't Start

1. Ensure you're in the project root directory
2. Verify Node.js version is 18 or higher: `node --version`
3. Check that all dependencies installed successfully
4. Look for error messages in the terminal output

### Browser Shows Blank Page

1. Check the terminal for compilation errors
2. Verify the server started successfully (should see "Server running on port 5000")
3. Try clearing your browser cache and refreshing
4. Check the browser console (F12) for JavaScript errors

## Development Workflow

### Making Changes

The application supports hot module replacement (HMR):

- **Frontend changes** (in `client/src/`): The page automatically refreshes
- **Backend changes** (in `server/`): The server automatically restarts
- **Shared types** (in `shared/`): May require manual refresh

### Editing Quiz Content

Quiz questions and explanations are located in:
```
client/src/data/quizData.ts
```

This file contains all quiz content for the four health topics.

### Type Checking

To check for TypeScript errors without running the app:

```bash
npm run check
```

## Support

For issues or questions:
- Check the troubleshooting section above
- Review the browser console for frontend errors (F12 in most browsers)
- Review the terminal output for backend errors
- Ensure all prerequisites are installed and up to date

## License

MIT License - See package.json for details
