import NextImage, { ImageProps } from 'next/future/image';
import { backendUrl } from 'utils/env';

const Image = ({ src, alt, ...props }: ImageProps & { noHostname?: boolean }) => {
  if (!src) return null;

  const url = props.noHostname ? src : backendUrl + src;

  return (
    <NextImage
      className="object-cover"
      placeholder={props.blurDataURL ? 'blur' : 'empty'}
      {...props}
      src={url}
      alt={alt ?? ''}
    />
  );
};

export default Image;
