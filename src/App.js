import React from 'react';

import './styles/scss/app.scss';

import { Header, Top, About, Works, Services, Form, Footer, Gallery } from './components';
import Modal from './components/assets/modal.jsx';

function App() {
  const [modalActive, setModalActive] = React.useState(false);

  return (
    <>
      <Header />
      <Top />
      <About />
      <Works />
      <Services />
      {/* <Form setModalActive={setModalActive} /> */}
      <Gallery />
      <Footer setModalActive={setModalActive} />
      <Modal isOpened={modalActive} setModalActive={setModalActive} />
    </>
  );
}

export default App;
