import React from 'react';

import { Columns, Heading, Image, Button, Form } from 'react-bulma-components';

import Venancio from '../../assets/footer/logo-venancio.png';
import Noweb from '../../assets/footer/logo-noweb.png';
import Component1 from '../../assets/contats/Component1.png';
import Component2 from '../../assets/contats/Component2.png';
import Component3 from '../../assets/contats/Component3.png';
import Component4 from '../../assets/contats/Component4.png';

import './style.scss';

export default function Footer() {
  return (
    <div className="ctnFooter">
      <Columns>
        <Columns.Column size={5} desktop={{ gap: 0 }}>
          <div className="ctnLocation">
            <Image src={Venancio} />
            <div className="ctnLocationText">
              <Heading size="7" subtitle>
                Localizado no coração do Tatuapé, o Venancio Restaurante
                & Bar traz o melhor da gastronomia Mediterrânea em conjunto
                da comida caseira, em um ambiente incrível e descolado.
              </Heading>
            </div>
          </div>
        </Columns.Column>
        <Columns.Column size={3} desktop={{ gap: 0 }}>
          <div className="ctnGeneral">
            <div className="ctnSchedule">
              <Heading size="7" subtitle>
                HORÁRIO DE FUNCIONAMENTO:
              </Heading>
              <Heading size="7" subtitle>
                De Terça a Sexta, das 12:00 ~ 23:00
              </Heading>
              <Heading size="7" subtitle>
                Sábado e Domingo, das 11:00 ~ 23:00.
              </Heading>
            </div>
            <div className="ctnAdress">
              <Heading size="7" subtitle>
                ENDEREÇO:
              </Heading>
              <Heading size="7" subtitle>
                Rua Serra De Japi, 789 - Tatuapé - SP
              </Heading>
              <Heading size="7" subtitle>
                CEP: 03.309-000
              </Heading>
            </div>
          </div>
        </Columns.Column>
        <Columns.Column size={1} desktop={{ gap: 0 }}></Columns.Column>
        <Columns.Column size={3} desktop={{ gap: 0 }}>
          <div className="ctnNetwork">
            <Heading size="7" subtitle>
              SIGA NOSSAS REDES SOCIAIS
            </Heading>
            <div className="ctnSocialList">
              <ul>
                <li className="SocialLists">
                  <Image src={Component1} size={33} />
                  <Image src={Component2} size={33} />
                  <Image src={Component3} size={33} />
                  <Image src={Component4} size={33} />
                </li>
              </ul>
            </div>
          </div>
        </Columns.Column>
        <Columns.Column size={12} desktop={{ gap: 0 }}>
          <hr style={{ margin: "0 auto", width: "90%" }} />
          <div className="ctnDireitos">
            <Heading subtitle size="7">
              © Copyright 2021 - Venancio Restaurante & Bar - Todos os Direitos Reservados
            </Heading>
            <Image src={Noweb} />
          </div>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column></Columns.Column>
      </Columns>
    </div>
  )
}