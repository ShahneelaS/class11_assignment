// ChildComponent.tsx
import React from 'react';

interface ChildComponentProps {
  name: string;
  age: number;
  hobbies: string[];
}

const ChildComponent: React.FC<ChildComponentProps> = (props) => {
  return (
    <div className="container p-5 rounded-lg shadow-lg bg-gray-100 max-w-md mx-auto text-center">
      <h2 className="text-xl font-semibold">Name: {props.name}</h2>
      <p className="text-lg">Age: {props.age}</p>
      <h3 className="text-lg font-medium">Favorite Hobbies:</h3>
      <ul className="hobbies-list list-disc pl-5">
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent;
