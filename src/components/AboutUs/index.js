import React from 'react';

import { Columns, Heading, Image, Button } from 'react-bulma-components';

import quadroOne from '../../assets/about-us/quadro-one.png';
import quadroTwo from '../../assets/about-us/quadro-two.png';

import './style.scss';

export default function AboutUs() {
  return (
    <div className="ctnAboutUs">
      <Columns>
        <Columns.Column desktop={{ gap: 0 }} >
          <div className="ctnUs">
            <div className="titleUs">
              <Heading size="2">
                SOBRE
              </Heading>
              <Heading size="2">
                NÓS
              </Heading>
            </div>

            <div className="ctnText">
              <Heading size="7" subtitle>
                Nada melhor do que celebrar a vida ao lado dos amigos
                e família! Melhor ainda quando você pode realizar esta
                comemoração em um lugar aconchegante e em um ambiente agrádavel.
              </Heading>

              <Heading size="7" subtitle>
                Foi a partir destes elementos que surgiu o Venancio Restaurante &
                Bar, que busca fazer com que cada um que visite o local sinta-se
                abraçado e encantado com cada detalhe da decoração, além de apaixonado
                pela nossa culinária.
              </Heading>

              <Heading size="7" subtitle>
                Junto de uma equipe gastronômica e barmans especializados no
                preparo de drinks, bem como um atendimento personalizado.
              </Heading>

              <Heading size="7" subtitle>
                No Venancio você curte o melhor da gastronomia mediterrânea,
                com um toque de comida caseira e os melhores drinks autorais. Aqui a diversão é garantida!
              </Heading>

              <Button outlined colorVariant="light" size="small" color="text">Venha Visitar</Button>
            </div>

          </div>
        </Columns.Column>
        <Columns.Column size="3" desktop={{ gap: 0 }}>
          <div className="ctnQuadroOne">
            <Image src={quadroOne} alt="quadroOne" />
          </div>
        </Columns.Column>
        <Columns.Column size="2" desktop={{ gap: 0 }}>
          <div className="ctnQuadroTwo">
            <Image src={quadroTwo} alt="quadroTwo" />
          </div>
        </Columns.Column>
      </Columns>
    </div>
  )
}