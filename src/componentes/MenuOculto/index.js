import React from 'react';

import {Container, Code, Nav, NavItem, NavText, SingOutButton, SingOutButtonText} from './styles';
import IconAnt from 'react-native-vector-icons/AntDesign';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {valorItem} from '../utils/index';

const listaitens = () => {
  return [
    valorItem('help-outline', 'Me ajuda'),
    valorItem('person-outline', 'Perfil'),
    valorItem('credit-card', 'Configurar cartão'),
    valorItem('smartphone', 'Configurações do app'),
  ];
};

const MenuOculto = () => {
  return (
    <Container>
      <Code>
        <IconAnt name="qrcode" size={80} color="#8b10ae" />
      </Code>

      <Nav>
        {listaitens().map((item, index) => {
          return (
            <NavItem key={index}>
              <>
                <Icon name={item.icone} size={20} color="#fff" />
                <NavText>{item.texto}</NavText>
              </>
              <Icon name="keyboard-arrow-right" size={20} color="#fff" />
            </NavItem>
          );
        })}
      </Nav>
      <SingOutButton OnPress={() => {}}>
        <SingOutButtonText>SAIR DO APP</SingOutButtonText>
      </SingOutButton>
    </Container>
  );
};

export default MenuOculto;
