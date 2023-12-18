import { useState, useEffect } from 'react';

const Advice = () => {
  const [advice, setAdvice] = useState('Click the button to get advice');

  const [theme, setTheme] = useState('light');


  useEffect(()=>{
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
  }, [theme])

  const handleThemeSwitch = ()=> {
    setTheme (theme === "dark" ? "light" : "dark")
  }

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      // console.log(data.slip.advice);
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return ( 
    <div className='h-screen w-screen flex items-center justify-center bg-white dark:bg-slate-800'>
      <div className=' rounded-xl p-8 xl:max-w-md  bg-sky-100 flex flex-col m-6 shadow-xl dark:bg-slate-600' >
        <p className='text-lg p-5 text-slate-800 font-semibold dark:text-slate-100'>{advice}</p>
        <button
          type="button"
          className="btn btn--primary dark:btn--secondary"
          onClick={fetchAdvice}>Get Advice
        </button>
        <button
          type="button"
          className="btn btn--secondary dark:btn--primary"
          onClick={handleThemeSwitch}> Switch &#127769; / &#9728;&#65039; Mode
        </button>
      </div>
    </div>
  );
};

export default Advice;
