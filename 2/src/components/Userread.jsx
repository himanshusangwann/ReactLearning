import { useEffect, useState } from "react";

const Userread = () => {
  const [user, setuser] = useState([]);

  async function fetchalluser() {
    const url = "https://dummyjson.com/users";

    const response = await fetch(url);

    const json1 = await response.json();
    if (json1?.users) {
      setuser(json1?.users);
    } else {
      setuser([]);
    }
  }
  console.log(user);
  useEffect(() => {
    fetchalluser();
  }, []);

  return( <div>
    {
        user&&user.length>0?
        user.map((item)=><li key={item.id}>{item.firstName}</li>):<h1>no data found</h1>
    }
  </div>);
};

export default Userread;
