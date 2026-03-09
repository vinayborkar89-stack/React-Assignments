import { useState } from "react";

function Bubble() {
  const colors = ['green', 'yellow', 'red'];
  const bubbles = Array.from({ length: 30 }, () => colors[Math.floor(Math.random() * colors.length)]);
  const [bubbleColors, setBubbleColors] = useState(bubbles);
  console.log(bubbleColors);
  function clickBubble(index: number) {
    const newBubbleColors = [...bubbleColors];
    newBubbleColors[index] = colors[Math.floor(Math.random() * colors.length)];
    setBubbleColors(newBubbleColors);
   // alert(`Bubble ${index + 1} clicked!`);
  }
  return (
    <>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', padding: '20px' }}>
        {bubbleColors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: color,
            }}
            onClick={() => clickBubble(index)}
          />
        ))}
      </div>
      <div>
        <h1>Red : {bubbleColors.filter(color => color === 'red').length}</h1>
        <h1>Green : {bubbleColors.filter(color => color === 'green').length}</h1>
        <h1>Yellow : {bubbleColors.filter(color => color === 'yellow').length}</h1>
      </div>
    </>
  );
}
export default Bubble;