import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MarkdownIt from "markdown-it";
import Axios from "axios";

function ArticleEditor(props) {
  const [markdown, saveMarkdown] = useState();
  const [title, saveTitle] = useState();
  const [html, saveHtml] = useState();

  const markdownIt = new MarkdownIt({ html: true });

  const handleTitleChange = e => {
    saveTitle(e.target.value);
  };
  const handleMarkdownChange = e => {
    saveMarkdown(e.target.value);
    saveHtml(markdownIt.render(e.target.value));
  };

  const saveArticle = async e => {
    e.preventDefault();
    const data = { title, markdown };
    await Axios.post("http://localhost:5000/articles/", data);
    props.history.push("/");
  };

  return (
    <div>
      <form onSubmit={saveArticle}>
        <input onChange={handleTitleChange} type="text" placeholder="Title" />
        <textarea onChange={handleMarkdownChange}></textarea>
        <input type="submit" value="Save" />
      </form>

      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}

export default withRouter(ArticleEditor);
