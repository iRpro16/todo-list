import { SidebarController } from "./sidebarcontroller";
import { Content } from "../components/content";
import { ModalController } from "./modalcontroller";
import { save } from "../utils/storage";

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
        if (e.target.checked) {
            // get queries
            const tasksDiv = document.querySelector(".tasks-div");
            const taskTitle = e.target.closest(".task").id;

            // remove the project from DOM
            tasksDiv.removeChild(e.target.closest(".task"));

            // delete from object
            ContentController.deleteTask(taskTitle);
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
        const arrayProjects = SidebarController.arrayProjects;

        // create object
        const task = new Task(title, description, dueDate, priority);

        // get matching object
        arrayProjects.forEach(object => {
            if (header.id === object.name) {
                object.tasks.push(task);
                Content.createTask(title, description, dueDate, priority);
            };
        });
        // save objectArray
        save("objectArray", arrayProjects);
    };

    // delete task
    static deleteTask(taskTitle) {
        const arrayProjects = SidebarController.arrayProjects;
        arrayProjects.forEach(project => {
            // for loop to iterate each task in tasks array
            for (let i = 0; i < project.tasks.length; i++) {
                if (taskTitle === project.tasks[i].title) {
                    let index = project.tasks.indexOf(project.tasks[i]);
                    project.tasks.splice(index, 1);
                }
            }
        });
        // save objectArray
        save("objectArray", arrayProjects);
    }
}