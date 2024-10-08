import { useEffect, useState } from "react";
import { moneyFormat } from "./moneyFormat"

export const  Balance = ({count, subs,  spent, setSpent})=> {

  
  
  const updateBalance = () =>{
    const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
    setSpent(spent);

  }

  useEffect(()=>{
    updateBalance();

  }, [subs])
  
  return (
      <div className="text-xl font-semibold bg-slate-200/40 p-5 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-2xl rounded-br-2xl flex flex-col justify-evenly">
        
          <h3>Presupuesto : {moneyFormat(count)}</h3>
          <h3>Disponible : {moneyFormat(count - spent)}</h3>
          <h3>Gastado : {moneyFormat(spent)}</h3>
          
      </div>
    )
  }