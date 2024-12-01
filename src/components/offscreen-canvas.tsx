import { useEffect, useRef } from "react";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../config/constants";
import drawGrid from "../utils/draw-grid";
import { grid } from "../App";

export default function OffscreenCanvas() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) return;

    drawGrid(ctx, grid);
  }, []);

  return (
    <canvas
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      ref={canvas}
      className="offscreen-canvas"
    ></canvas>
  );
}
