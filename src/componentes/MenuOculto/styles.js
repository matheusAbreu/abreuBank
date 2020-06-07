import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {alignItems: 'center'},
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  width: 80px;
  border-radius: 6px;
  background: #fff;
  padding: 0.5px;
`;

export const Nav = styled.View`
  margin-top: 30px;
  align-self: stretch;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;
export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SingOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SingOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;