import { useEffect } from 'react';
import { useLoaderData, Navigate } from 'react-router-dom';

import { getHousing } from './housings';

import Header from '../../components/Header';
import Carousel from '../../components/Housing/Slideshow';
import Avatar from '../../components/Housing/Avatar';
import Tag from '../../components/Housing/Tag';
import Star from '../../components/Housing/Star';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';

export async function loader({ params }) {
  return await getHousing(params.housingId);
}

export default function Housing() {
  useEffect(() => {
    document.title = 'Logement';
  }, []);

  const housing = useLoaderData();

  if (!housing) {
    return <Navigate to="/404" replace={true}></Navigate>;
  }

  return (
    <>
      <Header />
      <main className="housing section__margin" key={housing.id}>
        <Carousel CarouselImages={housing.pictures} />

        <div className="housing__datas">
          <div className="housing__data-1">
            <div className="housing__title-loc">
              <h1>{housing.title}</h1>
              <p>{housing.location}</p>
            </div>
            <div className="housing__tags">
              {housing.tags.map((tag, index) => (
                <Tag key={index} TagText={tag} />
              ))}
            </div>
          </div>
          <div className="housing__data-2">
            <div className="housing__name-avatar">
              <div className="housing__name">
                <p>{housing.host.name}</p>
              </div>
              <Avatar PictureSrc={housing.host.picture} />
            </div>
            <div className="housing__rating">
              <Star StarRating={housing.rating} />
            </div>
          </div>
        </div>
        <div className="housing__collapse">
          <Collapse
            CollapseClass="collapse description"
            CollapseClassTitleChevron="collapse__title_chevron collapse__title_chevron-Housing"
            CollapseClassTitle="collapse__title-Housing"
            CollapseTitle="Description"
            CollapseClassContainer="collapse__container-Housing"
            CollapseClassText="collapse__container-Housing--text"
            CollapseText={housing.description}
          />
          <Collapse
            CollapseClass="collapse equipments"
            CollapseClassTitleChevron="collapse__title_chevron collapse__title_chevron-Housing"
            CollapseClassTitle="collapse__title-Housing"
            CollapseTitle="Équipements"
            CollapseClassContainer="collapse__container-Housing"
            CollapseClassText="collapse__container-Housing--text"
            CollapseText={housing.equipments}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
