import React from "react";
import { useParams } from "react-router-dom";

function Play(props) {
  let params = useParams();

  const videoid = atob(params.videoid);

  const videourl = `http://localhost:5000/api/playvideo?filename=${videoid}`;
  return (
    <>
      <div className="row">
        <div className="video-border col-md-8" key={Math.random().toString()}>
          <video
            className="video-cust"
            controls
            autoPlay="true"
            key={Math.random().toString()}
          >
            <source src={videourl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 style={{ display: "flex", justifyContent: "space-around" }}>
            {videoid.replace(".mp4", "")}
          </h2>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default Play;
