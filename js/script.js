{
    const tasks = [];

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li class="list__item${task.done ? " list__item--done" : ""}">
            <button class="js-done">${task.done ? "✓" : ""}</button>
            ${task.content}
            <button class="js-remove list__button list__button--right">🗑</button>
            </li>
            `
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvents();

    }
    const bindEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });


        const removeButtons = document.querySelectorAll(".js-remove");
        
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);

            });

        });
    }


    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1)
        render();
    };



    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            if (newTaskContent === "") {
                return;
            }
            addNewTask(newTaskContent);

        });

    };
    init();
}