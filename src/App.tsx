import './App.css'
import Cardlist from './components/Cardlist/Cardlist';
import React, {useEffect} from 'react';

function App() {
 useEffect(() => {
    fetch('/api')
      .then(resp => resp.json())
      .then(data => console.log(data))
  }, [])

  const add = () => {
    const newData =
      {
        name: 'lau',
        pic: ['😀', ':-9'],
      };
console.log(JSON.stringify(newData));
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((r)=> console.log(r.json()));

  };

  return (
    <>
      <button onClick={add}>Server add</button>
      <Cardlist/>
    </>
  )
}

export default App
