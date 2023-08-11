import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { Navbar } from "./components/Navbar";
import Result from "./components/Result";
import { SliderSelect } from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";

function App() {
//name for our constant and a function[name, function]
  // const [a, setA] = useState(15)

  // const [counter, setCounter] = useState(0);
  
  // const[homeValue, setHomeValue] = useState(3000);
  // const[downPayment, setPayment] = useState(3000);
  // const[loanAmount, setLoanAmount] = useState(3000);
  // const[loanTerm, setLoanTerm] = useState(3000);

  const[data, setData] =useState({
    homeValue: 3000,
    downPayment: 3000,
    loanAmount:3000,
    loanTerm:5,
    interestRate:5,
  })

  //to change the data
  // setData({
  //   loanTerm: 234484,
  // })

  // console.log(a)
  // now to reassign the value of a we have to use setA function

// const x = 10 // assignment
// x=20 //reassignment


  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <button onClick ={()=>  setCounter(counter-1)}>DECREMENT</button>
      <p>{counter}</p>
      <button onClick ={()=>  setCounter(counter+1)}>INCEMENT</button> */}
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing = {5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
