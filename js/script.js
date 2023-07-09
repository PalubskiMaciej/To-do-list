{
    let tasks = [];

    const render = () => {
        renderTasks();
    }

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__element">
            <button class="js-done list__button">${task.done ? "✓" : ""}</button>
            <span class="list__item${task.done ? " list__item--done" : ""}">${task.content}</span>
            <button class="js-remove list__button list__button--remove">🗑</button>
        </li > `;
        };
        document.querySelector(".js-list").innerHTML = htmlString;

        bindTasksEvents();
    };

    const removeTask = (index) => {

        tasks = [
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ];
        render();
    };

    const toggleTaskDone = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            {
                ...tasks[index],
                done: !tasks[index].done
            },
            ...tasks.slice(index + 1),
        ];
        render();
    };

    const bindTasksEvents = () => {
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
    };

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
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