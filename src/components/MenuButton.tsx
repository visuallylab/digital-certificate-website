import React from 'react';
import styled from 'styled-components';
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import { media, colors } from '@/styles';

const MenuIconWrapper = styled.a`
  position: fixed;
  top: 24px;
  right: 32px;
  z-index: 9;
  display: none;
  cursor: pointer;

  ${media.lessThan('md')`
    display: block;
  `}
`;

type Props = {
  toggleMenu: () => void;
  isActive: boolean;
};

const MenuButton: React.FC<Props> = ({ toggleMenu, isActive }) => {
  return (
    <MenuIconWrapper
      onClick={e => {
        e.preventDefault();
        toggleMenu();
      }}
    >
      {isActive ? (
        <FaTimesCircle color={colors.primary} />
      ) : (
        <FaBars color={colors.primary} />
      )}
    </MenuIconWrapper>
  );
};

export default MenuButton;
