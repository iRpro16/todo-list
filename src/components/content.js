import { SidebarController } from "../controllers/sidebarcontroller";


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

    static createContent(projectName, tasks) {
        // get project container
        const projectCont = document.querySelector(".project-cont");

        // create a div for tasks
        // for each task in tasks
        // call createTask
    }

    static createTask(title, description, dueDate, priority) {
        // This will create the UI for the tasks
        // Based on title, description, dueDate, priority

    }
}