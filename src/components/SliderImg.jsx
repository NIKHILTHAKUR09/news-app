import React from 'react'

const SliderImg = ({news , value }) => {
  return (
    <>
    <div class={value===0 ?"carousel-item active ":"carousel-item "}>
      <img src={news.urlToImage} class="d-block w-100"  style={{height:"80vh", objectFit:"cover"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block text-dark">
        <h5 className='shdow'>{news.title}</h5>
        <p  className='shdow text-secondary'>{news.description}</p>
      </div>
    </div>
    </>
  )
}

export default SliderImg