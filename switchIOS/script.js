class SwitchComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();

        this.switchEl = this.shadowRoot
            .querySelector('.switch');

        this.thumbEl = this.shadowRoot
            .querySelector('.thumb');
    }

    connectedCallback() {
        this.switchEl.addEventListener('click', () => {
            this.switchEl.classList.toggle('active');
            this.thumbEl.classList.toggle('thumbActive');
        });

        this.switchEl.addEventListener('mousedown', () => {
            this.thumbEl.classList.add('thumbPressed');
        })

        this.switchEl.addEventListener('mouseup', () => {
            this.thumbEl.classList.remove('thumbPressed');
        })
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .switch {
                    width: 58px;
                    height: 34px;
                    box-sizing: border-box;
                    border-radius: 17px;
                    cursor: pointer;
                    padding: 2px;
                    background-color: #808080;
                    transition: all .3s;
                }

                .active {
                    background-color: #5353C3;
                }

                .thumb {
                    width: 30px;
                    height: 30px;
                    background-color: #fff;
                    border-radius: 15px;
                    transition: all .3s;
                    transfrom: translateX(0px);
                }

                .thumbActive {
                    transform: translateX(24px);
                }

                .thumbPressed {
                    width: 38px;
                }

                .thumbActive.thumbPressed {
                    transform: translateX(16px);
                }
            </style>
            <div class="switch">
                <div class="thumb"></div>
            </div>
        `;
    }
}

customElements.define('switch-component', SwitchComponent);