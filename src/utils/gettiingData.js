const gettingData=async(url)=>{
    axios.get(url)
    .then(data=>console.log(data.data))
    .catch((error)=>console.log(error))
}

export default gettingData;