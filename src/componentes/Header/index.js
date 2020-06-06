import React from 'react';

import {Container, Top, Title, Logo} from './styles';

import logo from '../../assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  const decidaLogo = () => {
    //ferifica se o header está aberto ou fechado e retorna a seta apropriada pra isso
    return 'keyboard-arrow-down';
  };
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Abreu</Title>
      </Top>
      <Icon name={decidaLogo()} size={20} color="#FFF" />
    </Container>
  );
};

export default Header;
