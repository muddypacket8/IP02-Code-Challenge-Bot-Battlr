import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, selectedBots, setSelectedBots, sortType, classFilter }) {
  const filteredBots = bots.filter(bot => classFilter.includes(bot.bot_class));

  if (sortType) {
    filteredBots.sort((a, b) => b[sortType] - a[sortType]);
  }

  return (
    <div className="bot-collection">
      {filteredBots.map(bot => <BotCard key={bot.id} bot={bot} selectedBots={selectedBots} setSelectedBots={setSelectedBots} />)}
    </div>
  );
}

export default BotCollection;
