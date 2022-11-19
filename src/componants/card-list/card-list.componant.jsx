import React from 'react';
import { Card } from '../card/card.componant';
import './card-list.styles.css'

export const CardList = (props) =>{
    console.log(props)
    return ( 
    <div className ='card-list'>
       {
           props.monster.map( monster => {
            return(
                <div>
                   <Card key={monster.id} monster={monster}/>
                </div>
            )
           })  
         }
    </div>
    );
}