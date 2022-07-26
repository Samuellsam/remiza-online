import React, { useEffect } from 'react';

const HelloWorld: React.FC = () => {
  useEffect(() => {
    console.log('Welcome');
  }, []);
  return <p>Hello World</p>;
};

export default HelloWorld;
