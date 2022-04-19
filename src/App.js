
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import edgy from './edgy.png';



function App() {
  const [quote, setQuote] = useState({quote:[]});
  const baseURL = "http://quote.default.svc.cluster.local:80/"

  const getQuote = () => {
    axios.get(baseURL)
      .then((res, err) => {
        if(res.status === 200){
          console.log(res.data)
          setQuote(res.data)
          console.log(quote)
        }
      });
    };
 
     
  return (
    <div className="App">
      <header className="App-header">
        <img src={edgy}/> 
        <div title={"Server: " + quote.server}>
        {quote.quote}
        </div>
        <div>
        <button onClick={getQuote}>Generate A New Quote</button>
        </div>
      </header>
      
    </div>
  );
}

export default App;
