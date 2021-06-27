import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondary90};
`;

export const ImageIllustration = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -20px;
  padding: 0px 50px;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-family: ${theme.fonts.title700};
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 16px;
`;
export const Subtitle = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-family: ${theme.fonts.text500};
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 48px;
`;
