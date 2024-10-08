import { moneyFormat } from "./moneyFormat";

export const SingleItems = ({price, type ,id, eliminarItem, editarItem}) =>{
    const urlImage =  `public/images/${type}.png`

    const HandleDelete = (e) =>{
        e.preventDefault();
        const answer = window.confirm( `Borrar Sub a ${type}`) 
        if (answer){
            eliminarItem(id)
        }      
    }

    const HandleEdit = (e)=>{
        e.preventDefault();
        editarItem(id);
    }
    
    return(
        <div className="grid grid-cols-3 px-6 items-center gap-5 bg-slate-200 max-w-[95%] min-w-[95%] mx-auto rounded-xl">
            <div className="flex items-center min-h-[110px] justify-center">
                <img src={urlImage} alt={type} width="180px"  className=""/>
            </div>
            
            <div className="text-lg font-semibold">
                <h3>Precio: {moneyFormat(Number(price))}</h3>
            </div>
            <div className="flex flex-col gap-2">
                <a href="" className="px-3 py-1  bg-red-300 rounded-md" onClick={HandleDelete}>Borrar</a>
                <a href=""  className="px-3 py-1  bg-green-300 rounded-md" onClick={HandleEdit}>Editar</a>
            </div>
        </div>
    );
}