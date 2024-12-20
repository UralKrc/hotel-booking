import React, { Fragment } from "react";
import Carousel from "../common/Carousel";
import { Container, StyledImage } from "./styles";

interface PropertyImagesCarouselProps {
  images: {
    id: string;
    url: string;
    width?: number;
    height?: number;
  }[];
}

const PropertyImagesCarousel: React.FC<PropertyImagesCarouselProps> = ({
  images,
}) => {
  return (
    <Container>
      <Carousel>
        {images.map((image) => (
          <Fragment key={image.id}>
            <StyledImage
              // https://github.com/element-plus/element-plus/issues/19049
              preview={false}
              src={image.url}
              alt={`property-${image.id}`}
              loading="lazy"
            />
          </Fragment>
        ))}
      </Carousel>
    </Container>
  );
};

export default PropertyImagesCarousel;
