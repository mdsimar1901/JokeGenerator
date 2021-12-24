import React,{useState,useEffect} from 'react';

const URL_Link = `https://api.chucknorris.io/jokes/random`;


function App() {
  const [joke,setJoke] = useState('');
  const generateJoke = () =>{
    fetch(URL_Link)
    .then(res =>res.json())
    .then(data =>setJoke(data.value));

  }

  useEffect(() => {
    generateJoke();
  },[])

  return (
    <div className="box">
      <h1>Jokes Generator</h1>
      <p dangerouslySetInnerHTML = {{__html:joke}} />
      <button onClick = {generateJoke}>Click Here for the joke</button>
    </div>
  );
}

export default App;
