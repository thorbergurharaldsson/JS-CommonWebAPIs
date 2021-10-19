import abstractView from "./abstractView.js";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHTML() {
    return `
        <h1> This is the homepage </h1>
    `;
  }
}
