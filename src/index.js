import "./styles.css";
import { Sidebar } from "./components/sidebar";
import { Content } from "./components/content";
import { SidebarController } from "./controllers/sidebarcontroller";
import { ContentController } from "./controllers/contentcontroller";

const loadPage = (function() {
    // handlers
    Sidebar.loadSidebar();
    Content.loadContent();
    SidebarController.addListener();
})()