import { ContentController } from "./contentcontroller";

export class ModalController {
    // global modal usage
    static modal = document.getElementById("modal");

    // initialize listener
    static init() {
        modal.addEventListener("click", ModalController.handleModalClick);
    }

    // handle confirm button
    static handleModalClick(e) {
        if (e.target.id === "confirm") {
            e.preventDefault();
            ContentController.appendTask()
            ModalController.modal.close();
        }

    }
}