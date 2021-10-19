import React from 'react';

import { Columns, Heading, Image, Button, Form } from 'react-bulma-components';

import Maps from '../../assets/contats/maps.png';
import Component1 from '../../assets/contats/Component1.png';
import Component2 from '../../assets/contats/Component2.png';
import Component3 from '../../assets/contats/Component3.png';
import Component4 from '../../assets/contats/Component4.png';

import './style.scss';

export default function Contats() {
  return (
    <div className="ctnContats">
      <Columns>

        <Columns.Column>
          <div className="ctnVenanciar">
            <div className="VenanciarTitle">
              <Heading size="4">
                VEM
              </Heading>
              <Heading size="4">
                VENANCIAR
              </Heading>
            </div>
            <Heading size="7" subtitle>
              Saboreie o melhor da culinária Mediterrânea em um ambiente
              que fará sua experiência ser única do início ao fim. Vem Venanciar conosco!
            </Heading>

            <div className="ctnImage">
              <Image src={Maps} />
            </div>

            <div className="ctnContatList">
              <ul>
                <li className="ContatsLists">
                  <Image src={Component1} size={32} />
                  <Heading size="7" subtitle>
                    @venanciorestaurantebar
                  </Heading>
                </li>
                <li className="ContatsLists">
                  <Image src={Component2} size={32} />
                  <Heading size="7" subtitle>
                    contato@venanciorestauranteebar.com.br
                  </Heading>
                </li>
                <li className="ContatsLists">
                  <Image src={Component3} size={32} />
                  <Heading size="7" subtitle>
                    (11) 2225-1844
                  </Heading>
                </li>
                <li className="ContatsLists">
                  <Image src={Component4} size={32} />
                  <Heading size="7" subtitle>
                    Rua Serra De Japi, 789  |  Tatuapé - SP  |  03309-000
                  </Heading>
                </li>
              </ul>
            </div>




          </div>
        </Columns.Column>

        <Columns.Column>
          <div className="ctnContats">
            <div className="ContatsTitle">
              <Heading size="4">
                ENTRE EM
              </Heading>
              <Heading size="4">
                CONTATO
              </Heading>
            </div>
            <Heading size="7" subtitle>
              Para mais informações, sugestões ou feedbacks!
            </Heading>

            <div className="ctnForms">
              <Form.Field>
                <Form.Input type="text" placeholder="Nome" />
                <Form.Input type="text" placeholder="Telefone" />
                <Form.Input type="email" placeholder="Email" />
                <Form.Input type="text" placeholder="Assunto" />
                <Form.Textarea type="text" placeholder="Mensagem" />
              </Form.Field>
              <Button outlined colorVariant="light" color="text">Enviar contato</Button>
            </div>
          </div>
        </Columns.Column>

      </Columns>
    </div >
  )
}