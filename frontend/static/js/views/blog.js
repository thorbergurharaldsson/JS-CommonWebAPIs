import abstractView from "./abstractView.js";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("Blog");
  }

  async getHTML() {
    return `
        <h1> This is the blog section </h1>
        <p> Here you can read all of our blogs </p>
    `;
  }
}
