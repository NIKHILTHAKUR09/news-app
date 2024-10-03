import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import News_card from "../components/News_card";
import Slider from "../components/Slider";
import NewsContext from "../news/NewsContext";
import { fetchNews } from "../news/NewsAction";
import Weather from "../weather/Weather";
// import { WeatherProvider } from "../weather/WeatherContext";

const 
Home = () => {
  const { allNews, dispatch } = useContext(NewsContext);
  const getNews = async (topic) => {
    const data = await fetchNews(topic);

    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };
  useEffect(() => {
    getNews("Indore");
  }, []);

  return (
    <>
      <Navbar />
      <Weather />
      <div className="div d-flex align-items-center justify-content-center  flex-column ">
        <Slider />
        <div className="row w-100">
          <div className="col-sm-12 col-md-12 d-flex flex-wrap justify-content-center ">
            {allNews?.map((news, index) => (
              <News_card key={index} news={news} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
