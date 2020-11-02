import React from 'react';
import styled from 'styled-components';

import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

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
      <Avatar
        src={image}
        alt={channel}
        style={{
          height: '120px',
          width: '120px',
          margin: '10px 60px',
        }}
      />
      <ChannelText>
        <h4>
          {channel} {verified && <VerifiedIcon />}{' '}
        </h4>
        <p className='numbers'>
          {subscribers} subscribers ⚈ {noOfVideos} videos
        </p>
        <p className='description'>{description}</p>
      </ChannelText>
    </ChannelRowDiv>
  );
}

export default ChannelRow;

const ChannelRowDiv = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

const ChannelText = styled.div`
  display: flex;
  flex-direction: column;
  & > h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & > p {
    color: #606060;
    font-size: small !important;
    margin: 0;
  }
`;
