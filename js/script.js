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

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("click", onFormSubmit);



    }

    init();
}