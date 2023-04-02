import React from "react";

import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      // style={{
      // 	backgroundSize: "cover",
      // 	backgroundImage: `url('https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg')`,
      // 	backgroundPosition: "center center"
      // }}>

      style={{
        backgroundSize: "cover",
        backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test descriptionThis is a test descriptionThis is a test descriptionThis is 
			a test descriptionThis is a test descriptionThis is a test descriptionThis is a test 
			descriptionThis is a test descriptionThis is a test descriptionThis is a test 
			descriptionThis is a test descriptionThis is a test descriptionThis is a test 
			descriptionThis is a test descriptionThis is a test descriptionThis is a test 
			descriptionThis is a test descriptionThis is a test descriptionThis is a test 
			descriptionThis is a test descriptionThis is a test descriptionThis is a test
			 descriptionThis is a test descriptionThis is a test descriptionThis is a test 
			 descriptionThis is a test descriptionThis is a test descriptionThis is a test
			  descriptionThis is a test descriptionThis is a test descriptionThis is a test 
			  descriptionThis is a test descriptionThis is a test descriptionThis is a test
			   descriptionThis is a test descriptionThis is a test descriptionThis is a test
			   descriptionThis is a test descriptionThis is a test descriptionThis is a test 
			   descriptionThis is a test descriptionThis is a test descriptionThis is a test
			    descriptionThis is a test descriptionThis is a test descriptionThis is a test 
				descriptionThis is a test descriptionThis is a test descriptionThis is a test 
				descriptionThis is a test descriptionThis is a test descriptionThis is a test 
				descriptionThis is a test descriptionThis is a test descriptionThis is a test
				 descriptionThis is a test descriptionThis is a test descriptionThis is a test 
				 descriptionThis is a test descriptionThis is a test descriptionThis is a test 
				 descriptionThis is a test descriptionThis is a test descriptionThis is a test 
				 description`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
