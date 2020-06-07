import React from 'react';

import {Container, Top, Title, Logo, ArrowButton} from './styles';

import logo from '../../assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({translY}) => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Abreu</Title>
      </Top>
      <ArrowButton
        style={{
          transform: [
            {
              rotateX: translY.interpolate({
                inputRange: [0, 10],
                outputRange: [0, 10],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
      </ArrowButton>
    </Container>
  );
};

export default Header;
