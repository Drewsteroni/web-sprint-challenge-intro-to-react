import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [info, setInfo] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then((res) => {
      setInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  console.log(info);

  const AppStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.6rem;
    `

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <AppStyle>
        {info.map((ch) =>{
          return <Character key = {ch.id} character={ch}/>;
        })}
      </AppStyle>
    </div>
  );
}

export default App;
