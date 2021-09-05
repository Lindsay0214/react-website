import React from "react";
import { Wrapper, Page, Title, Content } from "./AboutElements";

export default function About() {
  return (
    <Wrapper>
      <Page>
        <Title>About</Title>
        <Content>
          這是一個隱藏版部落格，你能發現算你厲害。
          <br />
          <br />
          Hello, this is Lindsay's blog！
          <br />
          Welcome to enjoy with me！
        </Content>
      </Page>
    </Wrapper>
  );
}
