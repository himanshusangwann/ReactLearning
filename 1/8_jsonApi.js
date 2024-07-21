async function getproduct(){
    const data = await fetch('https://dummyjson.com/products')
    const data1 = await data.json()
    const data2 = data1
    console.log(data2)
    
}

getproduct()