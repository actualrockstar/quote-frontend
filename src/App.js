
import './App.css';
import axios from 'axios';
import {useState} from 'react';
import edgy from './edgy.png';
import logo from './amb-labs-logo.png'



function App() {
  const [quote, setQuote] = useState({quote:[]});
  //For running React App locally
  //const baseURL = "quote.default.svc.cluster.local:80/"
  //For running in Docker container
  const baseURL = "/backend/"
  const config = {
    headers: {
      "x-telepresence-id": "20af3d89-4052-4d08-8fb7-0603fc9bd53c:quotefrontend",
    }
  }



  const getQuote = () => {
    axios.get(baseURL, config)
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
        {/* Replace the image with the Ambassador Logo by 
        replacing "edgy" with "logo" below */}
        <img src={logo} alt="image"/> 
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
