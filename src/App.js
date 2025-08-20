import salute from './salute.jpg';
import './App.css';
import josh2 from './josh2.jpg';
import Meme  from './component.js';
import Music from './Music';
function App() {
  
  function sarang() {
    alert("Suprise Fucker")
  }
  return (
    <>
    
    <div className="App">
      <header className="header">
        <img src={salute} className="logo" alt="logo" />
        <h3 className ="meme" > Meme Generator</h3>
        <h3 className ="bdy">Happy Birthday Sensei</h3>

          <Music/>
      </header>
       <Meme />
         <img src={josh2} onMouseOver ={sarang} className="josh2" alt="josh2-photo" />  {/* parent is App */}
        
    </div>
  
    </>
  );
}

export default App;
