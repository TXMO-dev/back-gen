import React from 'react';

export const Card = props => (
    <div>
        <h1>{props.monster.name}</h1>
        <h3>{props.monster.email}</h3>    
    </div>
)