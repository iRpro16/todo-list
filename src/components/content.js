import { SidebarController } from "../controllers/sidebarcontroller";
import { compareAsc, format } from "date-fns";


export class Content {
    static loadContent() {
        // get content
        let content = document.querySelector(".content");
        content.innerHTML = "";
        const projectsCont = document.querySelector(".projects-cont");

        // create central div
        const projectCont = document.createElement("div");
        projectCont.classList.add("project-cont");

        // append first project of projects cont
        if (projectsCont.firstChild) {
            const firstObjectName = SidebarController.arrayProjects[0].name;
            const firstProject = document.createElement("h1");
            firstProject.innerText = firstObjectName;
            projectCont.append(firstProject);
        };
        content.append(projectCont);  
    };

    static createContent(projectObject) {
        // get project container
        const projectCont = document.querySelector(".project-cont");
        projectCont.innerHTML = "";

        // create heading
        const projectHeading = document.createElement("h1");
        projectHeading.classList.add(projectObject.name);
        projectHeading.innerText = projectObject.name;
        // append
        projectCont.append(projectHeading);

        // get current date it was created
        const currentDay = format(new Date(), "MM/dd/yyyy");
        const displayDate = document.createElement('p');
        displayDate.innerText = `Created: ${currentDay}`;
        // append
        projectCont.append(displayDate);

        // create tasks div
        const tasksDiv = document.createElement("div");
        tasksDiv.classList.add("tasks-div");
        // append
        projectCont.append(tasksDiv);

        // style each task in tasks
        projectObject.tasks.forEach(task => {
            Content.createTask(task.title, task.description, task.dueDate, task.priority);
        });
    }

    static createTask(title, description, dueDate, priority) {
        // get tasks list
        const tasksList = document.querySelector(".tasks-div");
        // create elements
        // title
        const taskTitle = document.createElement("h2");
        taskTitle.innerText = title;
        // description
        const taskDescription = document.createElement("p");
        taskDescription.innerText = description;
        // due
        const taskDue = document.createElement("p");
        taskDue.innerText = `Due: ${dueDate}`;
        // priority
        console.log(priority);

        // task div
        const taskCont = document.createElement("div");
        taskCont.classList.add('task');

        // checkbox 
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        // append
        taskCont.append(checkbox);

        // other elements
        const elementsDiv = document.createElement("div");
        elementsDiv.classList.add("elements-div");

        // left side
        const leftTask = document.createElement("div")
        leftTask.classList.add("left-side");
        leftTask.append(taskTitle, taskDescription);

        // right side
        const rightTask = document.createElement("div");
        rightTask.classList.add("right-side");
        rightTask.append(taskDue);
        // append
        elementsDiv.append(leftTask, rightTask);

        // append all
        taskCont.append(elementsDiv);
        tasksList.append(taskCont);
    }
}