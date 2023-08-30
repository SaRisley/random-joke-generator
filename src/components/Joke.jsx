import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Joke = () => {
  const [setUp, setSetUp] = useState("");
  const [punchline, setPunchline] = useState("");
  const [showPunchline, setShowPunchline] = useState(false);
  const [loading, setLoading] = useState(false);


  const getNewJoke = () => {
    setSetUp("")
    setPunchline("")
    const URL = "https://official-joke-api.appspot.com/random_joke";
    fetch(URL)
        .then((response) => response.json())
        .then((jokejson) => {
        setSetUp(jokejson.setup);
        setPunchline(jokejson.punchline);
        setShowPunchline(false);
    });
  };

  useEffect(() => {
    setSetUp("")
    setPunchline("")
    const URL = "https://official-joke-api.appspot.com/random_joke";
    fetch(URL)
        .then((response) => response.json())
        .then((jokejson) => {
        setSetUp(jokejson.setup);
        setPunchline(jokejson.punchline);
        setShowPunchline(false);
    });
  }, []);

  const getPunchline = () => {
    setShowPunchline(true)
  }

  useEffect(() => {
    if (setUp === "") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [setUp]);
  

  return(
    <div>
      {loading ? (
          <BeatLoader
            color="#000000"
            loading={loading}
            size={80}
            speedMultiplier={2}
            alignItems="center"
            justifyContent="center"
            className="loader"
          />
      ) : (
      <div>
      <h1>{setUp}</h1>
      <h2>{showPunchline && punchline}</h2>
      <button onClick={getPunchline}>Get the punchline</button>
      <button onClick={getNewJoke}>Get a new joke</button>
      </div>)}
    </div>
  );

};

export default Joke;