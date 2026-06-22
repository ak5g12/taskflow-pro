const taskInput =
document.getElementById("taskInput");

const addBtn =
document.getElementById("addBtn");

let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

addBtn.addEventListener("click", () => {

    const text =
    taskInput.value.trim();

    if(text === ""){
        return;
    }

    tasks.push({
        id:Date.now(),
        text:text,
        status:"todo"
    });

    taskInput.value = "";

    saveTasks();

    renderTasks();

});

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

function renderTasks(){

    document.getElementById("todo")
    .innerHTML = "";

    document.getElementById("progress")
    .innerHTML = "";

    document.getElementById("done")
    .innerHTML = "";

    tasks.forEach(task => {

        const card =
        document.createElement("div");

        card.className = "task";

        let nextButton = "";

        if(task.status === "todo"){

            nextButton =
            `
            <button
            class="move"
            onclick="moveTask(${task.id})">

            Start

            </button>
            `;
        }

        else if(
        task.status === "progress"
        ){

            nextButton =
            `
            <button
            class="move"
            onclick="moveTask(${task.id})">

            Complete

            </button>
            `;
        }

        card.innerHTML = `
            <p>${task.text}</p>

            <div class="task-buttons">

                ${nextButton}

                <button
                class="delete"
                onclick="deleteTask(${task.id})">

                Delete

                </button>

            </div>
        `;

        document
        .getElementById(task.status)
        .appendChild(card);

    });

    updateStats();
}

function moveTask(id){

    tasks = tasks.map(task => {

        if(task.id === id){

            if(task.status === "todo"){
                task.status = "progress";
            }

            else if(
            task.status === "progress"
            ){
                task.status = "done";
            }

        }

        return task;

    });

    saveTasks();

    renderTasks();

}

function deleteTask(id){

    tasks =
    tasks.filter(
        task => task.id !== id
    );

    saveTasks();

    renderTasks();

}

function updateStats(){

    document
    .getElementById("totalTasks")
    .textContent =
    tasks.length;

    document
    .getElementById("doneTasks")
    .textContent =
    tasks.filter(
        task =>
        task.status === "done"
    ).length;
}

renderTasks();