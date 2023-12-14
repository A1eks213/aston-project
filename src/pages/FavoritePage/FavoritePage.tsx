import React from 'react';
import { useGetFavoritesQuery } from '../../RTKQuery/favoritesApi';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Card } from '../../components/Card';
import styles from './favoritepage.module.css';
import { Loader } from '../../components/Loader';

export default function FavoritePage() {
  const { uid } = useAppSelector(state => state.user)
  const { data = [], isLoading } = useGetFavoritesQuery(String(uid));
  return (
    <>
      <div className={styles.favoritePage}>
      {data && isLoading ? (
        <Loader />
      ) : (
      <>
        <>
          {data.map((p) => (
            <Card player={p} key={p.id}
            />
          ))}
        </>
      </>)}
    </div>
    </>
  );
}
