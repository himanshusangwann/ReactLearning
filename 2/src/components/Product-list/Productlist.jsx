import Productitem from "./compo/Productitem"

function B1(){
    return <button>Click1</button>
}



function Productlist({name,city,d})
{
    return <div>{name}
    {city   }
    <ul>
        {d.map((single,index)=><Productitem a = {single}/>)}

    </ul>


    
    
    </div>
}



export default Productlist