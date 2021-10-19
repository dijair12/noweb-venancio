import React from 'react';

import { Image, Heading, Columns } from 'react-bulma-components';

import quadro from '../../assets/know-more/quadro-1.png';

import './style.scss';

export default function KnowMore() {
  return (
    <div id="knowMore" style={{ background: "#DCDCDC" }}>
      <Columns desktop={{ gap: 0 }} >
        <Columns.Column desktop={{ gap: 0 }} style={{ padding: "0px" }}>
          <Image src={quadro} fullwidth alt="quadro1" />
        </Columns.Column>

        <Columns.Column desktop={{ gap: 0 }}>

          <div className="ctnMore">
            <div className="ctnMoreSpace">
              <div className="titleMore">
                <Heading size="3">
                  CONHEÇA
                </Heading>
                <Heading size="3">
                  MAIS
                </Heading>
              </div>

              <Heading size="7" subtitle>
                Além de te conquistar com nossos deliciosos pratos, possuímos três ambientes
                distintos, que darão exclusividade em cada vez que você visitar nosso espaço!
              </Heading>
            </div>
            <div className="titlesInfo">
              <Heading size="3">ÁREA EXTERNA</Heading>
              <Heading size="3">MEZANINO</Heading>
              <Heading size="3">BAR</Heading>
              <Heading size="3">MURAL INSTAGRAMÁVEL</Heading>
              <Heading size="3">MUSICA AO VIVO</Heading>
            </div>
          </div>

        </Columns.Column>
      </Columns>
    </div>
  )
}