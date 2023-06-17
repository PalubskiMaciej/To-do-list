{
    const tasks = [
        {
            content: "zrobić listę zadań",
            done: false,
        },
        {
            content: "obejrzeć moduł",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li>
            <button class="js-done">${task.done ? "✓" : ""}</button>
            <span class="list__item${task.done ? " list__item--done" : ""}">${task.content}</span>
                    <button class="js-remove"> Usuń</button>
            </li > `;
        }
        document.querySelector(".js-list").innerHTML = htmlString;

        toggleTaskDone();
        removeTasks();
    }

    const removeTasks = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1)
                render();
            });
        });
    }



    const toggleTaskDone = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                tasks[index].done = !tasks[index].done;
                render();
            });
        });
    }

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-newTask");
        const newTaskContent = newTask.value.trim();

        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);

        newTask.value = "";
        newTask.focus();
    }

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);



    }

    init();
}