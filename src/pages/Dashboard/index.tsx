/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';
import { FiLogOut, FiPlus } from 'react-icons/fi';
import { format, isToday, isPast, parseISO, endOfDay } from 'date-fns';
import 'date-fns/locale/pt-BR';
import { useHistory } from 'react-router-dom';

import Card from '../../components/Card';
import api from '../../services/api';
import { Container, Cards, Label } from './styles';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/Auth';

interface Event {
  id: string;
  name: string;
  description: string;
  fromDate: string;
  toDate: string;
  userId: string;
}

const Dashboard: React.FC = () => {
  const [events, setEvent] = useState<Event[]>([]);

  const history = useHistory();
  const { token, user, signOut } = useAuth();

  useEffect(() => {
    api
      .get('events', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        setEvent(response.data);
      });
  }, [token]);

  return (
    <Container>
      <header>
        <Label title="Adicionar Evento">
          <Button type="button" onClick={() => history.push('/add')}>
            <FiPlus size={32} color="#FFF" />
          </Button>
        </Label>
        <Label title="LogOut">
          <Button type="button" onClick={() => signOut()}>
            <FiLogOut size={32} color="#FFF" />
          </Button>
        </Label>
      </header>
      <footer>{`Seja bem vindo(a) ${user.name}`}</footer>
      <Cards>
        {events.map(event => {
          const formatFrom = format(
            parseISO(event.fromDate),
            "dd/MMM/yyyy', às ' HH:mm'h'",
          );

          const today = isToday(parseISO(event.fromDate));
          const past = isPast(endOfDay(parseISO(event.toDate)));

          const formatTo = format(
            parseISO(event.toDate),
            "dd/MMM/yyyy', às ' HH:mm'h'",
          );

          return (
            <Card
              key={event.id}
              id={event.id}
              name={event.name}
              fromDate={formatFrom}
              toDate={formatTo}
              past={past}
              today={today}
            />
          );
        })}
        {events.length === 0 && <h2>Você não tem eventos</h2>}
      </Cards>
    </Container>
  );
};

export default Dashboard;
