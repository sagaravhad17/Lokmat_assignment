import React,{useRef} from 'react'

const WebStories = ({webStoriesData}) => {

    const scrollContainer = useRef(null);

    const handleScroll = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy(400, 0);
        }
      };
    const getAllData = webStoriesData?.map((item) => item.data.slice(0, 5))
  return (
    <div className='p-2'>
        <div className='d-flex justify-content-between align-items-center py-2'>
        <h3 className='pt-4'>Web Stories</h3>
        <button className='readMorebtn' onClick={handleScroll}>Read More</button>
        </div>
      <div style={{ display: "flex", overflowX: "auto" }} ref={scrollContainer}>
        {getAllData?.map((newsData, index) =>{
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
                  <div className="card-body pt-1">
                    <p className="card-text ps-1">{item.title}</p>
                  </div>
                </div>
            )
          })}
        )}
      </div>
    </div>
  )
}

export default WebStories
