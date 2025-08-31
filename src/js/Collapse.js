export default class Collapse {
    constructor(container) {
        this.container = container;
        this.button = this.container.querySelector('.collapse-button');
        this.content = this.container.querySelector('.collapse-content');

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    init() {
        this.button.addEventListener('click', this.onButtonClick);
    }

    onButtonClick(e) {
        e.preventDefault();
        if (this.content.style.maxHeight) {
            this.content.style.maxHeight = null;
        } else {
            this.content.style.maxHeight = `${this.content.scrollHeight}px`;
        }
    }
}
