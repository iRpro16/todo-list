export class DeleteController {
    static twoStep = document.getElementById("two-step");

    static init() {
        DeleteController.twoStep.addEventListener("click", DeleteController.handleDeleteClick);
    }

    static handleDeleteClick(e) {
        if (e.target.id === "confirm-delete") {
            // prevent page reload
            e.preventDefault();

            const deleteValue = document.querySelector("input[name = confirm-delete]:checked").value;
            

            // close modal
            DeleteController.twoStep.close();
        }
    }
}