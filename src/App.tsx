import React ,{useEffect} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      useEffect(()=> {
        document.title = "react-css-before-after"
      })
    </div>
  );
}

export default App;
