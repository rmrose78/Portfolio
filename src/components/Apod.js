import React, { useState, useEffect } from "react";
import { XIcon } from "@heroicons/react/solid";

function Apod() {
  let [imageData, setImageData] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  let [display, setDisplay] = useState(false);
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [mobileStatus, setMobileStatus] = useState(
    windowWidth < 760 ? true : false
  );

  // Fetch APOD api
  useEffect(() => {
    // const url = `https://api.nasa.gov/planetary/apod?api_key=hwfdoSpN9s6zBkcZaaLYrJzY7iLdO4DobILUu54k`;
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;

    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => setImageData(data))
      .catch((error) => {
        console.error("Error found: ", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  // Track window resizing
  useEffect(() => {
    console.log("Re-rendering");
  }, [mobileStatus]);

  // Content toggle
  const handleClick = () => {
    setDisplay(!display);
  };

  if (loading) return "loading...";
  if (error) return "Error!";

  return (
    <div className="absolute right-0 h-screen sm:flex sm:items-center">
      {display ? (
        <div className=" flex justify-center items-center flex-col w-full h-screen sm:max-w-md bg-blue-500 p-2 border-1 sm:rounded-l-xl">
          <XIcon
            className="left-2 top-1 absolute w-8 text-white hover:text-gray-500"
            onClick={handleClick}
          />
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-white pb-2">{imageData.title}</h1>
            <button>
              <a href={imageData.hdurl} target="blank">
                <img
                  className="rounded-2xl"
                  src={imageData.hdurl}
                  alt="NASA's APOD of the day"
                />
              </a>
            </button>
          </div>
          <div className="p-2 my-2 bg-blue-300 overflow-auto rounded-xl ">
            <p className="h-auto">{imageData.explanation}</p>
          </div>
        </div>
      ) : mobileStatus ? (
        <div className="absolute h-full flex items-center -right-5 text-white">
          <button
            className="-rotate-90 px-2 py-1 bg-blue-500 text whitespace-no-wrap border-1 rounded-t-lg"
            onClick={handleClick}
          >
            APOD
          </button>
        </div>
      ) : (
        <div className="absolute h-full flex items-center -right-12 whitespace-nowrap">
          <button
            className="-rotate-90 p-3 bg-blue-500 text-white border-1 rounded-t-lg"
            onClick={handleClick}
          >
            Astronomy PoD
          </button>
        </div>
      )}
    </div>
  );
}

const domContainer = document.querySelector("#apod");
const root = ReactDOM.createRoot(domContainer);
root.render(e(Apod));
