"use client";

import React from 'react';
import {UploadButton} from "@/utils/uploadthing";

interface FontUploaderProps {
     onUpload: (url: string) => void;
}

const FontUploader: React.FC<FontUploaderProps> = ({onUpload}) => {
     return (
          <div className="max-w-md mx-auto">
               <UploadButton endpoint="fontUploader"
                             onClientUploadComplete={(res) => {
                                  onUpload(JSON.stringify(res[0].url))
                             }}
                             onUploadError={(error: Error) => {
                                  alert(`ERROR! ${error.message}`);
                             }}/>
          </div>
     );
};

export default FontUploader;
