import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface CardProps {
  id: string;
  name: string;
  fromDate: string;
  toDate: string;
  past: boolean;
  today: boolean;
}
const Card: React.FC<CardProps> = ({
  id,
  name,
  fromDate,
  toDate,
  past,
  today,
}) => {
  return (
    <Container>
      <h5>{name}</h5>
      <p>
        {`De: ${fromDate}`}
        <br />
        {`Até: ${toDate}`}
      </p>
      {past && <span>passado</span>}
      {today && <span>hoje</span>}
      <Link to={`/detail/${id}`}>
        Ver
        <FiArrowRightCircle size={20} color="#fff" />
      </Link>
    </Container>
  );
};

export default Card;
