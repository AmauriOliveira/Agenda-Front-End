import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'; // icons
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/Toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FunctionComponent = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um E-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        addToast({
          type: 'success',
          title: 'Cadastro Realizado!',
          description: 'Você já pode fazer seu Login.',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na cadastro',
          description:
            'Erro ao realizar o cadastro, Verifique os dados e tente novamente.',
        });
      }
    },
    [history, addToast],
  );

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para Login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
