import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';

import '../../sass/style.scss';

const TemplateWrapper = () => (
  <div>
    <Helmet
      title="Electrica!!"
    />
    <Header />
  </div>
);


export default TemplateWrapper;
