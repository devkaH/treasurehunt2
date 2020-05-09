import { Header, Button, Container } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const Home = () => {
  const route = useRouter();
  return (
    <Container textAlign='center'>
      <br />
      <Header as="h1">🤩 🤩 📢 Bonjour Bonjour! 📢 🤩 🤩</Header>
      <h2>Hello and thanks for being here !</h2>
      <h2>
        You are invited to search for a user which is described by some 
        fields
      </h2>
      <h2>
        The user is stored
        <a href="https://github.com/devkaH/treasurehuntDB" target="_blank"> here</a> Keep in mind we will used it Later 😏
      </h2>
      <h2>⏲️ Votre équipe doit trouver les réponses le plus vite possible. ⏲️ </h2>
      <h3>Before we start I hope that you took a look at the two doc that I sended to the planet_dev channel</h3>
      <h3><a href="https://oyez.slack.com/archives/C1HFXSH8X/p1588857404089200" target="_blank">🖱️ here</a></h3>
      <h3>Click on the start button and get the matching fields</h3>
      <Button onClick={() => route.push('/start')} primary>
        Start
      </Button>
    </Container>
  );
};
export default Home;
