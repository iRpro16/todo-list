import { Sidebar } from "../components/sidebar";

export class Project {
    constructor(name, tasks){
        this.name = name;
        this.tasks = tasks;
    }
}

export class SidebarController {
    // array of projects
    static arrayProjects = [];

    // create object with name and empty
    // array for tasks (which accepts strings)
    // append new object to array
    static createObject(name) {
        const newProject = new Project(name, []);
        SidebarController.arrayProjects.push(newProject);
    }

    // get and return new input each time function is called
    static getUserInput() {
        let projectName = document.querySelector(".project-input");
        return projectName.value;
    }

    // add event listener method
    static addListener() {
        const addBtn = document.querySelector(".add-project");
        addBtn.addEventListener("click", SidebarController.appendProject);
    }

    // push to DOM and array
    static appendProject() {
        // get user input
        let newProjName = SidebarController.getUserInput();
        const textBox = document.querySelector(".project-input");

        // Only add if it isn't an empty string
        if (newProjName !== "") {
            SidebarController.createObject(newProjName);
            Sidebar.addProject(newProjName);
        };
        textBox.value = "";
    };

    
}