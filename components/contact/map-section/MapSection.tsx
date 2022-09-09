import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';

const MapSection = () => {
  const { url } = useSelector(({ contact }: RootState) => contact.content.mapSection);

  return (
    <section aria-label="Location on Map" id="map">
      <div className="container mx-auto pb-16">
        <iframe title="Water Wash Location on Map" className="w-full h-106" src={url} />
      </div>
    </section>
  );
};

export default MapSection;
