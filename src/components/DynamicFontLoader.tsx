import React, { useEffect } from 'react';

interface DynamicFontLoaderProps {
    fontName: string;
    fontUrl: string;
}

const DynamicFontLoader: React.FC<DynamicFontLoaderProps> = ({ fontName, fontUrl }) => {
    useEffect(() => {
        const fontFace = new FontFace(fontName, `url(${fontUrl}) format('woff2')`, {
            style: 'normal',
            weight: 'normal',
            display: 'swap',
        });

        fontFace.load().then(() => {
            document.fonts.add(fontFace);
        });

        return () => {
            document.fonts.delete(fontFace);
        };
    }, [fontName, fontUrl]);

    return null;
};

export default DynamicFontLoader;
