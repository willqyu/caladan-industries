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
      className="relative cursor-pointer w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={firstImageUrl}
        alt={alt1}
        height={0}
        width={0}
        objectFit="contain"
        style={{ width: '100%', height: 'auto' }}
        className={`transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <Image
        src={secondImageUrl}
        alt={alt2}
        layout="fill"
        objectFit="contain"
        className={`transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default ImageTransition;