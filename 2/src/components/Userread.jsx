import { useEffect, useState } from "react";

const Userread = () => {
  const [user, setuser] = useState([]);
  const [pending,setpending] =useState(false)

  async function fetchalluser() {
    setpending(true)
    const url = "https://dummyjson.com/users";

    const response = await fetch(url);

    const json1 = await response.json();
    if (json1?.users) {
      setuser(json1?.users);
      setpending(false)
    } else {
      setuser([]);
      setpending(false)
    }
  }
  console.log(user);
 /*  useEffect(() => {
    fetchalluser();
  }, []);  */

  if(pending) return <h1>Loading Data please wait</h1>
    
  

  return( <div>
    {
        
        user&&user.length>0?
        user.map((item)=><li key={item.id}>{item.firstName}</li>):<h1>no data found</h1>
    }
     
      { <button onClick={()=>fetchalluser()}>Click Me</button> }
    
  </div>);
};

export default Userread;
