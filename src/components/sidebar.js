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

        // textbox
        const projNameInput = document.createElement("INPUT");
        projNameInput.setAttribute("type", "text");

        // add project button
        const addProjBtn = document.createElement("button");
        addProjBtn.classList.add("add-project");
        addProjBtn.innerText = "+";

        // append input and button to input div
        inputDiv.append(projNameInput, addProjBtn);

        // projects container
        const projectsCont = document.createElement("div");
        projectsCont.classList.add("projects-cont");
        sidebar.append(projectHeader, inputDiv);
        sidebar.appendChild(projectsCont);
    };

    static addProject(projectName) {
        // everytime this function is called, create element and append to sidebar
        const project = document.createElement("p");
        project.innerText = projectName;

        // get projectsCont
        const getProjectsCont = document.querySelector(".projects-cont");
        getProjectsCont.appendChild(project);
    };
};

