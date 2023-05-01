import React from 'react';

const BotSpecs = ({ bot }) => {
  return (
    <div>
      <h2>{bot.name} ({bot.class})</h2>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <p><strong>Description:</strong> {bot.description}</p>
    </div>
  );
};

export default BotSpecs;
