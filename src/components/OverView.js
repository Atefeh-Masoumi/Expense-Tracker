import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverView = ({income, expense, addTransaction}) => {
    const [isShow, setisShow] = useState(false);
    return ( 
        <>
        <div className="topsection">
         <p> Balance: {income - expense} </p>
         <button className={`btn ${isShow&& "cancel" }`} onClick={()=>setisShow((prevState)=>!prevState)}>
          {isShow  ? "Cancel" : "Add"}
          </button>

        </div>
         {isShow&& <TransActionForm addTransaction={addTransaction} setIsshow={setisShow}/>}
         <div className="resultSection">
             <div className="expensebox" >Expense <span style={{color:"red"}}> {expense} $ </span></div>
             <div className="expensebox">Income  <span> {income} $</span></div>
         </div>
        </>
     );
}
 
export default OverView;