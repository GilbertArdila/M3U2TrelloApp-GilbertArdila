import { service } from "./gettiingData.js";
import BASE_FAKE_API from "./personal.js";
const createTaskContainer=({
    tituloTask,
    responsableTask,
    plazoTask,
    id

})=>{


    const div = document.createElement("div");
    div.classList.add("task-div")

    const close=document.createElement("span");
    close.classList.add("task-div__close");
    close.innerText="X";

    const h3 = document.createElement("h3");
    h3.innerText = tituloTask;

    const p = document.createElement("p");
    p.innerText = responsableTask;

    const p2 = document.createElement("p");
    p2.innerText = plazoTask;

    div.append(close,h3,p,p2);

     //adding listener to close span and delete task
     close.onclick=()=>{
       
        service.deletingData(BASE_FAKE_API,id);
     }
   
    return div;

}

export default createTaskContainer;