document.querySelector('#push').onclick = function ()
{
    if(document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task")
        /*A user cannot input an empty task*/
    } else{
        /*New tasks are pushed into a new created div after being submitted*/
        document.querySelector('#tasks').innerHTML 
        += `
         <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="fa fa-times-circle-o" aria-hidden="true"></i>
            </button>
         </div>
        `;
        var currentTasks = document.querySelectorAll(".delete"); for(var i=0; i<currentTasks.length; i++) {
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#newtask input").value = "";
    }
}