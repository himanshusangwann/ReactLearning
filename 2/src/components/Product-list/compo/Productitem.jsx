function B1(){
    return <button className="bg-red-600 text-3xl font-bold underline">Click</button>
}

function Productitem({a}){
return<div className="bg-green-400 text-3xl font-bold underline">
    {a}
    <B1/>
</div>
}

export default Productitem