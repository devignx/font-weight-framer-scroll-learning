import React, { useState, useEffect } from 'react';

function ThemeSwitch() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    document.documentElement.className = `bg-${theme}`;
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="flex mt-6 drop-shadow-2xl bg-white p-3 px-6 rounded-full justify-center space-x-4">
      <button
        onClick={() => toggleTheme('primary')}
        className="p-2 w-4 h-4 bg-primary drop-shadow-xl rounded-full text-white"
      ></button>
      <button
        onClick={() => toggleTheme('secondary')}
        className="p-2 w-4 h-4 drop-shadow-xl bg-secondary rounded-full text-white"
      ></button>
      <button
        onClick={() => toggleTheme('success')}
        className="p-2 w-4 h-4 drop-shadow-xl bg-success rounded-full text-white"
      ></button>
      <button
        onClick={() => toggleTheme('info')}
        className="p-2 w-4 h-4 drop-shadow-xl bg-info rounded-full text-white"
      ></button>
      <button
        onClick={() => toggleTheme('warning')}
        className="p-2 w-4 h-4 drop-shadow-xl bg-warning rounded-full text-white"
      ></button>
      <button
        onClick={() => toggleTheme('danger')}
        className="p-2 w-4 h-4 drop-shadow-xl bg-danger rounded-full text-white"
      ></button>
      <button
      onClick={() => toggleTheme('')}
      className='w-4 h-4 drop-shadow-xl rounded-full border-solid border-[1px] border-black text-[.6rem] text-black'>X</button>
    </div>
  );
}

export default ThemeSwitch;
