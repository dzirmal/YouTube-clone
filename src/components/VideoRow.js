import React from 'react';
import styled from 'styled-components';

function VideoRow({
  views,
  subscribers,
  description,
  timestamp,
  image,
  channel,
  title,
}) {
  return (
    <VideoRowDiv>
      <Image src={image} />

      <VideoRowText>
        <h3>{title}</h3>
        <p className='videoRow__headline'>
          {channel} ⚈{' '}
          <span className='videoRow__subs'>
            {' '}
            <span className='videoRow__SubsNumbers'>{subscribers}</span>{' '}
            Subscribers
          </span>{' '}
          <span className='videoRow__SubsNumbers'>{views}</span> Views ⚈{' '}
          {timestamp}
        </p>
        <p className='description'>{description}</p>
      </VideoRowText>
    </VideoRowDiv>
  );
}

export default VideoRow;

const VideoRowDiv = styled.div`
  display: flex;
  margin-bottom: 30px;
  max-width: 700px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 146px;
  height: 138px;
`;

const VideoRowText = styled.div`
  margin-left: 14px;
  & > p {
    &.videoRow__headline {
      font-size: 12px;
      color: #606060;
    }
    &.description {
      margin-top: 20px;
      font-size: 12px;
      color: #606060;
    }
    & > span {
      &.videoRow__subs {
        background-color: lightgray;
        padding: 2px;
      }
      &.videoRow__SubsNumbers {
        color: rgb(84, 157, 211);
      }
      & > span {
        &.videoRow__SubsNumbers {
          color: rgb(84, 157, 211);
        }
      }
    }
  }
`;
