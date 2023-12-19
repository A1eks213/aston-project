import React, { useContext } from 'react';
import { Card } from '../../components/Card';
import { useGetPlayersQuery } from '../../RTKQuery/playersApi';
import { Loader } from '../../components/Loader';
import { IsSearchBarVisible } from '../../context/SearchbarContext';
export default function HomePage() {
  const { data: players, isLoading } = useGetPlayersQuery();
  const { setIsSearchBarVisible } = useContext(IsSearchBarVisible);
  setIsSearchBarVisible(true)
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
