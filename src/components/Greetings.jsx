import { useState, useEffect } from 'react';
const Greetings = ({ lang, children }) => {
  const [greet, setGreet] = useState('Hello');

  useEffect(() => {
    switch (lang) {
      case 'de':
        setGreet('Hallo');
        break;
      case 'en':
        setGreet('Hello');
        break;
      case 'fr':
        setGreet('Bonjour');
        break;
      case 'es':
        setGreet('Hola');
        break;
      default:
        setGreet('Hello');
        break;
    }
  }, [lang]);
  return (
    <div className="border-div">
      <p>
        {greet} {children}
      </p>
    </div>
  );
};

export default Greetings;
