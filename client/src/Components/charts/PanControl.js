import React, { useEffect, useCallback } from "react";

import useChartPan from "../../hooks/useChartPan";
import "./PanControl.scss";

const PanControl = () => {
  const { setTranslateX, setTranslateY } = useChartPan("0", "0");

  const handlePanLeft = useCallback(() => {
    setTranslateX(
      (prev) => `translateX(${parseFloat(prev.match(/[-0-9]+/)[0]) - 100}px)`
    );
  }, [setTranslateX]);

  const handlePanRight = useCallback(() => {
    setTranslateX(
      (prev) => `translateX(${parseFloat(prev.match(/[-0-9]+/)[0]) + 100}px)`
    );
  }, [setTranslateX]);

  const handlePanUp = useCallback(() => {
    setTranslateY(
      (prev) => `translateY(${parseFloat(prev.match(/[-0-9]+/)[0]) - 100}px)`
    );
  }, [setTranslateY]);

  const handlePanDown = useCallback(() => {
    setTranslateY(
      (prev) => `translateY(${parseFloat(prev.match(/[-0-9]+/)[0]) + 100}px)`
    );
  }, [setTranslateY]);

  const handleReset = useCallback(() => {
    setTranslateY("translateY(0)");
    setTranslateX("translateX(0)");
  }, [setTranslateX, setTranslateY]);

  useEffect(() => {
    function onKeyPan(evt) {
      evt.preventDefault();
      // Arrow keys to pan the chart
      if (evt.keyCode === 37) {
        handlePanLeft();
      } else if (evt.keyCode === 39) {
        handlePanRight();
      } else if (evt.keyCode === 40) {
        handlePanDown();
      } else if (evt.keyCode === 38) {
        handlePanUp();
      }
    }
    document.addEventListener("keydown", onKeyPan);
    return () => document.removeEventListener("keydown", onKeyPan);
  }, [handlePanLeft, handlePanRight, handlePanDown, handlePanUp]);

  return (
    <div className="pan">
      <button className="pan-up" onClick={handlePanUp}>
        <i className="fas fa-arrow-up"></i>
      </button>
      <div>
        <button className="pan-left" onClick={handlePanLeft}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="reset" onClick={handleReset}>
          <i className="fas fa-street-view"></i>
        </button>
        <button className="pan-right" onClick={handlePanRight}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <button className="pan-bottom" onClick={handlePanDown}>
        <i className="fas fa-arrow-down"></i>
      </button>
    </div>
  );
};

export default PanControl;
