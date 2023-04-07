import ThemeSwitch from '../components/ThemeSwitch'
import React from 'react';

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mt-8">Welcome to Theme & <br/>Accent Switcher</h1>
      <p className="text-lg mt-4">Choose any one of the colours</p>
      <ThemeSwitch />
    </div>
  );
}

export default Home;
