import React from 'react';
import styles from './card.module.css';
import { Link } from 'react-router-dom';

interface ICard {
  name: string,
  id: string,
  age: number,
  price: number,
  position: string,
  imgSrc: string,

}
export function Card({ name, id, age, price, position, imgSrc }: ICard) {
  return (
    <Link to={`/player/${id}`} className={styles.card}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.aboutPlayerDiv}>
        <img src={imgSrc} alt="" className={styles.img}/>
        <div className={styles.info}>
          <p className={styles.number}>{id}</p>
          <p className={styles.position}>Позиция: {position}</p>
          <p className={styles.price}>Цена:  {price} млн. €</p>
          <p className={styles.age}>Возраст: {age}</p>
        </div>
      </div>
    </Link>
  );
}
