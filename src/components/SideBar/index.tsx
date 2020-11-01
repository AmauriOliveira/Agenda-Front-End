import React, { useState } from 'react';
import { FiLogOut, FiMenu, FiPlus, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';
import Button from '../Button';

import { Content, Label } from './styles';

const Sidebar: React.FC = () => {
  const [hasMenu, setMenu] = useState<boolean>(false);

  const history = useHistory();
  const { user, signOut } = useAuth();
  return (
    <Content isVisible={hasMenu}>
      <div className="menu">
        <button type="button" onClick={() => setMenu(!hasMenu)}>
          {hasMenu ? (
            <FiX size={20} color="#f00" />
          ) : (
            <FiMenu size={20} color="#0f0" />
          )}
        </button>
      </div>
      <header>
        <p>Seja bem vindo(a)</p>
        <strong>{user.name}</strong>
      </header>
      <section>
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
      </section>
    </Content>
  );
};

export default Sidebar;
