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
        <NextImage {...combinedProps} />
      </div>
    );
  }

  return <NextImage {...combinedProps} />;
};

export default Image;
