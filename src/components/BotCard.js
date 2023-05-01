import React from 'react';

function BotCard({ bot, selectedBots, setSelectedBots }) {
  const handleEnlistClick = () => {
    if (!selectedBots.some(selectedBot => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  }

  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <ul>
        <li>Health: {bot.health}</li>
        <li>Damage: {bot.damage}</li>
        <li>Armor: {bot.armor}</li>
        <li>Class: {bot.bot_class}</li>
        <li>Catchphrase: "{bot.catchphrase}"</li>
      </ul>
      {!selectedBots.some(selectedBot => selectedBot.id === bot.id) && <button onClick={handleEnlistClick}>Enlist</button>}
    </div>
  );
}

export default BotCard;
