function Btn({text, changeValue, fontSize = 16}){
  return(
    <button 
      onClick={changeValue} 
      style={{
        backgroundColor:"tomato",
        color:"white",
        padding:"10px 20px",
        border:0,
        borderRadius:10,
        fontSize,
      }}>
    {text}
    </button>
  );
}

const MemorizedBtn = React.memo(Btn);

Btn.propTypes={
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
}
function App(){
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  return(
    <div>
      <MemorizedBtn text={value} changeValue={changeValue} fontSize={18}/>
      <MemorizedBtn text={"Continue"} fontSize={18} />
    </div>
  );
}

const root = document.getElementById("root");
function render(){
  ReactDOM.render(<App />, root);
}
render();