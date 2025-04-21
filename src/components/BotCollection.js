import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot, army }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-list">
        {bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onClick={() => enlistBot(bot)}
            isEnlisted={army.some(b => b.id === bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;