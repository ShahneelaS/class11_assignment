// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  // Creating three variables
  const name = "Shahneela Shahbaz";
  const age = 32;
  const favoriteHobbies = ["Reading", "Traveling", "Coding"];

  return (
    <div>
      {/* Passing variables as props to the ChildComponent */}
      <ChildComponent name={name} age={age} hobbies={favoriteHobbies} />
    </div>
  );
}

export default ParentComponent;
