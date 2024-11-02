import { SidebarController } from "./sidebarcontroller";
import { Content } from "../components/content";
class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class ContentController {
    static taskListenerAdded = false;
    // add event listeners 
    static addProjectListeners() {
        // select all projects with "project" class
        const projects = document.querySelectorAll(".project");
        projects.forEach(project => {
            // add event listener to each project 
            project.addEventListener("click", ContentController.appendProject);
        });
    }

    static appendProject(e) {
        // ID, array, projectCont
        const projectId = e.target.id;
        const projectObjects = SidebarController.arrayProjects;

        // loop and append
        projectObjects.forEach(project => {
            if (project.name === projectId) {
                // call createContent with object which appends to content
                Content.createContent(project);
            };
        });
        ContentController.addTaskListener();
    };

    static appendTask() {
        // get values
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("due-date").value;
        const priority = document.querySelectorAll(".priority").value;
        const objectArray = SidebarController.arrayProjects;
        const header = document.querySelector(".heading");

        // create object
        // select object and append this object, once done get project tasks and append
        const task = new Task(title, description, dueDate, priority);

        // Get matching object
        objectArray.forEach(object => {
            if (header.id === object.name) {
                object.tasks.push(task);
                Content.createTask(title, description, dueDate, priority);
            };
        });
    };

    static addTaskListener() {
        // select elements
        const addTaskBtn = document.querySelector(".add-task");
        const modal = document.getElementById("modal");

        // add event listener for modal
        addTaskBtn.addEventListener("click", () => {
            modal.showModal();
        });
        ContentController.confirmBtn(modal);
    }

    static confirmBtn(modal) {
        // get confirm button
        const confirm = document.getElementById("confirm");

        // add event listener and call
        confirm.replaceWith(confirm.cloneNode(true));
        const newConfirm = document.getElementById("confirm");
        newConfirm.addEventListener("click", (e) => {
            e.preventDefault();
            ContentController.appendTask();
            modal.close();
        });
    };
}

// the creating of the Tasks class will depend solely
// on the information given by the modal pop-up
// and from there it will feed the arguments
// for the object to be created
// once created, it will be appended to the 'tasks' array
// essentially the tasks array will be an array of objects