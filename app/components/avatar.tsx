import { useCallback, useMemo } from 'react';
import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { keyOutColorToAlpha } from '../utils/chromaKey';
import { getImage, getMostUsedColors, getImageData } from '../utils/image';

const Canvas = styled.canvas`
  width: 400px;
  height: 400px;
  display: block;
`;

const HiddenCanvas = styled.canvas`
  width: 0;
  height: 0;
  display: block;
`;

const Button = styled.button`
  border: none;
  border-top: 1px solid black;
  width: 100%;
  background: none;
  color: black;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
  padding: 6px;
  text-decoration: underline;
  svg {
    margin-right: 12px;
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  :hover {
    background: #f6f6f6;
  }
`;

const DEFAULT_HUE_THRESHOLD = 10;
const DEFAULT_SAT_THRESHOLD = 10;
const DEFAULT_VAL_THRESHOLD = 10;

export const PROFILE_PIXEL_WIDTH = 400;
export const PROFILE_PIXEL_HEIGHT = 400;

export const AvatarCanvas: FC<{
  backgroundImageSrc: string;
  foregroundImageSrc: string;
  chromaKeyColor?: string;
}> = ({ backgroundImageSrc, foregroundImageSrc, chromaKeyColor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);

  // useEffect(() => {
  //   if (!canvasRef.current) {
  //     return;
  //   }
  //   const ctx = canvasRef.current.getContext('2d');
  //   if (!ctx) {
  //     return;
  //   }
  //   const img = new Image();
  //   img.onload = () => {
  //     ctx.drawImage(img, 0, 0, 400, 400);
  //   }
  //   img.src = backgroundImageSrc
  // }, [canvasRef, backgroundImageSrc]);

  useEffect(() => {
    const processImage = async () => {
      if (!hiddenCanvasRef.current || !canvasRef.current) {
        return;
      }
      const hiddenCtx = hiddenCanvasRef.current.getContext('2d');
      const ctx = canvasRef.current.getContext('2d');
      if (!hiddenCtx || !ctx) {
        return;
      }
      const foregroundImageData = await getImageData(
        hiddenCanvasRef.current,
        foregroundImageSrc,
      );
      const usedColors = getMostUsedColors(foregroundImageData);
      console.log(usedColors);
      const keyedOutForegroundImageData = keyOutColorToAlpha(
        foregroundImageData,
        usedColors[0],
        DEFAULT_HUE_THRESHOLD,
        DEFAULT_VAL_THRESHOLD,
        DEFAULT_SAT_THRESHOLD,
      );
      hiddenCtx.putImageData(keyedOutForegroundImageData, 0, 0);

      const backgroundImage = await getImage(backgroundImageSrc);
      ctx.drawImage(
        backgroundImage,
        0,
        0,
        PROFILE_PIXEL_WIDTH,
        PROFILE_PIXEL_HEIGHT,
      );
      ctx.drawImage(
        hiddenCanvasRef.current,
        0,
        0,
        hiddenCanvasRef.current.width,
        hiddenCanvasRef.current.height,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      );
    };

    processImage();
  }, [canvasRef, hiddenCanvasRef, foregroundImageSrc, chromaKeyColor]);

  const imageHref = useMemo(() => {
    if (!canvasRef.current) {
      return undefined;
    }
    return canvasRef.current.toDataURL('image/png');
  }, [canvasRef]);

  const isDownloadButtonDisabled = useMemo(() => !imageHref, [imageHref]);

  return (
    <>
      <HiddenCanvas ref={hiddenCanvasRef} />
      <Canvas
        width={PROFILE_PIXEL_WIDTH}
        height={PROFILE_PIXEL_HEIGHT}
        ref={canvasRef}
      />
      <Button
        style={{ display: 'block' }}
        as={'a'}
        href={imageHref}
        download={'profile.png'}
      >
        Download
      </Button>
    </>
  );
};