import { React } from "react";

// importing react hooks useEffect and useState
import { useEffect, useState } from "react";

// importing axios module form axios
import axios from "../../axio";

// importing created basic image url and the apikey form constants
import { imgUrl, api_Key } from "../../Constants/Constants";

// importing external youtube module from npm package is used to provie the matching movie trailer from youtube
import Youtube from "react-youtube";

// import css rowpost css
import "./RowPost.css";

const RowPost = (props) => {
  // createing states from usestate to store the movie from given api
  const [rowmovies, setRowMovies] = useState([]);

  // used to display the clicked movie trailer
  const [urlid, setUrlid] = useState("");

  useEffect(() => {
    // in props taking the category wised movies api form props.url
    axios.get(props.url).then((response) => {
      // destructuring the response from the api that api givien the movie list
      const { results } = response.data;
      console.log("orginal movies", results);

      // store the movie in usestate setRowMovie
      setRowMovies(results);
    });
  }, []);

  // this functin is used to get the clicked movie id and check that id matche with the youtube module url api and stor that id into the usestate
  const handleMovie = (id) => {
    console.log("id is", id);
    axios
      .get(`/movie/${id}/videos?api_key=${api_Key}&language=en-US`)
      .then((response) => {
        console.log("youtube data", response);
        if (response.data.results.length !== 0) {
          setUrlid(response.data.results[0]);
        } else {
          console.log("error");
        }
      });
  };

  // youtube popup basic settings
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="rowPosts">
      {/* take the movie title form with props from app.js */}
      <h2>{props.title}</h2>
      <div className="row-posters">
        {/* list the all movies one by one with the help of map method */}
        {rowmovies.map((item, index) => (
          <img
            key={index}
            onClick={() => handleMovie(item.id)}
            className={props.isSmall ? "isSmallPoster effect" : "poster effect"}
            src={`${imgUrl + item.backdrop_path}`}
            alt="posters"
          />
        ))}
      </div>

      {/* providing the yotube trailer if the urlid and videoid matching */}
      {urlid && <Youtube opts={opts} videoId={urlid.key} />}
    </div>
  );
};

export default RowPost;
