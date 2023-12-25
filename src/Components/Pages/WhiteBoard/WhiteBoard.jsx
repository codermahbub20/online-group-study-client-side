import React, { useState, useRef, useEffect } from 'react';

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [color, setColor] = useState('#000000'); // Default color
  const [lineWidth, setLineWidth] = useState(2); // Default line width

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx);
  }, []);

  const startDrawing = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setDrawing(true);
  };

  const draw = (event) => {
    if (!drawing) return;

    const { offsetX, offsetY } = event.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.stroke();
  };

  const endDrawing = () => {
    context.closePath();
    setDrawing(false);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleLineWidthChange = (newWidth) => {
    setLineWidth(newWidth);
  };

  const handleEraser = () => {
    setColor('#ffffff'); // Set color to white for eraser effect
  };

  return (
    <div className='text-center'>
      <div >
        <label htmlFor="colorPicker">Color:</label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
      <div >
        <label htmlFor="lineWidth">Line Width:</label>
        <input
          type="range"
          id="lineWidth"
          min="1"
          max="20"
          value={lineWidth}
          onChange={(e) => handleLineWidthChange(parseInt(e.target.value))}
        />
      </div>
      <button onClick={handleEraser}>Eraser</button>

      <div className='flex justify-center'>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ border: '1px solid #000' }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
      />
      </div>
    </div>
  );
};

export default Whiteboard;
