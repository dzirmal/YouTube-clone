import React from 'react';
import styled from 'styled-components';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <SearchPageDiv>
      <Filter>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </Filter>
      <hr />
      <ChannelRow
        image='https://yt3.ggpht.com/a/AATXAJyWLHQ1J55GM2y14lx7sAHXQyO2GB-O8ymesrdckQ=s88-c-k-c0x00ffffff-no-rj'
        channel='SHEKIB AZIZ'
        verified
        subscribers='559'
        noOfVideos={17}
        description='This is the best Channel ever!'
      />

      <hr />

      <VideoRow
        views='55.8M'
        subscribers='59.2M'
        description='In the last video Body Transformation - I LOST MY $100,000 JOB I showed how I started my weight loss journey after losing my 100k job. This is the continuation of that weight loss challenge. This time around I wanted to make it a bit harder on myself and push the weight loss challenge a bit further that I have had in the pervious video by trying to lose 20lb/9kg in 2 month. 
This body transformation has definitely helped me have more clarity in my day to day life. Along the way I have discovered my passion for endurance running. As I have spoked in my previous video Conquering My Biggest Childhood Insecurity. 
The questions remains the same, "Will I, be able to lose 20lb/9kg in 2 month"? Lets find out together.'
        timestamp='3 days ago'
        channel='Shekib AZIZ'
        title='BODY TRANSFORMATION | 60 DAY CHALLENGE [20lb+/9kg+'
        image='https://yt3.ggpht.com/a/AATXAJyWLHQ1J55GM2y14lx7sAHXQyO2GB-O8ymesrdckQ=s48-c-k-c0xffffffff-no-rj-mo'
      />

      <VideoRow
        views='5.8k'
        subscribers='592k'
        description='They Really like to paly on the grass.'
        timestamp='32 days ago'
        channel='Joy'
        title='Baby playing'
        image='https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
      />

      <VideoRow
        views='55M'
        subscribers='23k'
        description='Take your camera and take pictures. Finally you get the best results.'
        timestamp='55 days ago'
        channel='Reshad AZIZ'
        title='How to take a picture of two cars'
        image='https://images.unsplash.com/photo-1604291907283-07db5b0cbbfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
      />

      <VideoRow
        views='11M'
        subscribers='32k'
        description='My Best days in China!!!'
        timestamp='10 years ago'
        channel=''
        title='China'
        image='https://images.unsplash.com/photo-1584530028377-28109fdf2411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
      />
    </SearchPageDiv>
  );
}

export default SearchPage;

const SearchPageDiv = styled.div`
  flex: 0.8;
  background-color: #f9f9f9;
  padding: 20px 20px;
  & > hr {
    height: 1px;
    border: 0;
    background-color: lightgray;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
  font-size: xx-small !important;
  & > h2 {
    margin-left: 10px;
  }
`;
