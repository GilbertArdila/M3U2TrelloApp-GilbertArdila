import newTask from './utils/newTask.js';


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