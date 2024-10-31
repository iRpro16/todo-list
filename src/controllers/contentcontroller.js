import { SidebarController } from "./sidebarcontroller";
import { Content } from "../components/content";
class Tasks {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class ContentController {
    // add event listeners 
    static addProjectListeners() {
        const projects = document.querySelectorAll(".project");
        projects.forEach(project => {
            project.addEventListener("click", ContentController.appendProject);
        });
    }

    static appendProject(e) {
        // ID and get array
        const projectId = e.target.id;
        const projectObjects = SidebarController.arrayProjects;

        // Loop and append
        projectObjects.forEach(project => {
            if (project.name === projectId) {
                Content.createContent(project);
            };
        });
    };
}

// the creating of the Tasks class will depend solely
// on the information given by the modal pop-up
// and from there it will feed the arguments
// for the object to be created
// once created, it will be appended to the 'tasks' array
// essentially the tasks array will be an array of objects