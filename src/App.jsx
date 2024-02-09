import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [video, setVideo] = useState(1);


  const data = [
    {
      id: 1,
      img: "https://i.ytimg.com/vi_webp/uefIjk9skew/maxresdefault.webp",
    },
    {
      id: 2,
      img: "https://i.ytimg.com/vi_webp/uBDbLyXEgek/maxresdefault.webp",
    },
    {
      id: 3,
      img: "https://i.ytimg.com/vi_webp/KWIZQw4or3Q/maxresdefault.webp",
    },
  ];

  return (
    <>
      {/* <img src={"https://i.ytimg.com/vi_webp/uefIjk9skew/maxresdefault.webp"} width={'300px'}    alt="" onClick={()=>setVideo(1)}/>
      <img src={"https://i.ytimg.com/vi_webp/uBDbLyXEgek/maxresdefault.webp"} width={'300px'}    alt="" onClick={()=>setVideo(2)}/>
      <img src={"https://i.ytimg.com/vi_webp/KWIZQw4or3Q/maxresdefault.webp"} className='jpg' width={'300px'}    alt="" onClick={()=>setVideo(3)}/> */}

      {/* <img  onClick={()=>setVideo(2)}  width={"300px"} src={
        video == 1 ?
        "https://i.ytimg.com/vi_webp/uBDbLyXEgek/maxresdefault.webp":
        video == 2 ? 
        "https://i.ytimg.com/vi_webp/KWIZQw4or3Q/maxresdefault.webp"
        :null
      } alt="" />
      <img  onClick={()=>setVideo(3)}  width={"300px"} src={
        video == 1 ?
        "https://i.ytimg.com/vi_webp/uBDbLyXEgek/maxresdefault.webp":
        video == 2 ? 
        "https://i.ytimg.com/vi_webp/KWIZQw4or3Q/maxresdefault.webp"
        :null
      } alt="" /> */}
      {/* <img onClick={()=>setVideo(2)} width={"300px"} src={video == 1 ? "https://i.ytimg.com/vi_webp/uBDbLyXEgek/maxresdefault.webp": null} alt="" />
      <img onClick={()=>setVideo(3)} width={"300px"} src={video === 2 ? "https://i.ytimg.com/vi_webp/KWIZQw4or3Q/maxresdefault.webp" :
      null
    } alt="" />
    <img onClick={()=>setVideo(1)} width={"300px"} src={video == 3 ? 'https://i.ytimg.com/vi_webp/uefIjk9skew/maxresdefault.webp' : null} alt="" /> */}
      <div className="container">
        <iframe
          width="560"
          height="315"
          src={
            video == 1
              ? "https://www.youtube.com/embed/uefIjk9skew?si=9lVr80Cgj_RwWqfd"
              : video == 2
              ? "https://www.youtube.com/embed/uBDbLyXEgek?si=gmg-0nJUFU3Gf1E7"
              : video == 3
              ? "https://www.youtube.com/embed/KWIZQw4or3Q?si=9PSFtX7bri6BR1a9"
              : null
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="wrapper">
          {data.map((el) => {
            return (
              <div className="card">
                <img
                  src={el.img}
                  alt=""
                  width={"300px"}
                  onClick={() => setVideo(el.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
