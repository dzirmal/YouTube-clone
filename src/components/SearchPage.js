import React from 'react';
import styled from 'styled-components';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';

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
