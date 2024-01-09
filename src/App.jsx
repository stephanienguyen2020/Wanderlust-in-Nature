import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Wander through serene pathways, where each turn reveals the untamed beauty of nature.",
      name: "NATURE'S PATHWAYS",
    },
    {
      id: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Embrace the tranquility of mountain vistas, a perfect escape into nature's silent splendor.",
      name: "MOUNTAIN TRANQUILITY",
    },
    {
      id: 3,
      imgUrl:
        "https://img.freepik.com/premium-photo/portrayal-ancient-forest-background-wallpaper_783299-3102.jpg",
      desc: "Discover the lush forests, a verdant paradise that teems with life and whispers ancient tales.",
      name: "FOREST WHISPERS",
    },
    {
      id: 5,
      imgUrl: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Explore the coastal wonders, where the ocean's melody harmonizes with the dance of the waves.",
      name: "COASTAL WONDERS",
    },
    {
      id: 6,
      imgUrl:
        "https://images.unsplash.com/photo-1489493173507-6feea31f12ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Marvel at the desert's mystic beauty, where sands tell timeless stories under the watchful eye of the sun.",
      name: "DESERT MYSTIQUE",
    },
  ];

  return (
    <div className="container">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
