import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import '../components/layout/layout.css';

const Wrapper = styled.div`
  ${tw`text-center`}
`;
const Styled404 = styled.h1`
${tw`font-black text-background text-center`};
  font-size: 25vh;
  text-shadow: -2px 0 #aaa, 0 2px #aaa, 2px 0 #aaa, 0 -2px #aaa;
`;
const Whoops = styled.p`
  ${tw`text-3xl font-bold`};
`;
const Message = styled.p`
  ${tw`text-xl font-light italic`};
`;
const StyledLink = styled(Link)`
  ${tw`text-accent text-xl`};
`;

const NotFoundPage = () => (
  <Wrapper>
    <Styled404>404</Styled404>
    <Whoops>Whoops!</Whoops>
    <Message>This website only has one page!</Message>
    <StyledLink to="/">Click here to go back</StyledLink>
  </Wrapper>
);

export default NotFoundPage;
