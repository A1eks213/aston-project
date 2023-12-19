import React, { useContext } from 'react';
import { useGetFavoritesQuery } from '../../RTKQuery/favoritesApi';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Card } from '../../components/Card';
import { Loader } from '../../components/Loader';
import { IsSearchBarVisible } from '../../context/SearchbarContext';

export default function FavoritePage() {
  const uid = useAppSelector(state => state.user.uid)
  const {setIsSearchBarVisible} = useContext(IsSearchBarVisible);
  setIsSearchBarVisible(false)
  const { data = [], isLoading } = useGetFavoritesQuery(String(uid));
  return (
    <div className='container'>
      <div className='gridContainer'>
      {data && isLoading ? (
        <Loader />
      ) : (
      <>
          {data.map((p) => (
            <Card player={p} key={p.id}
            />
          ))}
      </>)}
    </div>
    </div>
  );
}
