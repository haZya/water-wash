import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';

const ServiceSection = () => {
  const {} = useSelector(({ residential }: RootState) => residential.content.serviceSection);

  return (
    <section aria-label="Services We Provide">
      <div className="container mx-auto">
        <div className="skew-wrapper">
          <div className="skew-track">
            <div className="skew">
              <div
                className="skew-background-image"
                style={{ backgroundImage: "url('http://lorempixel.com/1680/994/animals')" }}
              ></div>
              <div className="skew-content">
                <h1>For the Animal Lover</h1>
              </div>
            </div>
            <div className="skew">
              <div
                className="skew-background-image"
                style={{ backgroundImage: "url('http://lorempixel.com/1680/994/nature')" }}
              ></div>
              <div className="skew-content">
                <h1>Become One with Nature</h1>
              </div>
            </div>
            <div className="skew">
              <div
                className="skew-background-image"
                style={{ backgroundImage: "url('http://lorempixel.com/1680/994/people')" }}
              ></div>
              <div className="skew-content">
                <h1>Get To Know The Human Element</h1>
              </div>
            </div>
          </div>
          <div className="skew-content-target">
            <h1>Enjoy The Skewed Background Banner</h1>
            <a href="#" className="btn-default">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
