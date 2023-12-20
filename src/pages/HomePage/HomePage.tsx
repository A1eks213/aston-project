import React, { useContext } from 'react';
import { Card } from '../../components/Card';
import { useGetPlayersQuery } from '../../RTKQuery/playersApi';
import { Loader } from '../../components/Loader';
export default function HomePage() {
  const { data: players, isLoading } = useGetPlayersQuery();
  if (isLoading) return <Loader />
  return (
    <div className='container'>
      <div className='gridContainer'>
        {players && (
          <>
            {players.map((p) => (
              <Card player={p} key={p.id}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
