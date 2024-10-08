import { SingleItems } from "./SingleItem";

export const 
DisplayItems = ({subs, eliminarItem, editarItem}) =>{
    return(
        <div className="">
            <h2 className=" text-2xl font-semibold mb-2">Suscripciones</h2>
            <div className="grid grid-cols-1  gap-3 ">
                {
                    subs.map(item => (
                        <SingleItems key={item.id} 
                        id={item.id} 
                        price={item.price} 
                        type={item.type}
                        eliminarItem = {eliminarItem}
                        editarItem = {editarItem}
                        />
                    ))
                }
            </div>
        </div>
    );
}