import React from 'react';
import Card from './Card';

const CardList=({Robots}) =>{
  const CardComponent=Robots.map((user,i) =>{
    return<Card id=={Robots[0].id} name={Robots[0].name} email={Robots[0].email}/>

  })
  return(
    <div>
  {CardComponent}
    </div>
  );
}
export default CardList;
