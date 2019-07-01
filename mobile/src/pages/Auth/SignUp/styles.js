import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['rgba(0, 0, 0, 0.4)', 'rgba(0,0,0,1)'],
})`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 40px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;

  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  background: #fff;
  margin-bottom: 10px;
  width: 100%;
  font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 10px;
  background: #e5283e;
  width: 100%;
`;

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const NewAccButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 10px;
  background: transparent;
`;

export const NewAccButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
