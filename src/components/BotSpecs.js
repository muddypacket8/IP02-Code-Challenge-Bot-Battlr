import React from 'react';
import BotSpecs from './components/BotSpecs';

const BotSpecs = ({ bot }) => {
  console.log("BotSpecs props: ", bot);
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
