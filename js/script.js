{
    let tasks = [];

    let hideDoneTasks = false;

    const render = () => {
        renderTasks();
        renderButtons();
    }

    const renderTasks = () => {
        let htmlTasksString = "";

        for (const task of tasks) {
            htmlTasksString += `
        <li class="list__element
            ${hideDoneTasks && task.done ? " list__element--hidden" : ""}" >
            <button class="js-done list__button">${task.done ? "✓" : ""}</button>
            <span class="list__item${task.done ? " list__item--done" : ""}" > ${task.content}</span >
            <button class="js-remove list__button list__button--remove">🗑</button>
        </li > `;
        };
        document.querySelector(".js-list").innerHTML = htmlTasksString;

        bindTasksEvents();
    };

    const renderButtons = () => {
        let htmlButtonsString = "";

        if (tasks.length > 0) {
            htmlButtonsString += `
        <span class="section__buttons">
            <button class="section__button js-toggleHideDoneTasksButton">${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
            <button class="section__button js-setAllTasksDoneButton"
            ${tasks.every(({ done }) => done) ? "disabled" : ""}>Ukończ wszystkie</button>
        </span>`
        };
        document.querySelector(".js-buttons").innerHTML = htmlButtonsString;

        bindButtonsEvents();
    };

    const bindButtonsEvents = () => {
        const toggleHideDoneTasksButton = document.querySelector(".js-toggleHideDoneTasksButton");
        if (toggleHideDoneTasksButton) {
            toggleHideDoneTasksButton.addEventListener("click", toggleHideDoneTasks);
        };

        const setAllTasksDoneButton = document.querySelector(".js-setAllTasksDoneButton");
        if (setAllTasksDoneButton) {
            setAllTasksDoneButton.addEventListener("click", setAllTasksDone);
        };
    };

    const toggleHideDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;
        render();
    };

    const setAllTasksDone = () => {
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }));
        render();
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
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-newTask");
        const newTaskContent = newTask.value.trim();

        if (newTaskContent === "") {
            return;
        };
        addNewTask(newTaskContent);

        newTask.value = "";
        newTask.focus();
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();
};