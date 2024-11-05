import { Sidebar } from "../components/sidebar";
import { Content } from "../components/content";
import { DeleteController } from "./deletecontroller";
import { save, load } from "../utils/storage";

export class Project {
    constructor(name, tasks){
        this.name = name;
        this.tasks = tasks;
    };
}
export class SidebarController {
    // array of projects
    static arrayProjects = JSON.parse(localStorage.getItem("objectArray") || "[]");

    // get id
    static project = null;

    // initialize event listner
    static init() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.addEventListener("click", SidebarController.handleSidebarClick);
    }

    // handle main listeners
    static handleSidebarClick(e) {
        // if classlist is "add-project"
        if (e.target.classList.contains("add-project")) {
            // get user input
            const projectName = SidebarController.getUserInput();
            if (projectName.value !== "") {
                // create object
                SidebarController.createObject(projectName.value);

                // add project to DOM
                Sidebar.addProject(projectName.value);

                // clear
                projectName.value = "";
            }
        };

        // if classlist is project
        if (e.target.classList.contains("project")) {
            const projectId = e.target.id;
            SidebarController.appendProject(projectId);
        }

        // if classlist is delete-icon
        if (e.target.classList.contains("delete-icon")) {
            // get queries
            SidebarController.project = e.target.closest(".project");

            // open modal
            DeleteController.twoStep.showModal();
        }
    }

    // create object and push to array
    static createObject(name) {
        // load object
        const arrayProjects = SidebarController.arrayProjects;

        // push
        const newProject = new Project(name, []);
        SidebarController.arrayProjects.push(newProject);

        // save array
        save("objectArray", arrayProjects);
    }

    // get and return new input each time function is called
    static getUserInput() {
        let projectName = document.querySelector(".project-input");
        return projectName;
    }

    // fetch objectId and iterate through array
    static appendProject(projectId) {
        const arrayProjects = load("objectArray");
        arrayProjects.forEach(project => {
            if (project.name === projectId) {
                Content.createContent(project);
            }
        });
    }

    // delete project
    static removeObject(projectTitle) {
        // fetch array for use
        const arrayProjects = SidebarController.arrayProjects;

        // iterate
        arrayProjects.forEach(project => {
            if (project.name === projectTitle) {
                let index = arrayProjects.indexOf(project);
                arrayProjects.splice(index, 1);
            }
        });
        // save array
        save("objectArray", arrayProjects);
    }

    // get static project
    static getProject() {
        const project = SidebarController.project;
        return project;
    }
}