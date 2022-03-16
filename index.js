"use strict";
class ProjectCard extends HTMLElement {
    constructor() {
        super();

        let title = this.getAttribute("title");
        let desc = this.innerHTML;
        let linkText = this.getAttribute("linkText");
        let href = this.getAttribute("href");

        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
        <style>
            @import url(https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css);
            .desc {
                margin-left: 10%;
                margin-right: 10%;
                font-size: large;
            }
            .project {
                padding: 10px 0px;
                margin-bottom: 50px;
                border-radius: 15px;
                width: auto;
                background-color: #202020;
            }
        </style>
        <section class="project">
            <h2 class="text-center">${title}</h2>
            <div class="desc">
                ${desc}
            </div>
            <br />
            <h4 class="text-center">
                Link:
                <a href="${href}">${linkText}</a>
            </h4>
        </section>
      `;
    }
}
customElements.define("project-card", ProjectCard);
