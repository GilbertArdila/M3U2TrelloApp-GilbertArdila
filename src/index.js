import newTask from './utils/newTask.js';
import gettingData from './utils/gettiingData.js';
import BASE_FAKE_API from './utils/personal.js';

newTask();
gettingData(BASE_FAKE_API);

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