import React from 'react';
import SkillCard from '../components/SkillCard';

function Home() {
  const sampleSkill = {
    title: 'How to juggle',
    description: 'Learn juggling in 10 minutes',
    price: 0,
    duration: 10,
    tags: ['juggling', 'fun'],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">SkillSwap</h1>
      <SkillCard skill={sampleSkill} />
    </div>
  );
}

export default Home;
