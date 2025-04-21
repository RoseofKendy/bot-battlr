import React from 'react';

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="bot-specs">
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <p><strong>Health:</strong> {bot.health}</p>
        <p><strong>Damage:</strong> {bot.damage}</p>
        <p><strong>Armor:</strong> {bot.armor}</p>
        <p className="catchphrase"><em>{bot.catchphrase}</em></p>
      </div>
      <div className="bot-actions">
        <button onClick={onBack}>Back to List</button>
        <button onClick={onEnlist}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;