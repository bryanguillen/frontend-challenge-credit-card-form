import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreditCardForm from './CreditCardForm';

function App() {
  return (
    <div className="App">
      <Container>
        <CreditCardForm/>
      </Container>
    </div>
  );
}

export default App;
