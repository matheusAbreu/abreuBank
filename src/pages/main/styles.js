import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Menu = styled(Animated.ScrollView)`
  flex: 1;
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  top: 0px;
`;

export const Card = styled(Animated.View)`
  background: #fff;
  font-family: Calibri;
  border-radius: 7px;
  margin: 5px 20px;
  height: 380px;
  left: 0;
  right: 0;
  top: 0px;
`;
export const CardColapseCredit = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
`;

export const NivelCredit = styled.View`
  flex-direction: column-reverse;
  align-self: flex-end;
  width: 11px;
  height: 285px;
  border-top-right-radius: 6px;
  background-color: #f56b1a;
  z-index: 3;
`;
export const NivelCreditAtual = styled.View`
  width: 11px;
  background-color: #229fe0;
  height: 25px;
  z-index: 2;
`;
export const NivelCreditDisponivel = styled.View`
  width: 11px;
  background-color: #3dd629;
  height: 205px;
  z-index: 4;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContentColumn = styled.View`
  flex-direction: column;
  width: 97%;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 40px 30px;
`;

export const CardFooter = styled.View`
  padding: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  border-radius: 4px;
`;

export const B = styled.Text`
  font-weight: bold;
`;
export const BoldRewards = styled.Text`
  font-weight: bold;
  color: #8b10ae;
`;

export const TitleCredit = styled.Text`
  font-size: 14px;
  color: #229fe0;
`;
export const DescriptionCredit = styled.Text`
  font-size: 32px;
  color: #229fe0;
`;
export const DescriptionRewards = styled.Text`
  font-size: 30px;
  color: #8b10ae;
  padding: 5px 0;
`;
export const BalanceRewards = styled.Text`
  font-size: 14px;
  padding-left: 8px;
  font-weight: bold;
  color: #8b10ae;
`;
export const Notices = styled.Text`
  font-size: 13px;
  color: #222;
  padding-left: 10px;
`;
export const NoticesContent = styled.Text`
  font-size: 13px;
  color: #222;
`;
export const BalanceCredit = styled.Text`
  font-size: 14px;
  padding-left: 8px;
  font-weight: bold;
  color: #3dd629;
`;

export const CardColapse = styled.View`
  flex-direction: row !important;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 14px;
  color: #999;
`;
export const HeaderTitle = styled.Text`
  font-size: 17px;
  padding-left: 10px;
  color: #666;
`;

export const SubTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;
