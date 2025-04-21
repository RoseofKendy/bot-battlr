import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [filters, setFilters] = useState([]);

  const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const enlistBot = (bot) => {
    // Check if already enlisted
    if (army.some(b => b.id === bot.id)) return;
    
    // Check if class is already represented in army
    if (army.some(b => b.bot_class === bot.bot_class)) {
      alert(`You can only have one ${bot.bot_class} in your army!`);
      return;
    }

    setArmy([...army, bot]);
    // Remove from collection (advanced requirement)
    setBots(bots.filter(b => b.id !== bot.id));
  };

  const releaseBot = (botId) => {
    const releasedBot = army.find(bot => bot.id === botId);
    setArmy(army.filter(bot => bot.id !== botId));
    // Add back to collection (advanced requirement)
    setBots([...bots, releasedBot]);
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE'
    })
    .then(() => {
      setBots(bots.filter(bot => bot.id !== botId));
      setArmy(army.filter(bot => bot.id !== botId));
    })
    .catch(error => console.error('Error deleting bot:', error));
  };

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleBackToList = () => {
    setSelectedBot(null);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const handleFilter = (botClass) => {
    if (filters.includes(botClass)) {
      setFilters(filters.filter(f => f !== botClass));
    } else {
      setFilters([...filters, botClass]);
    }
  };

  const filteredAndSortedBots = () => {
    let result = [...bots];
    
    // Apply filters
    if (filters.length > 0) {
      result = result.filter(bot => filters.includes(bot.bot_class));
    }
    
    // Apply sorting
    if (sortBy) {
      result.sort((a, b) => b[sortBy] - a[sortBy]);
    }
    
    return result;
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <SortBar 
        sortBy={sortBy} 
        onSort={handleSort} 
        botClasses={botClasses} 
        filters={filters}
        onFilter={handleFilter}
      />
      <YourBotArmy 
        army={army} 
        releaseBot={releaseBot} 
        dischargeBot={dischargeBot} 
      />
      {selectedBot ? (
        <BotSpecs 
          bot={selectedBot} 
          onBack={handleBackToList} 
          onEnlist={() => {
            enlistBot(selectedBot);
            handleBackToList();
          }} 
        />
      ) : (
        <BotCollection 
          bots={filteredAndSortedBots()} 
          onBotClick={handleBotClick} 
        />
      )}
    </div>
  );
}

export default App;