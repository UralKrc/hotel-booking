import React, { Fragment } from "react";
import Carousel from "../../../common/Carousel";
import { Container, StyledImage } from "./styles";
import { PropertyImagesCarouselProps } from "./types";

const PropertyImagesCarousel: React.FC<PropertyImagesCarouselProps> = ({
  images,
}) => {
  return (
    <Container data-testid="carousel-container">
      <Carousel autoplay>
        {images.map((image) => (
          <Fragment key={image.id}>
            <StyledImage
              data-testid="carousel-image"
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
