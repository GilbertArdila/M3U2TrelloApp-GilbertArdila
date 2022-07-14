import BASE_FAKE_API from "./personal.js";

//creating axios object with initial configuration
const API=axios.create({
    baseURL:BASE_FAKE_API,
    Headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
})

const getData=async(url)=>{
    try{
        const response=await API.get(url)
         return response;
     }
     catch(error){alert(`Ha sucedido un error al tratar obtener las tareas ${error}`)}

    
}

const createNewData=async(url,data)=>{
    
    try{
       const response=await API.post(url,data)
       return response;
    }
    catch(error){alert(`Ha sucedido un error al tratar de crear la tarea ${error}`)}
}

const updateData=async(url,id,data)=>{
    try{
       const response=await axios.put(`${url}/${id}`,data)
       return response
    }
    catch(error){alert(`Ha sucedido un error al tratar de actualizar el estado de la tarea ${error}`)}
}

const deleteData=async(url,id)=>{
    try{
       const response=await API.delete(`${url}/${id}`)
       return response
    }
    catch(error){alert(`Ha sucedido un error al tratar de borrar la tarea ${error}`)}
}
export const service={
    getData,
    createNewData,
    updateData,
    deleteData
};