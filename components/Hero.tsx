import Image from "next/image";
import styled, { css } from "styled-components";

import ExternalLinkIcon from "@components/icons/ExternalLinkIcon";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import { ColorShade } from "@typings/styled";
import { motion } from "framer-motion";

type ImageContainerProps = {
  bgColor: ColorShade;
  overlayFgColor: ColorShade;
};

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  .overlay {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${({ theme: { colors }, bgColor }) => colors[bgColor]}88;
    backdrop-filter: blur(3rem);

    ${({ theme: { colors }, overlayFgColor }) => css`
      a {
        color: ${colors[overlayFgColor]};
      }

      p {
        color: ${colors[overlayFgColor]};
      }
    `}
  }
`;

type HeroProps = {
  heroSrc: StaticImageData;
  heroCreditUserProfile: string;
  heroCreditUserProfileUrl: string;
  heroCreditSource: string;
  layoutId: string;
};

const Hero = ({
  heroSrc,
  heroCreditSource,
  heroCreditUserProfile,
  heroCreditUserProfileUrl,
  layoutId,
}: HeroProps) => {
  return (
    <ImageContainer
      bgColor={useAppThemeValue<ColorShade>("white", "black")}
      overlayFgColor={useAppThemeValue<ColorShade>("black", "white")}
    >
      <motion.div
        className="overlay"
        whileHover={{ opacity: [null, 0.15, 0.8, 1] }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div>
          <ExternalLinkIcon />
          <p>
            Photo by{" "}
            <a href={heroCreditUserProfileUrl}>{heroCreditUserProfile}</a> on{" "}
            {heroCreditSource}
          </p>
        </div>
      </motion.div>
      <motion.div layoutId={layoutId}>
        <Image
          src={heroSrc}
          alt="Hero Image"
          className="image"
          placeholder="blur"
          layout="responsive"
          quality={80}
        />
      </motion.div>
    </ImageContainer>
  );
};

export default Hero;