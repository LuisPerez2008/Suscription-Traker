import { useState } from "react"



export const FormAddMoney = ( {setCount , setIsValid}) => {

    const [input, setInput] = useState("");
    const [error , setError] = useState(false);
    const handleForm = e =>{
      e.preventDefault();
      if(input === "" || Number(input) < 0){
        setError(true);
        return;         
      }
      setError(false);
      setCount(Number(input))

      console.log(input);
      setIsValid(true);
      
    }

    const validarNumero = (e) =>{
      e.target.value = e.target.value.replace(/[^0-9.]/g, '');
    }


    return (
      
      <div className=" flex-col justify-center text-white">
        
        <form action="" className="flex flex-col gap-3 text-center max-w-[40%] mx-auto" onSubmit={handleForm}>
          <p>Agregar Presupuesto:</p>
          <input type="number" placeholder="500$" onChange={e=> setInput(e.target.value)} className="rounded-md px-3 py-1 text-black" onInput={validarNumero}/>
          <input type="submit" value="Agregar" className="bg-slate-900 rounded-md poin py-1 hover:text-black hover:bg-zinc-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-slate-50" />
        </form>
        {error ? <p className="text-red-700">Presupusto invalido</p> :""}
      </div>
    )
  
}
