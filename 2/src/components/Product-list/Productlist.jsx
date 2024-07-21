import Productitem from "./compo/Productitem"

function B1(){
    return <button>Click1</button>
}
const flag = false;


function Productlist({name,city,d})
{
    return <div>{flag?(<h1>{name}</h1>): ( <h1>{city }</h1>)}
    {name}
    {city }
    <ul>
        {d.map((single,index)=><Productitem a = {single}/>)}

    </ul>


    
    
    </div>
}



export default Productlist