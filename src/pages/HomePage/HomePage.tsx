import React from 'react';
import styles from './homepage.module.css';
import { Card } from '../../components/Card';
import { useGetPlayersQuery } from '../../RTKQuery/playersApi';
import { Loader } from '../../components/Loader';
export default function HomePage() {

  // const { isAuth, email } = useAuth();
  const { data: players, isLoading} = useGetPlayersQuery();
  if (isLoading) return <Loader/>
  return (
      <div className={styles.homePage}>
        {players && (
          <>
            {players.map((p) => (
              <Card player={p} key={p.id}
              />
            ))}
          </>
        )}
      </div>
  );
}
