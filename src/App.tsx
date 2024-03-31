import './App.css'
import Cardlist from './components/Cardlist/Cardlist';
import React, {useContext, useEffect} from 'react';
import SmileAdd from './components/SmileAdd/SmileAdd';
import {AppContext} from './contexts/app-context';

function App() {
  const {setSmiles} = useContext(AppContext);

 useEffect(() => {
    fetch('/api')
      .then(resp => resp.json())
      .then(data => setSmiles(data))
  }, [setSmiles])

  return (
    <>
      <SmileAdd/>
      <Cardlist/>
    </>
  )
}

export default App
