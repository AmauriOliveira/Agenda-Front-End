import React from 'react';

import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { Container, Main, Cards } from './styles';

import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Main>
        <h1>Main</h1>
        <Cards>
          <Card
            id="idididid"
            description="BlaBla"
            fromDate="15/11/2020 19:00"
            toDate="15/11/2020 20:30"
          />
          <Card
            id="idididid"
            description="BlaBla"
            fromDate="15/11/2020 19:00"
            toDate="15/11/2020 20:30"
          />
          <Card
            id="idididid"
            description="BlaBla"
            fromDate="15/11/2020 19:00"
            toDate="15/11/2020 20:30"
          />
          <Card
            id="idididid"
            description="BlaBla"
            fromDate="15/11/2020 19:00"
            toDate="15/11/2020 20:30"
          />
          <Card
            id="idididid"
            description="BlaBla"
            fromDate="15/11/2020 19:00"
            toDate="15/11/2020 20:30"
          />
          <Card
            id="idididid"
            description="BlaBla"
            fromDate="15/11/2020 19:00"
            toDate="15/11/2020 20:30"
          />
          <Card
            id="idididid"
            description="BlaBla"
            fromDate="15/11/2020 19:00"
            toDate="15/11/2020 20:30"
          />
        </Cards>
      </Main>
    </Container>
  );
};

export default Dashboard;
