import React from 'react';
import { Card } from '../card/card.componant';
import './card-list.styles.css'

export const CardList = (props) =>{
    console.log(props)
    return ( 
    <div className ='card-list'>
       {
           props.monsters.map( monster => {
            return(
                <div key={monster.id}>
                   <Card monsters={monster}/>
                </div>
            ) 
           })  
         }
    </div>
    );
}