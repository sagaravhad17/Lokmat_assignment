import React from "react";
import "../assets/App.css";
const FeaturedHome = ({ feturedHomeData }) => {
  const firstData = feturedHomeData?.map((item)=> item.data.slice(0,1))
  const firstThreeData = feturedHomeData?.map((item) => item.data.slice(0, 3));
  const remainItems = feturedHomeData?.map((item) => item.data.slice(3));

  return (
    <div className="container">
        {firstData?.map((newsData)=>{
            return newsData.map((item)=>{
                return (<div className="row pb-2">
                    <div className="card-body d-flex headingNews p-4">
                    <span className="card-title text-danger">
                      {item.category}:
                    </span>
                    <p className="card-text ">{item.title}</p>
                  </div>
                  <img
                    className="pe-2"
                    src={item['featured-image']}
                    alt="image"
                    height="400"
                    width="250"
                  />
                </div>)
            })
        })}
      {firstThreeData?.map((newsData) => {
        return newsData.map((item) => {
          return (
            <div className="row">
              <div className="col-sm">
                <div className="d-flex textArea bg-light my-1">
                  <img
                    className="img pe-2"
                    src={item['featured-image']}
                    alt="image"
                    height="200"
                    width="250"
                  />
                  <div className="card-body d-flex">
                    <span className="card-title text-danger">
                      {item.category}:{" "}
                    </span>
                    <p className="card-text ps-1">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      })}

      <div className="py-2" style={{ display: "flex", overflowX: "auto" }}>
        {remainItems?.map((newsData, index) =>{
          return newsData.map((item) => {
            return (
                 <div className="textArea sliderBoxes px-2 me-2 bg-light">
                  <img
                    className="img"
                    src={item["featured-image"]}
                    alt="image"
                    height="200"
                    width="250"
                  />
                  <div className="card-body">
                    <span className="card-title text-danger">
                      {item.category}:{" "}
                    </span>
                    <p className="card-text ps-1">{item.title}</p>
                  </div>
                </div>
            )
          })}
        )}
      </div>
    </div>
  );
};

export default FeaturedHome;
