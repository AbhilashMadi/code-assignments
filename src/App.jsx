import React from 'react';
import "./css/main.css";

/*component imports*/
import CardPrint from './components/cardPrint';
import MemebershipCard from './components/memebershipCard';
import CardForm from './components/cardForm';

export default function App() {
  return (
    <React.Fragment>
      <MemebershipCard/>
      <CardForm/>
    </React.Fragment>
  )
}
