import React from "react";
import defaultImage from "../assets/defaultimg.avif";

const News_card = ({ news }) => {
  return (
    <>
      <div className="card mx-1 my-1" style={{ width: "30rem" }}>
        <img
          src={news.urlToImage || defaultImage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text">
            <small className="text-secondary">
              {new Date(news.publishedAt).toLocaleDateString("en-IN")}
            </small>
          </p>
          <a href={news.url} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default News_card;
