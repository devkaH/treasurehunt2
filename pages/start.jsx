import React from 'react';
import { Container, Tab, Header } from 'semantic-ui-react';
import { Age, Salary, Username, Job, Password } from '../Components';

const panes = [
  {
    menuItem: { key: 'salary', icon: 'money', content: 'Salary' },
    render: () => (
      <Tab.Pane>
        <Salary />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: 'birthDay', icon: 'birthday cake', content: 'Birthday' },
    render: () => (
      <Tab.Pane>
        <Age />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: 'username', icon: 'user', content: 'Name' },
    render: () => (
      <Tab.Pane>
        <Username />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: 'password', icon: 'lock', content: 'Password' },
    render: () => (
      <Tab.Pane>
        <Password />
      </Tab.Pane>
    ),
  },
  {
    menuItem: { key: 'job', icon: 'suitcase', content: 'Job' },
    render: () => (
      <Tab.Pane>
        <Job />
      </Tab.Pane>
    ),
  },
];

export default function Start() {
  return (
    <Container textAlign="center">
      <br />
      <Tab panes={panes} />
      <br />
      <Header as="h3" textAlign="center">
        After you find all fields you need{' '}
        <a href="https://github.com/devkaH/treasurehuntDB" target="_blank">
          this
        </a>
      </Header>
    </Container>
  );
}
