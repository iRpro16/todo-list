import "./styles.css";
import { Sidebar } from "./components/sidebar";

class Project {
    constructor(name) {
        this.name = name;
    }
}

const loadPage = (function() {
    Sidebar.loadSidebar();
})()