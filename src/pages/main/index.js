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
  DescriptionRewards,
  SubTitle,
  HeaderTitle,
  NoticesContent,
  BoldRewards,
  NivelCredit,
  CardContentColumn,
  B,
  NivelCreditDisponivel,
  NivelCreditAtual,
  CardColapseCredit,
  CardColapse,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/FontAwesome5';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';

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
    <CardColapseCredit>
      <CardContentColumn>
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
            <NoticesContent>Limite disponível</NoticesContent>
            <BalanceCredit>R$ 65.489,58</BalanceCredit>
          </SubTitle>
        </CardContent>
      </CardContentColumn>
      <NivelCredit>
        <NivelCreditDisponivel />
        <NivelCreditAtual />
      </NivelCredit>
    </CardColapseCredit>
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
      <CardColapse>
        <IconSimple name="present" size={28} color="#666" />
        <HeaderTitle>Rewards</HeaderTitle>
      </CardColapse>
    </CardHeader>
    <CardContent>
      <DescriptionRewards>
        <B>15.548</B> pts
      </DescriptionRewards>
      <SubTitle>
        <NoticesContent>
          {'Mandou bem! Você ganhou\n'}
          <BoldRewards>190 pontos</BoldRewards> hoje
        </NoticesContent>
      </SubTitle>
    </CardContent>
    <CardFooter>
      <CardColapse>
        <IconAnt name="bus-alt" size={20} color="#666" />
        <Notices>
          {'Apague a sua compra do uber\nR$ 8,00 com 800 pontos'}
        </Notices>
      </CardColapse>
      <Icon name="keyboard-arrow-right" size={16} color="#666" />
    </CardFooter>
  </Card>
);

export default Main;
