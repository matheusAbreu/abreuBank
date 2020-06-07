import React from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from '../../componentes/Header';
import Tabs from '../../componentes/Tabs';
import MenuOculto from '../../componentes/MenuOculto';

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
  let offset = 0;
  const translY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const MyOnHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;
      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translY.setValue(offset);
        offset = 0;
        translY.setOffset(0);
      }
      Animated.timing(translY, {
        toValue: opened ? 380 : 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translY.setOffset(offset);
        translY.setValue(0);
      });
    }
  };

  return (
    <>
      <Container>
        <Header translY={translY} />
        <Content>
          <MenuOculto translY={translY} />
          <PanGestureHandler
            onHandlerStateChange={MyOnHandlerStateChange}
            onGestureEvent={animatedEvent}>
            <Menu
              style={{
                transform: [
                  {
                    translateY: translY.interpolate({
                      inputRange: [-200, 0, 380],
                      outputRange: [-50, 0, 380],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              <Nuconta />
            </Menu>
          </PanGestureHandler>
        </Content>
        <Tabs translY={translY} />
      </Container>
    </>
  );
};

const Nuconta = () => (
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
