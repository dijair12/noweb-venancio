import React from 'react';
import { Button, Heading } from 'react-bulma-components';

import './style.scss';

import logoHero from '../../assets/home-hero/logo-hero.png';

export default function HomeIndex() {
  return (
    <div className="heroContainer" >
      <nav className="navbar navHero" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src={logoHero} width="26" height="38" alt="logo" />
          </a>

          <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end" >
            <a href="/" className="navbar-item">
              Ínicio
            </a>
            <a href="/" className="navbar-item">
              O Ambiente
            </a>
            <a href="/" className="navbar-item">
              Gastronomia
            </a>
            <a href="/" className="navbar-item">
              Contato
            </a>
            <a href="/" className="navbar-item">
              <Button outlined colorVariant="light" size="small" color="text">Cardápio</Button>
            </a>

          </div>

        </div>
      </nav>

      <div className="containerTitle">
        <Heading size="1">
          GASTRONOMIA
        </Heading>
        <Heading size="1">
          MEDITERRÂNEA
        </Heading>
        <Heading size="6" subtitle>
          Localizado no coração do bairro Tatuapé, o Restaurante Venancio traz o conceito
          da gastronomia Mediterrânea com o afeto da comida caseira. Tudo é feito diretamente
          aqui na casa, incluindo pães, massas e bebidas.
        </Heading>

        <Button outlined colorVariant="light" size="small" color="text">Saiba Mais</Button>
      </div>

    </div>
  )
}