import './App.css';
function App() {


  
  
  const arttir = () => {
    const sonuc = document.getElementById("sonuc");
    sonuc.innerText = Number(sonuc.innerText)+1;
  }
  const sifirla = () =>{
    const sonuc = document.getElementById("sonuc");
    sonuc.innerText = 0;
}
  const azalt = () => {
    const sonuc = document.getElementById("sonuc");
    sonuc.innerText = Number(sonuc.innerText)-1;
  }

  return <div className="App">
    <h1>Counter App</h1>

<div id="sonuc">980</div>
    <div className="butons">
    <button onClick={arttir}>+</button>
    <button onClick={sifirla}>0</button>
    
    <button onClick={azalt}>-</button>
    </div>

  </div>;

}

export default App;
