import React,{useRef} from 'react'

const Entertainment = ({entertainmentData}) => {
    const lastThreeData = entertainmentData?.map((item) => item.data.slice(3));
    const firstThreeData = entertainmentData?.map((item) => item.data.slice(0,3));

    const scrollContainer = useRef(null);

    const handleScroll = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy(400, 0);
        }
      };
  return (
    <div className="container">
        <div className='d-flex justify-content-between align-items-center py-2'>
        <h3 className='pt-4'>Entertainment</h3>
        <button className='readMorebtn' onClick={handleScroll}>Read More</button>
        </div>
        <div className="py-2" style={{ display: "flex", overflowX: "auto" }} ref={scrollContainer}>
        {firstThreeData?.map((newsData, index) =>{
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
      {lastThreeData?.map((newsData) => {
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
    </div>
  )
}

export default Entertainment
