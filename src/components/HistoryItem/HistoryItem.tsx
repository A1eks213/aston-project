import React from 'react';
import styles from './historyitem.module.css';
import { Link } from 'react-router-dom';
import deleteImg from '../../images/delete.png'
import { useRemoveFromHistoryMutation } from '../../RTKQuery/historyApi';
import { useAppSelector } from '../../hooks/reduxHooks';

interface IHistoryItem {
  searchValue: string,
  uniqId: string,
}
export function HistoryItem({searchValue, uniqId}: IHistoryItem) {
  const [removeFromHistory] = useRemoveFromHistoryMutation()
  const uid = useAppSelector(state => state.user.uid);
  return (
    <div className={styles.historyItem}>
      <Link to={`/searchPage?search=${searchValue}`} className={styles.historyLink}>{searchValue}</Link>
      <button
      className={styles.deleteHistoryButton}
        onClick={() => {removeFromHistory({uid, uniqId})}}
      >
        <img src={deleteImg} alt="удалить" />
      </button>
    </div>
  );
}
