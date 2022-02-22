import { useEffect, useState } from "react";

const Transaction = ({transaction}) => { 
     //tnx=>all tnx shoulbe saved 

     const [searchitem, Setsearchitem] = useState("");
     const[filterdtnx, Setfilteredtnx]=useState(transaction);
     

     const filtered=(search)=>{
          if(!search || search===""){
               Setfilteredtnx(transaction)
               return
          }
          const filter =transaction.filter((t)=>t.desc.toLowerCase().includes(search.toLowerCase
               ()));
          Setfilteredtnx(filter)
          return;

     }
     const changHandler=(e)=>{
          Setsearchitem(e.target.value);
          filtered(e.target.value);
     }

     useEffect(()=>{
          filtered(searchitem);
     },[transaction]);

     

    if(!transaction.length) return <span>add some Transaction </span>;
  return ( 
       <div >
            
            <input className="search" type="text" value={searchitem} 
            onChange={changHandler} placeholder="search for transaction"/>
           
           {filterdtnx.length?
           filterdtnx.map((t)=> (
            <div key={t.id} className="transaction" 
            style={{borderRight:t.type==="expense"&& "4px solid red"}}> 
            
            <span>{t.desc} </span>
            <span>$ {t.amount}</span>
            
            </div>
            )) : "no item match"}
       
       </div>
  );
}
 
export default Transaction;