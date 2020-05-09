import React from 'react';
import {
  Header,
  Image,
  Grid,
  Icon,
  List,
  Flag,
  Container,
} from 'semantic-ui-react';

export const Job = () => (
  <div>
    <Header as="h2">👀 le mot FINANCIER c'est ou ? 👀</Header>
    <Flag name="france" />
    <br />
    <br />
    <h1>
      NBSFHQYBEKIXQNQGZKNQINZXIQHQEDKUOBNE <br />
      VQZQRIQQIXHQEESEZQVYQNQQFBINQUQRNYQEIBAX <br />
      BRKNZQBLXEYBGZKGKEXNXKRVXRBRIXQZQZQ <br />
    </h1>
  </div>
);

export const Salary = () => (
  <Container>
    <Header as="h3">A = zero or more </Header>
    <Header as="h3">B = one or more </Header>
    <Header as="h3">C = zero or one </Header>
    <Header as="h3">D = used for ranges </Header>

    <Image centered src="https://www.dcode.fr/images/dcode.png" />
    <h3>Don't forget I'm a number</h3>
    <Header as="h2">The Salary = "A"+"B"+"C" </Header>
  </Container>
);

export const Age = () => {
  localStorage.clear();
  sessionStorage.clear();
  // Create fake key,value
  localStorage.setItem('birthDay', '**__**');
  localStorage.setItem('20-10-1995', '**__**');
  // Value
  sessionStorage.setItem('dateOfBirth', '**__**');
  sessionStorage.setItem('**__**', '22/11/1995');
  sessionStorage.setItem('-----', '22-11-1995');
  sessionStorage.setItem('*****', '22.11.1995');
  // Fake
  return (
    <Container>
      <Grid.Row>
        <div style={{ margin: 'auto' }}>
          <Icon name="chrome" size="huge" />
          <Icon name="database" size="huge" />
        </div>
        <Header color="blue" as="h2">
          Key :
        </Header>
        <Header as="h1">127.0.0.1</Header>
      </Grid.Row>
      <Grid.Row>
        <br />
        <Header color="blue" as="h2">
          Value :
        </Header>
        <Header as="h1">alive until is closed !</Header>
      </Grid.Row>
      <Grid.Row>
        <br />
        <Header color="blue" as="h2">
          Value Separator :
        </Header>
        <Header as="h1">"D" answer for the previous tab</Header>
      </Grid.Row>
    </Container>
  );
};

export const Username = () => (
  <Container>
    <Grid.Row>
      <Header color="black" textAlign="center" as="h2">
        You will find the "name" on the most lovely developer{' '}
        <span style={{ color: '#f48024' }}>Platform</span>
        <div>behind Badges and Reputation </div>
        <div>and under the word HELLO</div>
      </Header>
      <img
        src="https://i.stack.imgur.com/B6jQX.png?s=328&g=1"
        alt="user:6597186"
        style={{ width: '30%' }}
      />
    </Grid.Row>
  </Container>
);

export const Password = () => (
  <Container>
    <Grid.Row>
      <Header color="black" textAlign="center" as="h2">
        I think that it's so easy 😄😄
      </Header>
      <Header color="black" textAlign="center" as="h3">
        <div>6 + 4 = 210</div>
        <div>8 + 5 = 313</div>
        <div>5 + 2 = 37</div>
        <div>7 + 6 = 113</div>
        <div>9 + 8 = 117</div>
        <div>10 + 6 = 416</div>
        <div>15 + 3 = ❓❓❓</div>
      </Header>
    </Grid.Row>
  </Container>
);
