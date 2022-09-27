import NextImage, { ImageProps } from 'next/future/image';

const Image = (props: ImageProps & { noHostname?: boolean }) => {
  if (!props.src) return null;

  const src = props.noHostname
    ? props.src
    : ((process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_BACKEND_URL
        : process.env.NEXT_PUBLIC_BACKEND_LH_URL) ?? '') + props.src;

  return (
    <NextImage
      className="object-cover"
      {...props}
      src={src}
      placeholder={props.blurDataURL ? 'blur' : 'empty'}
    />
  );
};

export default Image;
