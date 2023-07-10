import { useEffect, useState } from "react";
import './assets/App.css'
import axios from "axios";
import FeaturedHome from "./stories/FeaturedHome";
import WebStories from "./stories/WebStories";
import Entertainment from "./stories/Entertainment";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const url = "http://api.lokmat.com/assignmentassociate3";
  const fetchData = () => {
    axios
      .get(url)
      .then((response) => {
        const fetchContent = response.data;
        setData(fetchContent);
      })
      .catch((err) => {
        alert(err)
      });
  };
  const feturedHomeData = data?.filter((item)=> item.displayType === 'featuredHome')
  const webStoriesData = data?.filter((item)=>item.displayType === 'webstories')
  const entertainmentData = data?.filter((item)=> item.displayType === 'widget')

  return (
    <div className="mainContainer">
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
        </div>
        <nav className="navbar bg-danger">
          <div className="d-flex align-items-center">
          <button
            className="navbar-toggler m-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <h3 className="text-white ps-2 pt-2 headingText">लोकमत</h3>
          </div>
        </nav>
      </div>
      <FeaturedHome feturedHomeData={feturedHomeData} />
      <WebStories webStoriesData={webStoriesData} />
      <Entertainment entertainmentData={entertainmentData} />
    </div>
  );
}

export default App;
