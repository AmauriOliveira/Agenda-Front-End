/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';
import { format, isToday, isPast, parseISO, endOfDay } from 'date-fns';
import 'date-fns/locale/pt-BR';

import Card from '../../components/Card';
import api from '../../services/api';
import { Container, Cards, Aviso, CardsContainer } from './styles';

import { useAuth } from '../../hooks/Auth';
import Sidebar from '../../components/SideBar';

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

  const { token } = useAuth();

  useEffect(() => {
    api
      .get('events', { headers: { Authorization: `Bearer ${token}` } })
      .then(response => {
        setEvent(response.data);
      });
  }, [token]);

  return (
    <>
      <Sidebar />
      <Container>
        {events.length === 0 && (
          <Aviso>
            <h1>Você não tem eventos</h1>
          </Aviso>
        )}
        {events.length !== 0 && (
          <CardsContainer>
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
            </Cards>
          </CardsContainer>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
