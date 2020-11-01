import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

const NotFound: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Logo" />
      <h1>Página não encontrada</h1>
      <span>
        Desculpe, mas a pagina não pode ser encontrada, vereifique o endereço e
        tente novamente.
      </span>
      <Link to="/dashboard">
        <FiArrowLeft />
        Voltar para DashBoard
      </Link>
    </Content>
    <Background />
  </Container>
);

export default NotFound;
