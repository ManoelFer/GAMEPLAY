import React from "react";
import { StatusBar } from "react-native";

import { ButtonIcon } from "../../components";

import {
  ImageIllustration,
  Subtitle,
  Title,
  Container,
  Content,
} from "./styles";

import Illustration from "../../assets/illustration.png";

export function SignIn() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageIllustration source={Illustration} resizeMode="stretch" />

      <Content>
        <Title>
          Conecte-se {`\n`}e organize suas {`\n`}
          jogatinas
        </Title>
        <Subtitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Subtitle>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </Content>
    </Container>
  );
}
