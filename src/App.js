

import './App.css';

function App() {
  const linklist = ["Services", "Projects", "About"]
  return (
    <div className="App">

     <div className="logo">
       <img src="https://cdn.afterdawn.fi/v3/news/original/facebook-2015-logo-hi-res.jpg" alt="facebooklogo" />
     </div>
     <div className= "link">
       {linklist.map((el) => {
        return <p> {el} </p>
       })}
     </div>
     <div className= "button">
       <button>Contect</button>
     </div>

    </div>
  );
}

export default App;
