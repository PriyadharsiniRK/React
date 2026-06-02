import { useState } from "react";
import Spread from "./Spread.jsx"
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
function App() {
    
  const loanAmount = 2500000;

  const [interestRate, setInterestRate] = useState(0.03);

  const interestCost = loanAmount * interestRate;

  return (
      <div>
        <h1>Interest Calculator</h1>

        <p>Loan Amount: {loanAmount}</p>

        <button onClick={() => setInterestRate(0.03)}>
          3%
        </button>

        <button onClick={() => setInterestRate(0.04)}>
          4%
        </button>

        <button onClick={() => setInterestRate(0.05)}>
          5%
        </button>

        <h2>Selected Rate: {interestRate * 100}%</h2>

        <h2>Interest Cost: {interestCost}</h2>
          <Header/>
          <Spread/>
          <Footer/>
      </div>
  );
}

export default App;