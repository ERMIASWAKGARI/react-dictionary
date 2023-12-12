import { useState } from "react";

export default function Definition({ all }) {
  return (
    <>
      <div className="outer-part-speech">
        <PoSDefinition all={all} pOS={"noun"} />
      </div>
      <div className="outer-part-speech">
        <PoSDefinition all={all} pOS={"verb"} />
      </div>
      <div className="outer-part-speech">
        <PoSDefinition all={all} pOS={"adjective"} />
      </div>
      <div className="outer-part-speech">
        <PoSDefinition all={all} pOS={"adverb"} />
      </div>
      <div className="outer-part-speech">
        <PoSDefinition all={all} pOS={"preposition"} />
      </div>
      <div className="outer-part-speech">
        <PoSDefinition all={all} pOS={"conjunctive"} />
      </div>
      <div className="outer-part-speech">
        <PoSDefinition all={all} pOS={"interjection"} />
      </div>
    </>
  );
}

function PoSDefinition({ all, pOS }) {
  const groupedDefinitions = {};
  all.forEach((Val) => {
    Val.meanings.forEach((Means) => {
      if (Means.partOfSpeech === pOS) {
        if (!groupedDefinitions[Means.partOfSpeech]) {
          groupedDefinitions[Means.partOfSpeech] = [];
        }
        groupedDefinitions[Means.partOfSpeech].push(Means.definitions);
      }
    });
  });

  return (
    <>
      {Object.entries(groupedDefinitions).map(([partOfSpeech, definitions]) => (
        <div key={partOfSpeech} className="part-speech">
          <h3>{partOfSpeech.toUpperCase()}</h3>
          <ul>
            {definitions.flatMap((definition) =>
              definition.map((def) => (
                <li key={def.definition}>{def.definition}</li>
              ))
            )}
          </ul>
          <hr />
        </div>
      ))}
    </>
  );
}
