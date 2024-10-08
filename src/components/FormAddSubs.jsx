import { useState } from "react";

export const FormAddSubs= ({setPrice, setType ,type ,price , setSubs, subs, editId, setEditId, spent, count}) =>{

    const [error , setError] = useState(false);
    const [errorMoney , setErrorMoney] = useState(false);

    const handleSubs = e => {
        e.preventDefault();
        if(price === "" || Number(price) < 0 || type === "" ){
            setError(true);
            return;
        }

        if(count - spent < Number(price)){
            setErrorMoney(true);
            return;
        }


        setError(false);
        setErrorMoney(false);
        if(editId != ""){
            setEditId("");
            const newSubs = subs.map(item => {
                if(item.id === editId ){
                    item.type = type;
                    item.price = price;
                }
                return item;
            })
            setSubs(newSubs);
        }else{
            const data = {
                type: type,
                price: price,
                id: Date.now()
    
            }
            setSubs([...subs, data]);
        }

        setType("");
        setPrice("");
        
        
        /* console.log(type);
        console.log(price); */
        
    }
    return(
        <div className="flex flex-col justify-center gap-3">
            <h3 className="text-lg font-semibold">Agregar Suscripciones</h3>
            <form onSubmit={ handleSubs} className="flex-col flex">
                <p>servicio</p>
                <select onChange={e => setType(e.target.value)} className="transition-all text-center" value={type}>
                    <option value="">-- Elegir --</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney Plus</option>
                    <option value="hboMax">HBO Max</option>
                    <option value="starPlus">Star Plus</option>
                    <option value="primeVideo">Prime Video</option>
                    <option value="spotify">Spotify</option>
                    <option value="appleTv">Apple TV</option>
                </select>

                <p className="mt-5">cantidad</p>
                <input type="number" placeholder="500$" className="rounded-md px-3 py-1 text-black" onChange={e => setPrice(e.target.value)} value={price}/>
                {editId != "" ?  <input type="submit" value="Guardar" className="text-white bg-slate-900 rounded-md poin py-1 hover:text-black hover:bg-zinc-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-slate-50 mt-3" /> : <input type="submit" value="Agregar" className="text-white bg-slate-900 rounded-md poin py-1 hover:text-black hover:bg-zinc-200 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-slate-50 mt-3" />}

                
            </form>
            {error ? <p className="text-red-700"> Campos invalidos</p> : null}
            {errorMoney ? <p className="text-red-700"> No Tienes Presupuesto</p> : null}
        </div>
    );
}