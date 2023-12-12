import React from "react";

export default function Example({ all }) {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return (
              <>{Def.example ? <li className="">{Def.example}</li> : ""}</>
            );
          });
        });
      })}
    </>
  );
}
