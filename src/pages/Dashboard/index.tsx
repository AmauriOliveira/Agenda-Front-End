/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiLogOut, FiPlus } from 'react-icons/fi';
import { format, isToday, isPast, parseISO } from 'date-fns';
import 'date-fns/locale/pt-BR';

import Card from '../../components/Card';
import api from '../../services/api';
// import { useAuth } from '../../hooks/AuthContext';

import { Container, Cards } from './styles';
import logoImg from '../../assets/logo.svg';

interface Event {
  id: string;
  name: string;
  description: string;
  fromDate: string;
  toDate: string;
  userId: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [events, setEvent] = useState<Event[]>([]);
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();
  // const { user. } = useAuth();
  useEffect(() => {
    const tokenStorage = localStorage.getItem('@TokenLab:token');
    const userStorage = localStorage.getItem('@TokenLab:user');

    if (tokenStorage && userStorage) {
      setToken(tokenStorage);
      setUser(JSON.parse(userStorage));
    }
    api
      .get('events', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        setEvent(response.data);
      });
  }, [token]);

  return (
    <Container>
      <header>
        <Link to="/orphanages/create" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
        <img src={logoImg} alt="Logo" />
        <Link to="/orphanages/create" className="create-orphanage">
          <FiLogOut size={32} color="#FFF" />
        </Link>
      </header>
      <Cards>
        {events.map(event => {
          const formatFrom = format(
            parseISO(event.fromDate),
            "dd/MMM/yyyy', às ' HH:mm'h'",
          );

          const today = isToday(parseISO(event.fromDate));
          const past = isPast(parseISO(event.toDate));

          const formatTo = format(
            parseISO(event.fromDate),
            "dd/MMM/yyyy', às ' HH:mm'h'",
          );

          return (
            <Card
              key={event.id}
              id={event.id}
              name={event.name}
              fromDate={formatFrom}
              toDate={formatTo}
              past
              today
            />
          );
        })}
      </Cards>
    </Container>
  );
};

export default Dashboard;
