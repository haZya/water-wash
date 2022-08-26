import ExportedImage from 'next-image-export-optimizer';
import NextImage, { ImageProps } from 'next/image';

const Image = ({ ...props }: ImageProps) => {
  //   const imgProps = { ...props };

  if (!props.src) return null;

  const combinedProps: ImageProps = {
    objectFit: 'cover',
    ...props,
  };

  if (props.layout === 'fill') {
    return (
      <div className="relative w-full h-full">
        <ExportedImage {...combinedProps} src={combinedProps.src as string} />
      </div>
    );
  }

  return <NextImage {...combinedProps} />;
};

export default Image;
