import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ bots, removeFromArmy }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {bots.length === 0 && <p>You haven't added any bots to your army yet.</p>}
      <div className="bot-card-container">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} buttonText="Remove from Army" onClick={() => removeFromArmy(bot)} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
