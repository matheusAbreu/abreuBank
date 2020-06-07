import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';
import {valorItem} from '../utils/index';

const listaitens = () => {
  return [
    valorItem('person-add', 'Indicar amigos'),
    valorItem('chat-bubble-outline', 'Cobrar'),
    valorItem('', 'Dividir Valor'),
    valorItem('', 'Doação'),
    valorItem('', 'Empréstimo'),
    valorItem('', 'Cartão virtual'),
    valorItem('arrow-downward', 'Depositar'),
    valorItem('arrow-upward', 'Transferir'),
    valorItem('', 'Pagar'),
    valorItem('', 'Ajustar Limite'),
    valorItem('', 'Me ajuda'),
    valorItem('lock', 'Bloquear cartão'),
    valorItem('', 'Recarga de celular'),
    valorItem('', 'Organizar atalhos'),
  ];
};

const Tabs = ({translY}) => {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        {listaitens().map((item, index) => {
          return (
            <TabItem key={index}>
              <Icon name={item.icone} size={24} color="#FFF" />
              <TabText>{item.texto}</TabText>
            </TabItem>
          );
        })}
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
