import React from "react";

import { TouchableOpacityProps } from "react-native";

import { Container, IconWrapper, Text, Icon } from "./styles";

import DiscordIcon from "../../assets/discord.png";

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    //@ts-ignore
    <Container {...rest}>
      <IconWrapper>
        <Icon source={DiscordIcon} />
      </IconWrapper>

      <Text>{title}</Text>
    </Container>
  );
}
