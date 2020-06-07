import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';
import {valorItem} from '../utils/index';

const listaitens = () => {
  return [
    valorItem('user-follow', 'Indicar amigos'),
    valorItem('bubbles', 'Cobrar'),
    valorItem('chart', 'Dividir Valor'),
    valorItem('heart', 'Doação'),
    valorItem('graph', 'Empréstimo'),
    valorItem('wallet', 'Cartão virtual'),
    valorItem('action-redo', 'Depositar'),
    valorItem('action-undo', 'Transferir'),
    valorItem('calculator', 'Pagar'),
    valorItem('equalizer', 'Ajustar Limite'),
    valorItem('earphones-alt', 'Me ajuda'),
    valorItem('lock', 'Bloquear cartão'),
    valorItem('screen-smartphone', 'Recarga de celular'),
    valorItem('layers', 'Organizar atalhos'),
  ];
};

const Tabs = () => {
  return (
    <Container>
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
