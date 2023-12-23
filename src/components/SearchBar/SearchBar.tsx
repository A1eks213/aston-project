import React, { useState } from 'react';
import styles from './searchbar.module.css';
import searchImg from '../../images/search.png'
import { useNavigate } from 'react-router-dom';
import { useAddInHistoryMutation } from '../../redux/RTKQuery/historyApi';
import { useAppSelector } from '../../hooks/reduxHooks';
import { SuggestList } from '../SuggestList';
import { useDebounce } from '../../hooks/useDebounce';
import { userSelectors } from '../../redux/store';

export function SearchBar() {
  const [value, setValue] = useState('');
  const [isSuggestVisible, setIsSuggestVisible] = useState(false);
  const  uid = useAppSelector(userSelectors.uid);
  const navigate = useNavigate();
  const [addInHistory] = useAddInHistoryMutation();
  function handleSearch(e: React.MouseEvent) {
    e.preventDefault()
      if (value.length > 0 ) {
        navigate(`/searchPage?search=${value}`)
        if (uid) {
          addInHistory({ searchName: value, uid: uid })
        }
      } 
  }
  const debouncedSearch = useDebounce(value, 500);
  return (
      <form action="" className={styles.searchBar}>
        <input
          type="text"
          placeholder='Поиск...'
          className={styles.searchInput}
          value={value}
          onChange={(e) => { setValue(e.target.value) }}
          onFocus={() => setIsSuggestVisible(true)}
          onBlur={() => setTimeout(() => setIsSuggestVisible(false), 300)}
        />
        <button className={styles.searchButton} onClick={handleSearch} type='submit'>
          <img src={searchImg} alt="" className={styles.searchButtonImg}/>
        </button>
        {isSuggestVisible && debouncedSearch && <SuggestList searchValue={debouncedSearch}/>}
      </form>
  );
}
