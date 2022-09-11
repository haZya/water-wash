import NextImage, { ImageProps } from 'next/future/image';

const Image = ({ ...props }: ImageProps) => {
  if (!props.src) return null;
  return <NextImage className="object-cover" {...props} />;
};

export default Image;
