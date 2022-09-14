import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-before-after"
  })
  return (
    <div className="App">
      <h1>beforeとafterの実験</h1>
      <div className="content-after">ok?</div>
      <a href="YOUR_URL" className="contact-btn">お問い合わせはこちら</a>
      <p>次の行</p>
      <div className="box1"></div>
      <p>ここにbox1を入れました</p>
      <div className="arrow_box"></div>
    </div>
  );
}

export default App;
