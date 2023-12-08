import React from 'react';
import styles from './homepage.module.css';
import { Card } from '../../components/Card';
import { useGetPlayersQuery } from '../../RTKQuery/playersApi';
export default function HomePage() {

  // const { isAuth, email } = useAuth();
  const { data: players} = useGetPlayersQuery();
  return (
    <>
      <div className={styles.homePage}>
        {/* HomePage */}
        {players && (
          <>
            {players.map((p) => (
              <Card
                key={p.id}
                name={p.name}
                position={p.position}
                id={p.id}
                price={p.price}
                age={p.age}
                imgSrc={p.img}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}
