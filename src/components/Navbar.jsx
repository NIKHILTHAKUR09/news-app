import React, { useContext, useState } from "react";
import { fetchNews } from "../news/NewsAction";
import NewsContext from "../news/NewsContext";

const Navbar = () => {
  const { dispatch } = useContext(NewsContext);
  const [text, setText] = useState("");
  const getNews = async (topic) => {
    const data = await fetchNews(topic);

    dispatch({
      type: "GET_news",
      payload: data,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getNews(text);
    setText("");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow my-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={() => getNews("India")}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => getNews("India Business")}
                  className="nav-link"
                  href="#"
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => getNews("India Sports")}
                  className="nav-link"
                  href="#"
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => getNews("India Entertainment")}
                  className="nav-link"
                  href="#"
                >
                  Entertainment
                </a>
              </li>
            </ul>
            <form onSubmit={handleSearch} className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
