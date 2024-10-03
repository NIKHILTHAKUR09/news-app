import React from 'react'

const Weather = () => {
  return (
    <>
   <div className="position-relative ">
        <div
          className=" p-1 card shadow position-fixed top-15 m-3 start-0 opacity-75  "
          style={{ zIndex: "2", width: "50vh" }}
        >
          <h3 className="text-primary-emphasis">Today's Weather</h3>
          <span className="d-flex justify-content-between">
            <h3 className="text-primary-emphasis">27°C</h3>
            <img
              style={{ width: "50px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYlGPMytHZ6OLtB93L_jLOHvW0-gUuttoDg&s"
              alt=""
            />
          </span>
          <h3 className="text-primary-emphasis">Indore</h3>
        </div>
      </div>
    </>
  )
}

export default Weather