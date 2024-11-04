import "./styles.css";
import { Sidebar } from "./components/sidebar";
import { Content } from "./components/content";
import { SidebarController } from "./controllers/sidebarcontroller";
import { ContentController } from "./controllers/contentcontroller";
import { ModalController } from "./controllers/modalcontroller";
import { DeleteController } from "./controllers/deletecontroller";

const loadPage = (function() {
    // load the page
    Sidebar.loadSidebar();
    Content.loadContent();

    // initialize event listeners
    SidebarController.init();
    ContentController.init();
    ModalController.init();
})()