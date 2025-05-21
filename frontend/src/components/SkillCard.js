import React from 'react';

function SkillCard({ skill }) {
  return (
    <div className="border rounded p-4 mb-2">
      <h2 className="text-xl font-semibold">{skill.title}</h2>
      <p>{skill.description}</p>
      <div className="text-sm text-gray-600">Duration: {skill.duration} min</div>
      <div className="text-sm text-gray-600">Price: {skill.price === 0 ? 'Free' : `$${skill.price}`}</div>
    </div>
  );
}

export default SkillCard;
