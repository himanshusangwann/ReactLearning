import { useState } from "react";
import Productitem from "./compo/Productitem"

function B1(){
    return <button>Click1</button>
}
const flag = true;



function Productlist({name,city,d})
{
    const [state,setstate] = useState(flag)
    const ToggleText=()=>{
        setstate(!state)
    }
    return <div>{flag?(<h1>{name}</h1>): ( <h1>{city }</h1>)}
    {name}
    {city}
    <ul>
        {d.map((single,index)=><Productitem a = {single}/>)}

    </ul> 

    {state?(<h1>{name}</h1>):(<h1>hello</h1>)}
    <button onClick={ToggleText} className="font-bold ">Toggle Text</button>
    
    
    </div>
}



export default Productlist