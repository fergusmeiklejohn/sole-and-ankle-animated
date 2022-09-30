/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

export default function MobileMenu({ isOpen, onDismiss }) {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Filler />

        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from { 
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 200ms ease-in-out;
`;

const Content = styled(DialogContent)`
  position: relative;
  width: 300px;
  height: 100%;
  background: white;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${slideIn} 300ms both cubic-bezier(0.17, 0.67, 0.39, 1);
  animation-delay: 100ms;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 32px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 300ms both;
  animation-delay: 100ms;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: ${WEIGHTS.medium};
  line-height: 2rem;
  padding: 8px 0;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  line-height: 1.125rem;
`;
