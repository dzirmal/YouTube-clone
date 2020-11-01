import React from 'react';
import styled from 'styled-components';

import { Avatar } from '@material-ui/core';

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <VideoCardDiv>
      <Image src={image} alt='' />
      <VideoInfo>
        <Avatar
          style={{ height: '30px !important', width: '30px !important' }}
          alt={channel}
          src={channelImage}
        />
        <VideoText>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </VideoText>
      </VideoInfo>
    </VideoCardDiv>
  );
}

export default VideoCard;

const VideoCardDiv = styled.div`
  margin-bottom: 40px;
  width: 270px;
`;

const Image = styled.img`
  height: 140px;
  width: 250px;
`;

const VideoInfo = styled.div`
  display: flex;
  margin-top: 10px;
  padding-right: 30px;
`;

const VideoText = styled.div`
  margin-left: 15px;
  & > h4 {
    font-size: 14px;
    margin-bottom: 5px;
  }
  & > p {
    font-size: 14px;
    color: gray;
    margin: 0;
  }
`;
