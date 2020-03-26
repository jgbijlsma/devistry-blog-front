import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function ArticleList() {
  const [articles, saveArticle] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get("http://localhost:5000/articles/");
      saveArticle(res.data);
    };
    getArticles();
  });

  const renderList = () => {
    return articles.map((article, i) => {
      return (
        <Link to={`/article/${article._id}`} key={i}>
          {article.title}
        </Link>
      );
    });
  };

  return <div>{renderList()}</div>;
}
