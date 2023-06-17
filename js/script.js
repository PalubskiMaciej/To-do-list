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

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("click", (event) => {
            event.preventDefault();
        });




    }

    init();
}