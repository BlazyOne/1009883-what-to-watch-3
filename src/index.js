import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const settings = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Drama`,
  promoReleaseDate: `2014`
};

ReactDOM.render(
    <App
      promoTitle={settings.promoTitle}
      promoGenre={settings.promoGenre}
      promoReleaseDate={settings.promoReleaseDate}
    />,
    document.querySelector(`#root`)
);
