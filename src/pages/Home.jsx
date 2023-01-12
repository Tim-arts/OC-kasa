import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getHousings } from './Housing/housings';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

import image from '../assets/Banner/Home/eric-muhr-P_XxsdVgtpQ-unsplash.png';

export async function loader() {
  return await getHousings();
}

function Home() {
  useEffect(() => {
    document.title = 'Kasa';
  }, []);

  const housings = useLoaderData();

  return (
    <>
      <Header />
      <Banner
        BannerClass="banner banner-home section__margin"
        BannerClassImage="banner__image-Home"
        img={image}
        alt="Bord de falaise"
        BannerClassText="banner__text-Home"
        BannerText="Chez vous, partout et ailleurs"
      />
      <main className="home section__margin">
        {housings &&
          housings.map((housing) => {
            return <Card housing={housing} key={housing.id} />;
          })}
      </main>
      <Footer />
    </>
  );
}

export default Home;
