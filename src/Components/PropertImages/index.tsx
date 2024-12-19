import { Image } from "antd";
import React from "react";
import Carousel from "../common/Carousel";

interface PropertyImagesProps {
  images: {
    id: string;
    url: string;
    width?: number;
    height?: number;
  }[];
}

const PropertyImages: React.FC<PropertyImagesProps> = ({ images }) => {
  return (
    <Carousel>
      {images.map((image) => (
        <div key={image.id}>
          <Image
            // https://github.com/element-plus/element-plus/issues/19049
            preview={false}
            src={image.url}
            alt={`property-${image.id}`}
            width={image.width}
            height={image.height}
            loading="lazy"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default PropertyImages;
