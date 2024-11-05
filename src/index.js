import "./styles.css";
import { Sidebar } from "./components/sidebar";
import { Content } from "./components/content";
import { SidebarController } from "./controllers/sidebarcontroller";
import { ContentController } from "./controllers/contentcontroller";
import { ModalController } from "./controllers/modalcontroller";
import { DeleteController } from "./controllers/deletecontroller";

const loadPage = (function() {
    // load
    const load = () => {
        Sidebar.loadSidebar();
        Content.loadContent();
    }

    // initialize event listeners
    const init = () => {
        SidebarController.init();
        ContentController.init();
        ModalController.init();
        DeleteController.init();
    }

    // return methods
    return {load, init};
})()


// Usage
loadPage.load();
loadPage.init();