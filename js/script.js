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
            ${task.content}
            </li>`;
        }
        document.querySelector(".js-list").innerHTML = htmlString;

    }

    const addNewTask = (newTaskContent) => {

        if (newTaskContent === "") {
            return;
        }
        tasks.push({
            content: newTaskContent,
        });

        render();

    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-newTask");
        const newTaskContent = newTask.value.trim();

        addNewTask(newTaskContent);
    }

    const init = () => {

        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);



    }

    init();
}