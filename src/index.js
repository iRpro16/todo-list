import "./styles.css";
import { Sidebar } from "./components/sidebar";
import { UserController } from "./controllers/usercontroller";

class Project {
    constructor(name) {
        this.name = name;
    }
}

const loadPage = (function() {
    // handlers
    Sidebar.loadSidebar();
    UserController.addListener();
})()