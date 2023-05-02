import React from 'react';
import SortBar from './components/SortBar';

const SortBar = ({ sortBots }) => {
  return (
    <div>
      <label>Sort by:</label>
      <select onChange={event => sortBots(event.target.value)}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
