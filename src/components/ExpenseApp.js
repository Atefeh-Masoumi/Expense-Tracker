import { useEffect, useState } from "react";
import Chart from "./Chart";
import OverView from "./OverView";
import Transaction from "./Transaction";

const ExpenseApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transaction, setTransaction]= useState([]);
   
    const addTransaction =(formValue)=>{

        console.log(formValue);
        //{id:Date.now()}
        setTransaction([...transaction,{...formValue, id:Date.now()}]);
    }
    useEffect(()=>{
        let exp =0;
        let inc =0;
        transaction.forEach((t)=>{
            t.type==="expense"?(exp = exp + parseFloat(t.amount)): (inc=inc + parseFloat(t.amount));
        });
        setExpense(exp);
        setIncome(inc);
    },[transaction])
    return ( 
        <section className="container">
         <OverView income={income} expense={expense} addTransaction={addTransaction}/>
         <Transaction transaction={transaction}/>
         <Chart income={income} expense={expense} transaction={transaction}/>

      </section>
     );
}
 
export default ExpenseApp;