import React, { useContext } from "react";

import { generate } from "shortid";

import sketch from "../../sketches/sketch-3";

import { AppDispatchContext, AppStateContext } from "../App/AppStateProvider";
import p5Wrapper from "../P5Wrapper";

const P5Wrapper = p5Wrapper(generate());

export default function Section4() {
  const dispatch = useContext(AppDispatchContext);
  // const { playAudio, sketchAudio } = useContext(AppStateContext);

  return (
    <div className="section">
      <P5Wrapper dispatch={dispatch} sketch={sketch} />
    </div>
  );
}
