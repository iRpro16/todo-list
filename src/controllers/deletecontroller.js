import { SidebarController } from "./sidebarcontroller";
import { Content } from "../components/content";
export class DeleteController {
    static twoStep = document.getElementById("two-step");

    static init() {
        DeleteController.twoStep.addEventListener("click", DeleteController.handleDeleteClick);
    }

    static handleDeleteClick(e) {
        if (e.target.id === "confirm-delete") {
            // prevent page reload
            e.preventDefault();

            // get projectsCont and yes/no value
            const projectsCont = document.querySelector(".projects-cont");
            const confirmValue = document.querySelector("input[name = confirm-delete]:checked").value;
            // get clicked project
            const project = SidebarController.getProject();

            // call deleteProject
            DeleteController.deleteProject(projectsCont, confirmValue, project);
        }
    }

    static deleteProject(projectsCont, confirmValue, project) {
        if (confirmValue === "yes") {
            // remove project from DOM
            projectsCont.removeChild(project);

            // delete project from object array
            SidebarController.removeObject(project.id);

            // close modal
            DeleteController.twoStep.close();
            // clear content
            Content.loadContent();
        } else {
            DeleteController.twoStep.close();
        }
    }
}