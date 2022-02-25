const root = document.getElementById("root");
function render(){
  ReactDOM.render(<App />, root);
}
function MinutesToHours(){
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false); 
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  return(
  <div>
    <div>
      <label htmlFor="minutes">Minutes</label>
      <input id="minutes" value={!flipped ? amount : amount * 60} placehoder="Minutes" type="number" onChange={onChange} disabled = {flipped}/>
  </div>
    <div>
      <label htmlFor="hours">Hours</label>
      <input id="hours" value={flipped ? amount : Math.round(amount/60)} placehoder="Hours" type="number" disabled = {!flipped} onChange={onChange}/>
    </div>
  <button onClick={reset}>Reset</button>
  <button onClick={onFlip}>Flip</button>
  </div>
  );
}
function 
function App(){
  return(
    <div>
      <h1>Super Convert</h1>
      <MinutesToHours />
    </div>
  );
}
render();