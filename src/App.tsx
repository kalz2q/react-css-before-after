import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-before-after"
  })
  return (
    <div className="App">
      <div className="content-after">ok?</div>
      <a href="YOUR_URL" className="contact-btn">お問い合わせはこちら</a>
    </div>
  );
}

export default App;
