{
    const tasks = [];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            
            htmlString += `
            <li class="list__item">
            <button class="js-done list__button">${task.done ? "✓" : ""}</button>
            <span class="list__task${task.done ? " list__task--done" : ""}">${task.content}</span>
            <button class="js-remove list__button list__button--remove">🗑</button>
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

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);

        newTaskElement.value = "";
        
        newTaskElement.focus();
    };


    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit)
    };
    init();
}