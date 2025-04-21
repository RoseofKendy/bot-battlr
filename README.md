Bot Battlr 🤖⚔️

A futuristic bot army management application with a sleek tech-savvy interface. Built with React and styled with a modern blue-to-indigo color scheme featuring glowing effects and futuristic UI elements.

Features ✨
Bot Collection: Browse available combat bots with detailed stats

Army Builder: Create your perfect bot army with class restrictions

Dynamic Filtering: Sort by health, damage, or armor

Class Filters: Filter bots by their specialized class

Tech-Savvy UI: Glowing effects, gradient borders, and futuristic styling

Responsive Design: Works on desktop and mobile devices

Tech Stack 🛠️
Frontend: React.js

Styling: CSS with custom tech-themed animations

State Management: React Hooks (useState, useEffect)

API: Local JSON server (included)

Installation 💻
Clone the repository:

bash
git clone https://github.com/yourusername/bot-battlr.git
cd bot-battlr
Install dependencies:

bash
npm install
Start the JSON server (in a separate terminal):

bash
npm run server
Start the development server:

bash
npm start
Open http://localhost:3000 in your browser.

Project Structure 📂
bot-battlr/
├── public/
├── src/
│   ├── components/
│   │   ├── BotCard.js       # Individual bot display card
│   │   ├── BotCollection.js # Main bot collection view
│   │   ├── BotSpecs.js      # Detailed bot view
│   │   ├── SortBar.js       # Sorting and filtering controls
│   │   └── YourBotArmy.js   # User's selected bot army
│   ├── App.js              # Main application component
│   ├── App.css             # Global styles
│   └── index.js            # Entry point
├── db.json                 # Mock database
└── README.md
Usage Guide 🎮
Browse Bots:

View all available bots in the collection

Click any bot to see detailed specifications

Build Your Army:

Click "Enlist" to add bots to your army

Only one bot per class allowed (Medic, Support, etc.)

Remove bots with the "Release" button

Sort and Filter:

Sort bots by health, damage, or armor

Filter by bot class using the checkboxes

Manage Your Army:

View your selected bots in the "Your Bot Army" section

Permanently discharge bots with the red "X" button

Styling Highlights 🎨
Color Palette: Deep navy blues to vibrant indigos with electric blue accents

Glowing Effects: Interactive elements have subtle glow animations

Gradient Borders: Futuristic gradient borders on cards and containers

Responsive Layout: Adapts to different screen sizes

Micro-interactions: Hover effects and smooth transitions

API Endpoints 🌐
The application uses a local JSON server with the following endpoints:

GET /bots - Retrieve all bots

DELETE /bots/:id - Discharge a bot permanently

Color palette inspired by futuristic UI designs

Happy bot battling! 🚀⚡