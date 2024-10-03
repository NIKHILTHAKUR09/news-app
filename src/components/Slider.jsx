import React, { useContext } from "react";
import NewsContext from "../news/NewsContext";
import SliderImg from "./SliderImg";


const Slider = () => {
  const { allNews } = useContext(NewsContext);

  return (
    <>
  



<div id="carouselExampleAutoplaying" style={{width:"98%"}} className="carousel slide my-2" data-bs-ride="carousel">
  <div className="carousel-inner ">
   
     {
   allNews?.map((news , index)=>(
    <SliderImg news={news} key={index} value={index}/>
   ))} 
   {/* {
    allNews.map((news , index ) =>(
      <SliderImg news={news} key={index} value={index} />
    ))
   } */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};

export default Slider;
