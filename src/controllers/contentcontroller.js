import { SidebarController } from "./sidebarcontroller";
import { Content } from "../components/content";
import { ModalController } from "./modalcontroller";
class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class ContentController {

    // initialize listeners
    static init() {
        const content = document.querySelector(".content");
        content.addEventListener("click", ContentController.handleContentClick);
    }

    // handleContentClick
    static handleContentClick(e) {
        // open modal
        if (e.target.classList.contains("add-task")) {
            ModalController.modal.showModal();
        }

        // delete if checked
        if (e.target.classList.contains("checkbox")) {

        }
    }

    // append task
    static appendTask() {
        // get values
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("due-date").value;
        const priority = document.querySelector("input[name = priority]:checked").value;
        const header = document.querySelector(".heading");

        // create object
        // select object and append this object, once done get project tasks and append
        const task = new Task(title, description, dueDate, priority);

        // Get matching object
        SidebarController.arrayProjects.forEach(object => {
            if (header.id === object.name) {
                object.tasks.push(task);
                Content.createTask(title, description, dueDate, priority);
            };
        });
    };

    // delete task
    static deleteTask(taskTitle) {

    }
}