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

function KmToMiles(){
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
        <label htmlFor="km">Kilomiter</label>
        <input id="km" value ={!flipped ? amount : amount/0.6214} palcehoder="Kilomiter" type="number" onChange={onChange} disabled = {flipped}/>
      </div>
      <div>
          <label htmlFor="miles">Miles</label>
          <input id="miles" value ={flipped ? amount : amount*0.6214} palcehoder="Miles" type="number" onChange={onChange} disabled = {!flipped}/>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  )
}

function App(){
  const [index, setIndex] = React.useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value)
  }
  return(
    <div>
      <h1>Super Convert</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Houres</option>
        <option value="1">KM & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

const root = document.getElementById("root");
function render(){
  ReactDOM.render(<App />, root);
}
render();