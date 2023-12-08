import {Suspense} from 'react';
import { useParams } from 'react-router-dom';
import { useGetPlayerByIdQuery } from '../../RTKQuery/playersApi';
import styles from './cardpage.module.css';

export default function CardPage() {
  const { id } = useParams();
  const { data: player } = useGetPlayerByIdQuery(String(id));
  console.log(player)
  return (
    <>
      {player && (
        <div className={styles.cardPage}>
          <h1 className={styles.cardTitle}>{player.name}</h1>
          <div className={styles.cardInfo}>
            <div className={styles.imgContainer}>
              <Suspense fallback='загрузка...'>
                <img src={player.img} alt={player.name} className={styles.img} />
              </Suspense>
            </div>
            <div className={styles.info}>
              <p className={styles.number}>{id}</p>
              <p className={styles.position}>Позиция: {player.position}</p>
              <p className={styles.price}>Цена:  {player.price} млн. €</p>
              <p className={styles.age}>Возраст: {player.age}</p>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
