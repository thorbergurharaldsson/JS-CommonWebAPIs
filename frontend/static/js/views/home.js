import abstractView from "./abstractView.js";

export default class extends abstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHTML() {
    return `
        <h1> This is the homepage </h1>
    `;
  }
}
