import NextImage, { ImageProps } from 'next/future/image';
import { backendUrl } from 'utils/env';

const Image = (props: ImageProps & { noHostname?: boolean }) => {
  if (!props.src) return null;

  const src = props.noHostname ? props.src : backendUrl + props.src;

  return (
    <NextImage
      className="object-cover"
      placeholder={props.blurDataURL ? 'blur' : 'empty'}
      {...props}
      src={src}
    />
  );
};

export default Image;
