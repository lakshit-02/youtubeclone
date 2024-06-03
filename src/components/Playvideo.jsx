import React, {useState} from 'react'
import './Playvideo.css'
import like from '../assets/Like.png'
import save from '../assets/save.png'
import share from '../assets/share.png'
import dislike from '../assets/dislike.png'
//import video1 from '../assets/video1.mp4'
//import profile_icon from '../assets/profile.png'
import { API_KEY, value_converter } from '../Data'
import { useEffect } from 'react'
import moment from 'moment';

const Playvideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        //fetching the video data
       const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoId}&key=${API_KEY}`;
       await fetch(videoDetails_url)
       .then(res=>res.json())
       .then( async data =>{
        setApiData(data.items[0])
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20contentDetails%2C%20statistics&id=${data.items[0].snippet.channelId}&key=${API_KEY}`;
         await fetch(channelData_url)
         .then(res=>res.json())
         .then(data=>setChannelData(data.items[0]));
       });
          const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
          await fetch(comment_url)
          .then(res=>res.json())
          .then(data=>setCommentData(data.items))
    }
    
    /*const fetchOtherData = async () =>{
        //fetch channel data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20contentDetails%2C%20statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
         await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));
    }*/

    useEffect(()=> {
        fetchVideoData();
    },[])

   /*useEffect(()=>{
        fetchOtherData();
    },[apiData])*/
    
  return (
    <div className='play-video'>
        {/*<video src={video1} controls autoPlay muted></video>*/}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"title here"}</h3>
        <div className="play-video-info">
            <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
         <span><img src={like} alt=""/>{apiData?value_converter(apiData.statistics.likeCount):155}</span>
         <span><img src={dislike} alt=""/></span>
         <span><img src={share} alt=""/>share</span>
         <span><img src={save} alt=""/>save</span>
    </div>
    </div>
    <hr/>
    <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscriber</span>
        </div>
        <button>subscribe</button>
    </div>
     <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description here"}</p>
        <hr/>
        <h4>{apiData?value_converter(apiData.statistics.commentCount):102}</h4>
        {/*map is liye lgaya 1 1 kr k likhne padre the comment code repeat hora tha to map lga k ab bar bar nhi likhna padra code*/}
        {commentData.map((item, index)=>{

            return(
                <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/>
            <div>
            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
            <div className="comment-action">
                <img src={like} alt=""/>
                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={like} alt=""/>
            </div>
         </div>
        </div>
            )
        })}
   </div>
    </div>
  )
}

export default Playvideo;
