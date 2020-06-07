import React from 'react';
import {Animated} from 'react-native';

import Header from '../../componentes/Header';
import Tabs from '../../componentes/Tabs';

import {
  Container,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Content,
  Description,
  Notices,
  Title,
  Menu,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Main = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Menu>
          <Nucredito />
          <Nuconta />
          <Nurewards />
        </Menu>
      </Content>
      <Tabs />
    </Container>
  );
};

const Nuconta = () => {
  return (
    <Card>
      <CardHeader>
        <Icon name="attach-money" size={28} color="#666" />
        <Icon name="visibility-off" size={28} color="#666" />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 375.518,87</Description>
      </CardContent>
      <CardFooter>
        <Icon name="arrow-downward" size={12} color="#666" />
        <Notices>Transferência de R$ 200,00 recebida de Matheus Abreu</Notices>
      </CardFooter>
    </Card>
  );
};
const Nucredito = () => (
  <Card>
    <CardHeader>
      <Icon name="attach-money" size={28} color="#666" />
      <Icon name="visibility-off" size={28} color="#666" />
    </CardHeader>
    <CardContent>
      <Title>Saldo disponível</Title>
      <Description>R$ 375.518,87</Description>
    </CardContent>
    <CardFooter>
      <Icon name="arrow-downward" size={12} color="#666" />
      <Notices>Transferência de R$ 200,00 recebida de Matheus Abreu</Notices>
    </CardFooter>
  </Card>
);
const Nurewards = () => (
  <Card>
    <CardHeader>
      <Icon name="attach-money" size={28} color="#666" />
      <Icon name="visibility-off" size={28} color="#666" />
    </CardHeader>
    <CardContent>
      <Title>Saldo disponível</Title>
      <Description>R$ 375.518,87</Description>
    </CardContent>
    <CardFooter>
      <Icon name="arrow-downward" size={12} color="#666" />
      <Notices>Transferência de R$ 200,00 recebida de Matheus Abreu</Notices>
    </CardFooter>
  </Card>
);

export default Main;
