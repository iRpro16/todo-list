import { Sidebar } from "../components/sidebar";
import { Content } from "../components/content";

export class Project {
    constructor(name, tasks){
        this.name = name;
        this.tasks = tasks;
    };
}

export class SidebarController {
    // array of projects
    static arrayProjects = [];

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
    }

    /*
    create an object with name and empty array,
    then push new object to array 
    */
    static createObject(name) {
        const newProject = new Project(name, []);
        SidebarController.arrayProjects.push(newProject);
    }

    // get and return new input each time function is called
    static getUserInput() {
        let projectName = document.querySelector(".project-input");
        return projectName;
    }

    /*
    fetch object array, and iterate
    if object.name matches the clicked id
    create content
    */
    static appendProject(projectId) {
        const projectObjects = SidebarController.arrayProjects;
        projectObjects.forEach(project => {
            if (project.name === projectId) {
                Content.createContent(project);
            }
        });
    }
}