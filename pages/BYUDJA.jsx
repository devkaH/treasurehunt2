import React from 'react';
import { Header, Image, Grid, Icon, Container } from 'semantic-ui-react';

const Congrats = () => (
  <Container textAlign ="center" style={{ marginTop: '50px' }}>
    <Header as="h1">🎉 🎊 😃 Congratulation 💪 🏆 🏅</Header>
    <Header as="h1">I hope you like it</Header>
    <Grid centered style={{ marginTop: '50px' }}>
      <Image
        src="https://media.giphy.com/media/YTbZzCkRQCEJa/giphy.gif"
        size="medium"
      />
      <Image
        src="https://media.giphy.com/media/DKnMqdm9i980E/giphy.gif"
        size="medium"
      />
    </Grid>
    <br />
    <br />
    <Grid.Row>
      <Header as="h1">
        Make a <Icon name="camera" size="large" />
        and join us on slack
      </Header>
    </Grid.Row>
    <Grid.Row>
      <Header as="h1">ctrl + k "celebratetb2"</Header>
    </Grid.Row>
    <br />
    <br />
    <Image
      src="https://media.giphy.com/media/IdD98kNkrI8EVFGocX/giphy.gif"
      size="big"
      centered
    />
  </Container>
);

export default Congrats;
