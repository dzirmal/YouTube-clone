import React from 'react';
import styled from 'styled-components';
import SidebarRow from './SidebarRow';

// Material UI c
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function Sidebar() {
  return (
    <Container>
      <SidebarRow selected Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={WhatshotIcon} title='Trending' />
      <SidebarRow Icon={SubscriptionsIcon} title='Subscription' />
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  flex: 0.2;
`;
