import React from 'react';
import styled from '@emotion/styled';

const ArrowWrapper = styled.div`
  ${tw`absolute`};
  bottom: 10px;
`;
const ArrowBody = styled.div`
  ${tw`h-12 bg-white p-0`};
  margin-left: 45%;
  width: 2px;
`;
const ArrowHead = styled.div`
  ${tw`bg-white w-6 h-6`};
  clip-path: polygon(50% 60%, 15% 0, 85% 0);

  `;

const IconLinks = () => {
  return (
    <ArrowWrapper>
      <ArrowBody />
      <ArrowHead />
    </ArrowWrapper>
  );
};

export default IconLinks;
