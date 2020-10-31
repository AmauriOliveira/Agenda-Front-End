import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiCalendar, FiMessageSquare, FiTag } from 'react-icons/fi';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/Toast';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/Auth';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

interface EventFormData {
  name: string;
  description: string;
  fromDate: string;
  toDate: string;
}

const EventForm: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { token } = useAuth();

  const handleSubmit = useCallback(
    async (data: EventFormData) => {
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

        await api.post('/events', data, { headers });

        addToast({
          type: 'success',
          title: 'Evento Cadastrado.',
          description: 'Seu evento já pode ser acessado.',
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
          title: 'Erro na cadastro',
          description: 'Erro a realizar o cadastro do evento.',
        });
      }
    },
    [addToast, token, history],
  );
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Adicionar evento</h1>
          <p>Nome do Evento</p>
          <Input name="name" icon={FiTag} placeholder="Nome" />
          <p>Descrição do Evento</p>
          <Input
            name="description"
            icon={FiMessageSquare}
            placeholder="Descrição"
          />
          <p>Data e Hora do Inicio</p>
          <Input name="fromDate" icon={FiCalendar} type="datetime-local" />
          <p>Data e Hora do Fim</p>
          <Input name="toDate" icon={FiCalendar} type="datetime-local" />
          <div>
            <Button type="submit">Salvar</Button>
            <Button type="button" onClick={() => history.push('/dashboard')}>
              Cancelar
            </Button>
          </div>
        </Form>
      </Content>
    </Container>
  );
};

export default EventForm;
