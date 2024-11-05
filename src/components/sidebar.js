import { SidebarController } from "../controllers/sidebarcontroller";
import deleteIcon from "/src/assets/svgs/delete.svg";
export class Sidebar {
    static loadSidebar() {
        // fetch sidebar and append elements to sidebar
        const sidebar = document.querySelector('.sidebar');
        // header
        const projectHeader = document.createElement("h3");
        projectHeader.classList.add('header');
        projectHeader.innerText = "Projects";

        // input div
        const inputDiv = document.createElement("div");
        inputDiv.classList.add("input-div");

        // form
        const nameForm = document.createElement("form");
        nameForm.classList.add("projects-form");
        // prevent page refresh on submit
        nameForm.setAttribute("onSubmit", "return false");

        // input
        const projectTextInput = document.createElement("input");
        projectTextInput.classList.add('project-input');
        projectTextInput.setAttribute("type", "text");
        projectTextInput.setAttribute("placeholder", "Add a project...");

        const s = document.createElement("button");
        s.innerHTML = "+";
        s.classList.add("add-project");
        s.setAttribute("type", "submit");

        // append to form
        nameForm.appendChild(projectTextInput);
        nameForm.appendChild(s);
        inputDiv.append(nameForm);

        // projects container
        const projectsCont = document.createElement("div");
        projectsCont.classList.add("projects-cont");
        sidebar.append(projectHeader, inputDiv);
        sidebar.appendChild(projectsCont);

        // if object array not empty
        // fetch array
        const arrayProjects = SidebarController.arrayProjects;

        if (arrayProjects.length > 0) {
            arrayProjects.forEach(project => {
                Sidebar.addProject(project.name);
            })
        }
    };

    static addProject(projectName) {
        // everytime this function is called, create element and append to sidebar
        // create project div
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.id = projectName;

        // generate random colors
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        projectDiv.style.borderLeft = `5px solid #${randomColor}`;

        // create title and svg
        const projectTitle = document.createElement("p");
        projectTitle.textContent = projectName;
        // svg
        const deleteSvg = document.createElement("img");
        deleteSvg.src = deleteIcon;
        deleteSvg.classList.add('delete-icon');
        deleteSvg.style.width = "25px";

        // append
        projectDiv.append(projectTitle, deleteSvg);

        // get projectsCont
        const getProjectsCont = document.querySelector(".projects-cont");
        getProjectsCont.appendChild(projectDiv);
    };
};