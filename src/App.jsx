import React, { useState } from "react";

function LikeButton(props) {
  return (
    <button onClick={props.onLike}>
      ❤️ Like
    </button>
  );
}

function CountDisplay(props) {
  return (
    <h2>Likes: {props.count}</h2>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Like Button Example</h1>

      {/* Function passed to child */}
      <LikeButton onLike={handleLike} />

      {/* Count passed to child as props */}
      <CountDisplay count={count} />
    </div>
  );
}

export default App;