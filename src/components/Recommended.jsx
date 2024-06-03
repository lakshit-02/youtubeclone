import React from "react";
import "./Recommended.css";
import thumb from "../assets/thumb.png";
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";
import thumb4 from "../assets/thumb4.jpg";
import thumb5 from "../assets/thumb5.jpg";
import thumb6 from "../assets/thumb6.jpg";
import { useState } from "react";
import { API_KEY } from "../Data";
import { useEffect } from "react";
import axios from "axios";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  console.log(apiData);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then(console.log); //ye mene likha h
    //.then(data=>setApiData(data.items))
    //console.log(setApiDat);
    /*const { relatedVideo } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`);
                     console.log( relatedVideo.categoryId );*/
  };

  useEffect(() => {
    fetchData();
    //console.log(apiData);
  }, []);
  return (
    /*<div className='recommended'>
        {apiData.map((item, index)=>{
          return(
            <div className="side-video-list">
            <img src={thumb} alt="" />
            <div className="vid-info">
                <h4>jabs hsbch hd cshdchsdc </h4>
                <p>lakshit</p>
                <p>199k views</p>
            </div>
        </div>
       )
        })}
      </div>*/

    <div className="recommended">
      {/*<div className="side-video-list">
    <img src={apiData.snippet.thumbnails.medium.url} alt="" />
    <div className="vid-info">
        <h4>{apiData.snippet.title}</h4>
        <p>{apiData.snippet.channelTitle}</p>
        <p>199k views</p>
    </div>
      </div>*/}
      <div className="side-video-list">
        <img src={thumb1} alt="" />
        <div className="vid-info">
          <h4>American car manufactured by</h4>
          <p>Cartech</p>
          <p>199k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumb2} alt="" />
        <div className="vid-info">
          <h4>The automotive industry</h4>
          <p>Superauto</p>
          <p>345k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumb3} alt="" />
        <div className="vid-info">
          <h4> Prepare food for consumption</h4>
          <p>Foodbasket</p>
          <p>276k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumb4} alt="" />
        <div className="vid-info">
          <h4>Technological advancements</h4>
          <p>technology</p>
          <p>467k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumb5} alt="" />
        <div className="vid-info">
          <h4>The physical material of an organism</h4>
          <p>Humanbody</p>
          <p>259k views</p>
        </div>
      </div>
      <div className="side-video-list">
        <img src={thumb6} alt="" />
        <div className="vid-info">
          <h4>Buildings serve several societal needs </h4>
          <p>Houses</p>
          <p>289k views</p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
