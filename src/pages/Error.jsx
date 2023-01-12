import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Error() {
  useEffect(() => {
    document.title = 'Erreur 404';
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main className="error">
        <p className="error__number">404</p>
        <p className="error__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="error__link" to={'/'}>
          Retournez sur la page d'accueil
        </Link>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Error;
