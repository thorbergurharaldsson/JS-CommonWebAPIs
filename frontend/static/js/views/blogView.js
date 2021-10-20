import abstractView from "./abstractView.js";

export default class extends abstractView {
  constructor(params) {
    super(params);
    this.setTitle("Viewing post");
  }

  async getHTML() {
    console.log(this.params.id);
    return `
        <h1> Blog post</h1>
        <p> This is a blog post </p>
    `;
  }
}
