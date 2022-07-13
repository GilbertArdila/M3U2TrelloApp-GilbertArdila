import newTask from './utils/newTask.js';
import {service} from './utils/gettiingData.js';
import BASE_FAKE_API from './utils/personal.js';
import createTaskContainer from './utils/createTaskContainer.js';

newTask();


//code to use sortable
new Sortable(left,{
    group:'shared',
    animation:150,
    ghostClass:'gost',
    chosenClass:'choosen'
    
})
new Sortable(center,{
    group:'shared',
    animation:150,
    ghostClass:'gost',
    chosenClass:'choosen',
    
})
new Sortable(right,{
    group:'shared',
    animation:150,
    ghostClass:'gost',
    chosenClass:'choosen'
})


window.onload = () => {
    //calling gettingData and showing each task on DDBB
    const getData = async () => {
        try {
            const data = await service.gettingData(BASE_FAKE_API)
            const taskes = data.data;
            taskes.forEach((task) => {
                //calling createTaskContainer
                const div = createTaskContainer({
                    tituloTask: task.title,
                    responsableTask: task.User,
                    plazoTask: task.Date,
                    id:task.id

                })
                //checking the value board in each task
                if(task.board==='to-do'){
                    taskBoard_toDo.appendChild(div)
                }
                else if(task.board==="doing"){
                    taskBoard_doing.appendChild(div)
                }
                else if(task.board==='done'){
                    taskBoard_done.appendChild(div)
                }
                
            })
           



        }
        catch (error) { console.error(error) }



    }

    getData();



}