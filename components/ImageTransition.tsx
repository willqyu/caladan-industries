import React, { useState } from 'react';
import Image from 'next/image';

interface ImageTransitionProps {
  firstImageUrl: string;
  secondImageUrl: string;
  width?: number;
  height?: number;
  alt1?: string;
  alt2?: string;
}

const ImageTransition: React.FC<ImageTransitionProps> = ({
  firstImageUrl,
  secondImageUrl,
  width = 256,
  height = 256,
  alt1 = "First Image",
  alt2 = "Second Image"
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      className="relative cursor-pointer"
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={firstImageUrl}
        alt={alt1}
        layout="fill"
        objectFit="cover"
        className={`transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <Image
        src={secondImageUrl}
        alt={alt2}
        layout="fill"
        objectFit="cover"
        className={`transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default ImageTransition;