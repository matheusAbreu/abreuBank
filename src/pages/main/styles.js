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
  border-radius: 7px;
  margin: 5px 20px;
  height: 380px;
  left: 0;
  right: 0;
  top: 0px;
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

export const B = styled.Text`
  font-weight: bold;
`;

export const TitleCredit = styled.Text`
  font-size: 14px;
  color: #229FE0;
`;
export const DescriptionCredit = styled.Text`
  font-size: 32px;
  color: #229FE0;
`;
export const Notices = styled.Text`
  font-size: 13px;
  color: #222;
  padding-left: 10px;
`;
export const BalanceCredit = styled.Text`
  font-size: 14px;
  padding-left: 8px;
  font-weight: bold;
  color: #3DD629;
`;

export const CardColapse = styled.View`
  flex-direction: row;
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
