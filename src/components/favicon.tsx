
import React, { useEffect } from 'react';

export const setFuturisticFavicon = () => {
  useEffect(() => {
    // Create a canvas element to draw our favicon
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Black background
      ctx.fillStyle = '#121220';
      ctx.fillRect(0, 0, 64, 64);
      
      // Draw a neon purple T
      const drawNeonText = () => {
        // Shadow glow effect
        ctx.shadowColor = '#9b87f5';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        // Neon T
        ctx.fillStyle = '#9b87f5';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('T', 32, 32);
        
        // Inner highlight
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 35px Arial';
        ctx.fillText('T', 32, 32);
      };
      
      drawNeonText();
      
      // Apply the favicon to the document
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = canvas.toDataURL('image/x-icon');
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }, []);
  
  return null;
};
