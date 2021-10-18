import React from 'react';

import { Columns, Heading, Image, Button, Card } from 'react-bulma-components';

import { OptionGastronomyData } from './data.js';

import logoFrame from '../../assets/gastronomy/logo-frame.png';

import './style.scss';

export default function Gastronomy() {
  console.log(OptionGastronomyData)
  return (
    <div className="ctnGastronomy">
      <Columns>
        <Columns.Column size={4} desktop={{ gap: 0 }}>
          <div className="ctnLogo">
            <Image src={logoFrame} alt="logoFrame" />
          </div>
        </Columns.Column>
        <Columns.Column size={2} desktop={{ gap: 0 }}></Columns.Column>
        <Columns.Column size={5} desktop={{ gap: 0 }}>
          <div className="ctnGastronomyTitle">
            <div className="titleGastronomy">
              <Heading size="2">
                NOSSA
              </Heading>
              <Heading size="2">
                GASTRONOMIA
              </Heading>
            </div>

            <div className="ctnText">
              <Heading size="7" subtitle>
                Assinado pelo chef Igor Martins, nosso cardápio traz releituras
                da gastronomia Mediterrânea, dieta de países da Europa, Ásia e
                norte da África, que tem em sua base, frutos do mar, alimentos
                leves e naturais. Unimos elementos da culinária caseira, ao
                preparar pratos frescos. Além de uma variedade de porções e
                drinks de qualidade.
              </Heading>
            </div>

            <div className="ctnCardList">
              {OptionGastronomyData.length > 0 ?
                OptionGastronomyData.map((item, index) => {
                  return <Card key={index}>
                    <Card.Header>
                      <Card.Header.Title>{item.text}</Card.Header.Title>
                    </Card.Header>
                    <Card.Image src={logoFrame} alt="logo" />
                  </Card>
                })
                :
                null
              }

            </div>

          </div>
        </Columns.Column>
      </Columns>
    </div>
  )
}