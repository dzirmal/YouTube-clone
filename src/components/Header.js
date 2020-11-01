import React from 'react';
import styled from 'styled-components';

// Material UI
import { Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <Container>
      <Left>
        <MenuIcon
          style={{
            color: 'gray',
            marginRight: '10px',
          }}
        />
        <Logo
          src='http://pngimg.com/uploads/youtube/youtube_PNG7.png'
          alt='youTube loge'
        />
      </Left>
      <Center>
        <Input type='text' placeholder='Search' />
        <SearchIcon
          style={{
            border: '1px solid lightGrey',
            width: '50px',
            color: 'gray',
            backgroundColor: '#fafafa',
          }}
        />
      </Center>
      <Right>
        <VideoCallIcon
          style={{
            color: 'gray',
            marginRight: '20px',
          }}
        />
        <AppsIcon
          style={{
            color: 'gray',
            marginRight: '20px',
          }}
        />
        <NotificationsIcon
          style={{
            color: 'gray',
            marginRight: '20px',
          }}
        />
        <Avatar
          alt='Your Avatar'
          src='https://lh3.googleusercontent.com/-er9ghCJYteM/V09TcUKce-I/AAAAAAAABSA/r3QRcvMuMd0lPxLTR9WR9a8IzpEBdn98QCEwYBhgLKtQDAL1OcqxT7RS2zvD3sc_cdBAoPplzNc7ffBUyJrYsad5P5kVl_sIIus43ZvtCCY7P4J5EHBNmETcTu1s10NX_7aynVWr-ieXe4NXvYyMRXszDPZDga52EtTPgJXbCkXPi9x6HTjy84J2_gJb7whpKwlsCLlY6T9J91HZv66mE59Dz-qoSulhvRC8TObCnXeVQylDy1VtXhMfVrmv0BlgXJh8lg8GD9hxCej78d4NKQFNj_RaqAilPvs890EIUpynLLGvEytVyAeqbAs3bNGTiMzxf_3xlGLgMgK9Y9QOwwRIYbE2aEFh8dd8WEpxYnGry7LlOY6EURiD9gZRE7qnyRW5Xm-_oPqBN1RSj5S7XwxA-m7ZVqHXvflY4ttBjr2oW-IC-2HQR0108D6z-1zzFAeYoG2xVAqFhB_ezzRDoUa4hsjVuJ1LEZJg0k52NpS5UXGe35RRpOCGZnuJDj7kgar86s1tPlNfClkE9KtmRBE0XKyhz2PQz07cIizDmIqkMnhzKtF6xGyQ2GFkecBOJ82hUFQ77WQXVkDOkRYXBSyzJSRALux8QUl3wzoIz45qamAQUNizOihskxEmdeX2m8fPHJ_wRBvMZcmXJ9IZHB03fW1y6MKzg9_wF/w140-h140-p/44ad98f2-5af3-41c4-9b25-f381fb285594'
          style={{
            marginRight: '20px',
          }}
        />
      </Right>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
`;

const Left = styled.div`
  display: flex;
`;

const Logo = styled.img`
  height: 25px;
  object-fit: contain;
  margin-left: 20px;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  border: 1px solid lightGrey;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  padding: 1px 2px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
