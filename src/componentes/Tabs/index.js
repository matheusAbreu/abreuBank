import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

const valorItem = (strIcon, strValor) => {
  //um obj auxiliar para preenchimento do item
  return {
    icone: strIcon,
    texto: strValor,
  };
};

const listaitens = () => {
  //Aqui de fato é onde eu informo os itens. o retorno em lista pra facilitar a criação do componente
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
