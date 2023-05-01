import React from 'react';

const ClassFilter = ({ classes, filterBots }) => {
  return (
    <div>
      <label>Filter by Class:</label>
      <select onChange={event => filterBots(event.target.value)}>
        <option value="all">All</option>
        {classes.map(classType => (
          <option key={classType} value={classType}>{classType}</option>
        ))}
      </select>
    </div>
  );
};

export default ClassFilter;
