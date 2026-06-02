import {useState} from "react";
import Header from "./Header";
import Footer from "./Footer"

function App() {
    const loanAmount=2500000;
    const[interestRate,setInterestRate]=useState(0.03);
    const interestcost=loanAmount*interestRate;
    
  return (
      <div>
        <Header />
        <h1>Hello React 🚀</h1>
          <h2>Interest Calculator</h2>
          <p>Loan Amount:{loanAmount}</p>
          <button onClick={()=>setInterestRate(0.03)}>4%</button>
          <button onClick={()=>setInterestRate(0.04)}>4%</button>
          <button onClick={()=>setInterestRate(0.05)}>4%</button>
          <h2>Interestcost:{interestcost}</h2>
          <Footer />
      </div>
  );
}

export default App;