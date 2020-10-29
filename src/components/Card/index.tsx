import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface CardProps {
  id: string;
  description: string;
  fromDate: string;
  toDate: string;
}
const Card: React.FC<CardProps> = ({ description, fromDate, toDate, id }) => {
  return (
    <Container>
      <h2>name</h2>
      <h3>{description}</h3>
      <p>
        {`De: ${fromDate}`}
        <br />
        {`Até: ${toDate}`}
      </p>
      <hr />
      <Link to={`/detail/${id}`}>
        <FiArrowRightCircle size={20} color="#000" />
      </Link>
    </Container>
  );
};

export default Card;
