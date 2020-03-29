import React, { useState, useEffect } from "react";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import Axios from "axios";
import "../../node_modules/highlight.js/styles/monokai.css";

export default function Article(props) {
  const [article, saveArticle] = useState();
  const [html, saveHtml] = useState("");

  const markdownIt = new MarkdownIt({
    html: true,
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="code-block"><code>' +
            hljs.highlight(lang, str, true).value +
            "</code></pre>"
          );
        } catch (err) {
          throw err;
        }
      }
      return "";
    }
  });

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
