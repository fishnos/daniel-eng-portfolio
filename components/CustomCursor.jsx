"use client";

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOutOfFrame, setIsOutOfFrame] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsOutOfFrame(false);
    };

    const handleMouseDown = () => {
      setIsDisabled(true);
    };

    const handleMouseUp = () => {
      setIsDisabled(false);
    };

    const handleMouseOver = () => {
      setIsHovered(true);
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        setIsOutOfFrame(true);
      }
    }

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`cursor 
        ${isHovered ? 'hover' : ''} 
        ${isDisabled ? 'disabled' : ''} 
        ${isOutOfFrame ? 'outOfFrame' : ''}`
      }
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
} 

