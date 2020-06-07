import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled.View`
  flex: 1;
  background: #FFF;
  border-radius: 5px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 380px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const CardFooter = styled.View`
  padding: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  border-radius: 4px;
`;

export const Notices = styled.Text`
  padding-left: 10px;
  font-size: 12px;
  color: #333;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;