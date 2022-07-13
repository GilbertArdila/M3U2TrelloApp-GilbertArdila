import BASE_FAKE_API from "./personal.js";

//creating axios object with initial configuration
const API=axios.create({
    baseURL:BASE_FAKE_API,
    Headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
})

const gettingData=async(url)=>{
    try{
        const response=await API.get(url)
         return response;
     }
     catch(error){alert(`Ha sucedido un error al tratar obtener las tareas ${error}`)}

    
}

const creatingNewData=async(url,data)=>{
    
    try{
       const response=await API.post(url,data)
       return response;
    }
    catch(error){alert(`Ha sucedido un error al tratar de crear la tarea ${error}`)}
}

const putingData=async(url,id,data)=>{
    try{
       const response=await axios.put(`${url}/${id}`,data)
       return response
    }
    catch(error){alert(`Ha sucedido un error al tratar de actualizar el estado de la tarea ${error}`)}
}

const deletingData=async(url,id)=>{
    try{
       const response=await API.delete(`${url}/${id}`)
       return response
    }
    catch(error){alert(`Ha sucedido un error al tratar de borrar la tarea ${error}`)}
}
export const service={
    gettingData,
    creatingNewData,
    putingData,
    deletingData
};