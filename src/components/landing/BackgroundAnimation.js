import React from 'react';

const AnimatedCircle = ({ duration, direction = null }) => {
  return (
    <div className="animated-circle" style={{
      animationDirection: direction,
      animationDuration: duration
    }}/>
  );
};

const BackgroundAnimation = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-transparent">
      <AnimatedCircle duration="24s" direction="reverse" />
      <AnimatedCircle duration="24s" />
      <AnimatedCircle duration="32s" direction="reverse" />
      <AnimatedCircle duration="32s" />
    </div>
  );
};

export default BackgroundAnimation;
