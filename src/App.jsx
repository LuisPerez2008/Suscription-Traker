import { useState } from "react";
import { FormAddMoney } from "./components/FormAddMoney";
import { Header } from "./components/Header";
import { MainControl } from "./components/MainControl";

function App(){
    const [count , setCount] = useState(0);
    const [isValid, setIsValid] = useState(false);

    return(

        <>  
          <div className=" min-h-[300px] max-w-[50%] mx-auto mt-5  text-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-300 shadow-xl shadow-blue-400/50 flex-col space-y-9 pb-11">
            <Header/>
            {!isValid ? <FormAddMoney setCount={setCount} setIsValid={setIsValid}/> : <MainControl count={count} /> }
            
           
          </div>
           
        </>
        
    )
}

export default App