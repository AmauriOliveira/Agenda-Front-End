import { Form } from '@unform/web';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { FiCalendar, FiMessageSquare, FiTag } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { format, parseISO } from 'date-fns';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';
import { Container, Content, Background, Label } from './styles';
import logoImg from '../../assets/logo.svg';
import { useToast } from '../../hooks/Toast';
import getValidationErrors from '../../utils/getValidationErrors';

interface EventDTO {
  name: string;
  description: string;
  fromDate: string;
  toDate: string;
}

interface PostParams {
  id: string;
}

const Event: React.FC = () => {
  const [event, setEvent] = useState<EventDTO>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const { params } = useRouteMatch<PostParams>();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
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

  const handleSubmit = useCallback(
    async (data: EventDTO) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome do evento é obrigatório'),
          description: Yup.string().required(
            'Descrição do evento é obrigatório',
          ),
          fromDate: Yup.string().required('Inicio do evento é obrigatório'),
          toDate: Yup.string().required('Fim do evento é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        };

        const response = await api.put(`events/${params.id}`, data, {
          headers,
        });
        setEvent(response.data);

        addToast({
          type: 'success',
          title: 'Evento editado.',
          description: 'Editado com sucesso, voltando para dashboard.',
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro ao editar',
          description: 'Falha ao editar o evento, tente novamente',
        });
      }
    },
    [addToast, token, history, params.id],
  );

  return (
    <Container>
      {editMode && event && (
        <Content>
          <img src={logoImg} alt="Logo" />
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            initialData={{
              name: event.name,
              description: event.description,
              fromDate: format(parseISO(event.fromDate), "yyyy-MM-dd'T'HH:mm"),
              toDate: format(parseISO(event.toDate), "yyyy-MM-dd'T'HH:mm"),
            }}
          >
            <h1>Editar evento</h1>
            <p>Nome do Evento</p>
            <Input name="name" icon={FiTag} placeholder="Nome" />
            <p>Descrição do Evento</p>
            <Input
              name="description"
              icon={FiMessageSquare}
              placeholder="Descrição"
            />
            <p>Data e Hora do Inicio</p>
            <Input
              name="fromDate"
              icon={FiCalendar}
              type="datetime-local"
              min={format(Date.now(), "yyyy-MM-dd'T'HH:mm")}
            />
            <p>Data e Hora do Fim</p>
            <Input
              name="toDate"
              icon={FiCalendar}
              type="datetime-local"
              min={format(Date.now(), "yyyy-MM-dd'T'HH:mm")}
            />
            <div>
              <Button type="submit">Salvar</Button>
              <Button type="button" onClick={() => setEditMode(!editMode)}>
                Cancelar
              </Button>
            </div>
          </Form>
        </Content>
      )}
      <Background />
      {!editMode && event && (
        <Content>
          <p>{event.name}</p>
          <p>{event.description}</p>
          <p>
            {format(parseISO(event.fromDate), "dd/MMM/yyyy', às ' HH:mm'h'")}
          </p>
          <p>{format(parseISO(event.toDate), "dd/MMM/yyyy', às ' HH:mm'h'")}</p>
          <div>
            <Label title="Editar">
              <Button type="button" onClick={() => setEditMode(!editMode)}>
                Editar
              </Button>
            </Label>
            <Label title="Atenção é parmanente">
              <Button type="button" onClick={() => history.push('/dashboard')}>
                Apagar
              </Button>
            </Label>
          </div>
        </Content>
      )}
    </Container>
  );
};

export default Event;
