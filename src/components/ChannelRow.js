import React from 'react';
import styled from 'styled-components';

import { Avatar } from '@material-ui/core';

function ChannelRow({
  image,
  channel,
  verified,
  subscribers,
  noOfVideos,
  description,
}) {
  return (
    <ChannelRowDiv>
      <Avatar src={image} alt={channel} style={{}} />
      <ChannelText>
        <h4>{channel}</h4>
        <p></p>
      </ChannelText>
    </ChannelRowDiv>
  );
}

export default ChannelRow;

const ChannelRowDiv = styled.div``;

const ChannelText = styled.div``;
