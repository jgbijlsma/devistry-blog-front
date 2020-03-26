import React, { useState, useEffect } from "react";
import MarkdownIt from "markdown-it";
import Axios from "axios";

export default function Article(props) {
  const [article, saveArticle] = useState();
  const [html, saveHtml] = useState("");

  const markdownIt = new MarkdownIt({ html: true });

  useEffect(() => {
    const getArticle = async () => {
      const res = await Axios.get(
        `http://localhost:5000/articles/single/${props.match.params.id}`
      );
      saveArticle(res.data);
      saveHtml(markdownIt.render(res.data.markdown));
    };
    getArticle();
  });

  return (
    <div>
      <h1>{article ? article.title : null}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}
