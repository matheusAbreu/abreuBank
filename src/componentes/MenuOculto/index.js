import React from 'react';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SingOutButton,
  SingOutButtonText,
  CodeText,
  NavColapse,
  B,
} from './styles';
import IconAnt from 'react-native-vector-icons/AntDesign';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {valorItem} from '../utils/index';

const listaitens = () => {
  return [
    valorItem('help-outline', 'Me ajuda'),
    valorItem('person-outline', 'Perfil'),
    valorItem('control-point-duplicate', 'Configurar conta'),
    valorItem('credit-card', 'Configurar cartão'),
    valorItem('work', 'Pedir conta PJ'),
    valorItem('smartphone', 'Configurações do app'),
  ];
};

const MenuOculto = ({translY}) => {
  return (
    <Container
      style={{
        opacity: translY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <>
        <Code>
          <IconAnt name="qrcode" size={80} color="#8B10ae" />
        </Code>
        <CodeText>
          Banco <B>260 - Nu Pagamentos S.A.</B>
        </CodeText>
        <CodeText>
          Agência <B>0001</B>
        </CodeText>
        <CodeText>
          Conta <B>0000000-0</B>
        </CodeText>
      </>
      <Nav>
        {listaitens().map((item, index) => {
          return (
            <NavItem key={index}>
              <NavColapse>
                <Icon name={item.icone} size={20} color="#fff" />
                <NavText>{item.texto}</NavText>
              </NavColapse>
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
