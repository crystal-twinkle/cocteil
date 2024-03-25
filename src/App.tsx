import './App.css'
import Cardlist from './components/Cardlist/Cardlist';
import React, {useEffect} from 'react';
import SmileAdd from './components/SmileAdd/SmileAdd';

function App() {
 useEffect(() => {
    fetch('/api')
      .then(resp => resp.json())
      .then(data => console.log(data))
  }, [])

  return (
    <>
      <SmileAdd/>
      <Cardlist/>
    </>
  )
}

export default App
