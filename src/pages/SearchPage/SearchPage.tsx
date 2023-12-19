import React, { useContext } from 'react';
import styles from './searchpage.module.css';
import { useSearchParams } from 'react-router-dom';
import { useGetPlayersBySearchQuery } from '../../RTKQuery/playersApi';
import { Card } from '../../components/Card';
import { Loader } from '../../components/Loader';
import { IsSearchBarVisible } from '../../context/SearchbarContext';

export function SearchPage() {
  const [searchParams] = useSearchParams()
  const {setIsSearchBarVisible} = useContext(IsSearchBarVisible);
  setIsSearchBarVisible(false)
  const {data: players, isLoading} = useGetPlayersBySearchQuery({ name: searchParams.get('search')})
  if (isLoading) return <Loader />
  return (
    <div className='container'>
      <h1 className='pageTitle'>Результаты поиска по запросу: '{searchParams.get('search')}'</h1>
      {players && (
        players.length > 0 ? (
          <div className='gridContainer'>
            {players.map((p) => (
              <Card player={p} key={p.id}/>
            ))}
          </div>
          ) : (
            <span className={styles.notFoundSpan}>По запросу '{searchParams.get('search')}' ничего не найдено</span>
          )
      )}
    </div>
  );
}
