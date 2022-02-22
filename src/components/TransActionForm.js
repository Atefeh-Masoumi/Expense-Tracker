import { useState } from "react";

const TransActionForm = ({addTransaction,setIsshow}) => {
    const[formValue, SetformValue]=useState({
        type:"expense",amount:0, desc:'',});

    const changeHandler=(e)=>{
        SetformValue({...formValue,[e.target.name]: e.target.value})
        console.log(e.target.value)
    }
    const submitHandler=(e)=>{
    e.preventDefault();
    addTransaction(formValue);
    setIsshow(false)
    }
    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" name="desc" onChange={changeHandler} value={formValue.desc}/>
            <input type="number" name="amount" onChange={changeHandler} value={formValue.amount}/>
            <div className="radiobox">
                <input type="radio" value="expense" name="type" onChange={changeHandler} checked={formValue.type==="expense"} id="expense"/>
                    <label htmlFor="expense">Expense</label>
                <input type="radio" value="income" name="type" onChange={changeHandler} checked={formValue.type==="income"} id="income"/>
                    <label htmlFor="income">Income</label>
            </div>
            <button className="btn primary" type="submit">Add Transaction</button>
        </form>
     );
}
 
export default TransActionForm;