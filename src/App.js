import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import ClassFilter from './components/ClassFilter';
import BotSpecs from './components/BotSpecs';

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);
  const [sortType, setSortType] = useState('');
  const [classFilter, setClassFilter] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Bot-O-Mat</h1>
      <div className="filters">
        <SortBar sortType={sortType} setSortType={setSortType} />
        <ClassFilter classFilter={classFilter} setClassFilter={setClassFilter} />
      </div>
      {selectedBots.length > 0 && <YourBotArmy selectedBots={selectedBots} setSelectedBots={setSelectedBots} />}
      {selectedBots.length === 0 && <BotCollection bots={bots} selectedBots={selectedBots} setSelectedBots={setSelectedBots} sortType={sortType} classFilter={classFilter} />}
      <BotSpecs />
    </div>
  );
}

export default App;
