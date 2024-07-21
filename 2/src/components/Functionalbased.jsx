const Dummydata = ['person1','Person2','Person3']
function Functionalbased(){
    return <ul>
    {Dummydata.map((item,index)=> <li key={index}>{item}</li>)}
    </ul>
}

export default Functionalbased