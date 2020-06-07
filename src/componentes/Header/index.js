import React from 'react';

import {Container, Top, Title, Logo} from './styles';

import logo from '../../assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Abreu</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
};

export default Header;
/** 
 *  Animação da seta
 * <ArrowButton
        style={{
          transform: [
            {
              rotateX: translY.interpolate({
                inputRange: [0, 50],
                outputRange: [0, 3],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
      </ArrowButton> */