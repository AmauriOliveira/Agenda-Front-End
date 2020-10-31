import React, { useState, useEffect } from 'react';

import { useHistory, useRouteMatch } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';

interface EventDTO {
  id: string;
  name: string;
  description: string;
  fromDate: string;
  toDate: string;
  userId: string;
}

interface PostParams {
  id: string;
}

const Event: React.FC = () => {
  const [event, setEvent] = useState<EventDTO>();
  const { params } = useRouteMatch<PostParams>();
  const history = useHistory();
  const { token } = useAuth();

  useEffect(() => {
    api
      .get(`events/${params.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        setEvent(response.data);
      });
  }, [token, params.id]);
  return ();
};

export default Event;
/*
<>{event ? (

  )
    : (

    )}</>
    */
