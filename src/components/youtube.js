import React, { useState, useEffect } from 'react';

const FullScreenDiv = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        // ESC key pressed, exit full screen
        setIsFullScreen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const divStyle = {
    width: isFullScreen ? '100vw' : '100px',
    height: isFullScreen ? '100vh' : '100px',
    backgroundColor: 'lightblue',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    transition: 'width 0.5s, height 0.5s',
  };

  return (
    <div style={divStyle} onClick={toggleFullScreen}>
      <h1>Click Me to Toggle Full Screen</h1>
    </div>
  );
};

export default FullScreenDiv;
