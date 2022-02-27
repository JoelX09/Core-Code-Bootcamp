interface Loan {
    principal: number;
    interestRate: number;
  }
  
  interface ConventionalLoan extends Loan {
    months: number;
  }
  
  function calculateInterestOnlyLoanPayment(data: Loan): string {
      // Calculates the monthly payment of an interest only loan
      let interest = data.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
      let payment;
      payment = data.principal * interest;
      return 'The interest only loan payment is ' + payment.toFixed(2);
  }
  
  function calculateConventionalLoanPayment(data: ConventionalLoan): string {
      // Calculates the monthly payment of a conventional loan
     let interest: number = data.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
     let payment: number;
     payment = data.principal * interest / (1 - (Math.pow(1/(1 + interest), data.months)));
     return 'The conventional loan payment is ' + payment.toFixed(2);
  }
  
  let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
  console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
  
  let conventionalPayment = calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});
  console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"