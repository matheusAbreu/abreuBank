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
  TitleCredit,
  DescriptionCredit,
  BalanceCredit,
  SubTitle,
  HeaderTitle,
  B,
  CardColapse,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/FontAwesome5';

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
        <CardColapse>
          <Icon name="control-point-duplicate" size={28} color="#666" />
          <HeaderTitle>Conta</HeaderTitle>
        </CardColapse>
        <Icon name="visibility-off" size={28} color="#666" />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 375.518,87</Description>
      </CardContent>
      <CardFooter>
        <CardColapse>
          <Icon name="arrow-downward" size={20} color="#666" />
          <Notices>
            {'Transferência de R$ 200,00 recebida\nde Matheus Abreu'}
          </Notices>
        </CardColapse>
        <Icon name="keyboard-arrow-right" size={16} color="#666" />
      </CardFooter>
    </Card>
  );
};
const Nucredito = () => (
  <Card>
    <>
      <CardHeader>
        <CardColapse>
          <Icon name="credit-card" size={28} color="#666" />
          <HeaderTitle>Cartão de Crédito</HeaderTitle>
        </CardColapse>
        
      </CardHeader>
      <CardContent>
        <TitleCredit>Fatura Atual</TitleCredit>
        <DescriptionCredit>
          R$ <B>5.548</B>,87
        </DescriptionCredit>
        <SubTitle>
          <Notices>Limite disponível</Notices>
          <BalanceCredit>R$ 65.489,58</BalanceCredit>
        </SubTitle>
      </CardContent>
    </>
    <CardFooter>
      <CardColapse>
        <IconAnt name="bus-alt" size={20} color="#666" />
        <Notices>
          {'Compra mais recente em \nUberbr uber Trip Help R$ 25,67'}
        </Notices>
      </CardColapse>
      <Icon name="keyboard-arrow-right" size={16} color="#666" />
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
      <Icon name="keyboard-arrow-right" size={16} color="#666" />
    </CardFooter>
  </Card>
);

export default Main;
