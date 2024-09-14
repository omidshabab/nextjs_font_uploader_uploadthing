"use client"

import React, { useState } from 'react';
import FontUploader from '@/components/FontUploader';
import FontPreviewer from '@/components/FontPreviewer';
import DynamicFontLoader from "@/components/DynamicFontLoader";

const HomePage: React.FC = () => {
    const fontName = "CustomFont";

  const [fontUrl, setFontUrl] = useState<string | null>(null);

  const handleFontUpload = (url: string) => {
    setFontUrl(url);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload and Use Custom Fonts</h1>

      <FontUploader onUpload={handleFontUpload} />

      {fontUrl && (
          <>
          <DynamicFontLoader fontName={fontName} fontUrl={fontUrl} />

            <FontPreviewer fontName={fontName} />
          </>
      )}
    </div>
  );
};

export default HomePage;
