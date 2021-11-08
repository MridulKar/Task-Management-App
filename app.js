//define all constants
const form= document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearBTN = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

//all event loaders
loadAllEvents();

function loadAllEvents() {
    //add task
    form.addEventListener('submit',addTask);
    //remove task
    taskList.addEventListener('click',removeTask);
    //clear tasks
    clearBTN.addEventListener('click',clearTask);
    //filter
    filter.addEventListener('keyup', filterTask);
}


//add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }


    const li= document.createElement('li');
    li.className= 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link= document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);

    e.preventDefault();

}

//remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
        
    }
}

//clear task
function clearTask(e){
    if(confirm('Are you sure?')){
        taskList.innerHTML='';
        e.preventDefault();
    }
}


//filter Task
function filterTask(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
          task.style.display = 'block';
        }
        else{
          task.style.display = 'none';
        }
    })
  
  }