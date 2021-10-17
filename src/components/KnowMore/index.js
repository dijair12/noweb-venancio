import React from 'react';

import { Button, Heading, Columns } from 'react-bulma-components';

import './style.scss';

export default function KnowMore(){
  return(
    <div className="container">
      <Columns>
        <Columns.Column>1</Columns.Column>
        <Columns.Column>2</Columns.Column>
      </Columns>
    </div>
  )
}