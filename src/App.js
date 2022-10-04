import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => response.data)
      .then((result) => {
        setQuote(result);
        console.log(result);
      });
  };
  return (
    <>
      <div
        className="p-2 
      bg-gradient-to-r from-gray-700 via-gray-900 to-black
      w-screen
      h-screen
      flex
      content-center
      "
      >
        {quote ? (
          <div
            className=" 
            p-5
            h-fit border-2
          border-slate-600
            bg-gradient-to-r
          from-gray-200 via-gray-400 to-gray-600
            rounded-xl
            absolute
            right-1/2
            translate-x-1/2"
          >
            <h1 className="text-base md:text-xl xl:text-3xl  font-bold font-ab">
              "{quote.content}"
            </h1>
            <span>~{quote.author}</span>
          </div>
        ) : null}
        <button
          onClick={getQuote}
          className="
          bg-blue-400
          text-black 
          hover:bg-blue-700 
          font-bold 
          border-b-4 
          border-blue-700 
          hover:border-blue-700 
          rounded 
          absolute
          py-2 
          px-4 
          top-3/4
          md:top-1/3
          right-1/2
          translate-x-1/2
          w-fit
          xl:top-2/4
           "
        >
          Get Quote
        </button>
      </div>
    </>
  );
}

export default App;
