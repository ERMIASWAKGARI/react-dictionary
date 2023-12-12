import React from "react";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonym";
import Antonyms from "./Antonyms";

export default function Select({ all, main, audio }) {
  return (
    <>
      <div className="inner-main">
        <div className="search-word">
          {"Searched word: "}
          {main.word.toUpperCase()}
        </div>
        {audio ? (
          <audio
            controls
            className="color m-4 text-center col-10"
            src={audio}
          ></audio>
        ) : (
          ""
        )}
        <div className="contents">
          <div className="meaning-definition">
            <h2>MEANING & DEFINITIONS :</h2>
            <div>
              <ol>
                <Definition all={all} />
              </ol>
            </div>
          </div>

          <div className="examples">
            <h2> EXAMPLES :</h2>
            <div className="example-border">
              <ol className="ols">
                <Example all={all} />
              </ol>
            </div>
          </div>

          <div className="ant-syn">
            <div className="synonyms">
              <h2>SYNONYMS :</h2>
              <div className="syn">
                <ol>
                  <Synonyms all={all} />
                </ol>
              </div>
            </div>

            <div className="antonyms">
              <h2>ANTONYMS :</h2>
              <div className="ant">
                <ol>
                  <Antonyms all={all} />
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
