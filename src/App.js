import React,{useState} from 'react';
import Button from "./Components/Button"
import './App.css';
import Input from "./Components/Input"
import ClearButton from "./Components/ClearButton"

function App() {
  const [input, setInput] = useState("0")
  const [previousNumber, setpreviousNumber] = useState(0)
  const [operator, setoperator] = useState("")
  const addInput=(val)=>{
   if(operator!==""){
    setInput(input==="0"?val:input+val);
   }
   else{
     setInput(val);
   }
    
  }
  const addDecimal=()=>{
    if(input.indexOf(".")===-1){
      setInput(input+".")
    }
  }
  const clearInput=()=>{
    setInput("0")
  }
  const evaluate=()=>{
    
    switch (operator) {
      case "plus":
        
        setInput((parseFloat(previousNumber)+parseFloat(input)).toString());
        
        break;
        case "sub":
        
        setInput((parseFloat(previousNumber)-parseFloat(input)).toString());
        
        break;
        case "div":
        
        setInput((parseFloat(previousNumber)/parseFloat(input)).toString());
        
        break;
        case "mul":
        
        setInput((parseFloat(previousNumber)*parseFloat(input)).toString());
        
        break;
    
      default:
        break;
    }
  }
  const add=()=>{
    setpreviousNumber(input);
   
    setoperator("plus")
  }
  const sub=()=>{
    setpreviousNumber(input);
   
    setoperator("sub")
  }
  const div=()=>{
    setpreviousNumber(input);
    
    setoperator("div")
  }
  const mul=()=>{
    setpreviousNumber(input);
    setoperator("mul")
  }
  return (
    
    <div className="App">      
      <div className="calc-wrapper">
      <h1>Calculator</h1>
      <div className="row">
        <Input>{input}</Input>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button  handleClick={addInput}>8</Button>
          <Button  handleClick={addInput}>9</Button>
          <Button handleClick={div}>/</Button>
        </div>
        <div className="row">
          <Button  handleClick={addInput}>4</Button>
          <Button  handleClick={addInput}>5</Button>
          <Button  handleClick={addInput}>6</Button>
          <Button handleClick={mul}>*</Button>
        </div>
        <div className="row">
          <Button  handleClick={addInput}>1</Button>
          <Button  handleClick={addInput}>2</Button>
          <Button  handleClick={addInput}>3</Button>
          <Button handleClick={add}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addDecimal}>.</Button>
          <Button  handleClick={addInput}>0</Button>
          <Button handleClick={evaluate}>=</Button>
          <Button handleClick={sub}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={clearInput}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
