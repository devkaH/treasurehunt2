import React from 'react';
import { Header, Image, Container } from 'semantic-ui-react';

const Fail = () => (
  <Container textAlign="center">
    <Header as="h1">Sorry it's bad route 🤦!</Header>
    <Image
      src="https://media.giphy.com/media/3o6Mb43PiNTQS5WgLu/giphy.gif"
      size="big"
      centered
    />
  </Container>
);

export default Fail;
