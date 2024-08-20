import { CDN_URL } from "../../utils/constants/constants";

const ItemList = ({items})=>{
    console.log(items)
    return(
        <div>
           {  items.map((item)=>(
            <div key={item.card.info.id} className="border-b-2 m-2 p-2 border-gray-300">
                <img className="w-[80px] h-[60px] rounded-md" src={CDN_URL + item.card.info.imageId}></img>
                <div className="text-left">
                   <span className="font-bold ">{item.card.info.name}</span>
                   <span className="text-sm"> Rs-{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
                </div>  
                    <p className="text-xs text-left">{item.card.info.description}</p>
                    <button className="bg-white text-black rounded-lg m-1 px-2 hover:bg-blue-200 "> Add </button>
                </ div>
           
           ))}
        </div>
    )
}

export default ItemList;