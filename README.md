Bot Battlr - React Application
Bot Battlr Screenshot [Note: Add actual screenshot later]

Table of Contents
Project Description

Features Implemented

Installation

Usage

API Endpoints

Project Structure

Next Steps

Contributing

License

Project Description
Bot Battlr is a React web application that allows users to browse a collection of robots, view their details, and build their own robot army. The application fetches data from a local JSON server and implements core React concepts like components, props, state, and event handling.

Features Implemented
Core Features
✅ View all bot profiles in a grid layout
✅ Add bots to your army by clicking on them
✅ See enlisted bots in a separate "Your Army" section
✅ Release bots from your army
✅ Permanently discharge bots (deletes from both frontend and backend)
✅ Basic styling for visual feedback (enlisted bots are highlighted)

Technical Implementations
✔️ React functional components with Hooks
✔️ Fetch API for data operations
✔️ State management for bots and army
✔️ Component composition and prop drilling
✔️ Responsive CSS layout

Installation
Clone the repository:

bash
git clone [repository-url]
cd bot-battlr
Install dependencies:

bash
npm install
Start the development servers (in separate terminals):

bash
# Terminal 1 - Backend server
npm run server

# Terminal 2 - React application
npm start
Usage
The application will automatically open in your default browser at http://localhost:3000

Browse available bots in the main section

Click on any bot to add it to your army

View your enlisted bots in the "Your Bot Army" section

Click on enlisted bots to release them

Click the red "×" button to permanently discharge a bot

API Endpoints
The application uses these endpoints from the local JSON server:

GET /bots - Retrieve all bots

DELETE /bots/:id - Delete a specific bot

Project Structure
src/
├── components/
│   ├── BotCard.js       # Individual bot display component
│   ├── BotCollection.js # Grid of all available bots
│   └── YourBotArmy.js   # Display of enlisted bots
├── App.js               # Main application component
├── App.css              # Main styles
├── index.js             # React entry point
db.json                  # Mock database

Next Steps

Planned Advanced Features
🔹 Detailed bot view (BotSpecs component)
🔹 Sorting functionality (SortBar component)
🔹 Filtering by bot class
🔹 One-bot-per-class restriction
🔹 Improved UI/UX with animations

Technical Improvements
🔸 Implement React Router for navigation
🔸 Add error boundaries
🔸 Implement loading states
🔸 Write unit tests

Current Status: Core functionality complete. Working on advanced features.