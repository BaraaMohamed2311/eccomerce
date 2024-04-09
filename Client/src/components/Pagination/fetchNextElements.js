function fetchNextElements(link , setProducts , setIsFetching){
    setIsFetching(true)
    fetch(link,{
        mode:"cors"
    })
    .then(res => res.json())
    .then((data)=>{console.log("data",data); setProducts(data.products); setIsFetching(false)})
    .catch((err)=>{console.log("error in fetching next elements",err)})
}

export default fetchNextElements;