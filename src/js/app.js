import '../css/style.css';
import Collapse from './Collapse';

document.addEventListener('DOMContentLoaded', () => {
    const widgetContainer = document.querySelector('.widget-container');
    if (widgetContainer) {
        const collapseWidget = new Collapse(widgetContainer);
        collapseWidget.init();
    }
});
