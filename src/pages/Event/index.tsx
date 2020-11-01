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
import { Container, Content, Background, Label, View } from './styles';
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

  async function handleDeleteEvent(): Promise<void> {
    console.log('click');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    try {
      await api.delete(`events/${params.id}`, {
        headers,
      });

      addToast({
        type: 'success',
        title: 'Evento deletado.',
        description: 'Deletado com sucesso, voltando para dashboard.',
      });

      history.push('/dashboard');
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao deletar',
        description: 'Falha ao deletar o evento, tente novamente',
      });
    }
  }

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
            <strong>Editar evento</strong>
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
              <Label title="Salvar Alterações">
                <Button type="submit">Salvar</Button>
              </Label>
              <Label title="Sair da edição">
                <Button type="button" onClick={() => setEditMode(!editMode)}>
                  Cancelar
                </Button>
              </Label>
            </div>
          </Form>
        </Content>
      )}
      <Background />
      {!editMode && event && (
        <Content>
          <header>
            <Label title="Voltar para Dashboard">
              <Button type="button" onClick={() => history.push('/dashboard')}>
                Voltar
              </Button>
            </Label>
          </header>
          <View>
            <strong>{event.name}</strong>
            <span>{event.description}</span>
            <p>
              Inicio:
              {format(
                parseISO(event.fromDate),
                " dd MMMM' de 'yyyy', às ' HH:mm'h'",
              )}
            </p>
            <p>
              Fim:
              {format(
                parseISO(event.toDate),
                " dd MMMM' de 'yyyy', às ' HH:mm'h'",
              )}
            </p>
            <div>
              <Label title="Editar o evento">
                <Button type="button" onClick={() => setEditMode(!editMode)}>
                  Editar
                </Button>
              </Label>
              <Label title="Apagar o evento">
                <Button type="button" onClick={handleDeleteEvent}>
                  Apagar
                </Button>
              </Label>
            </div>
          </View>
        </Content>
      )}
    </Container>
  );
};

export default Event;
