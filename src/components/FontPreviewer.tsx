"use client";

import React from 'react';

interface FontPreviewerProps {
     fontName: string;
}

const FontPreviewer: React.FC<FontPreviewerProps> = ({ fontName }) => {
     return (
          <div>
               <p style={{ fontFamily: fontName }}>This is a preview of the uploaded font!</p>
          </div>
     );
};

export default FontPreviewer;
