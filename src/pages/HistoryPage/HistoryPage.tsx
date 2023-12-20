import { useGetHistoryQuery } from '../../RTKQuery/historyApi';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Loader } from '../../components/Loader';
import styles from './historypage.module.css';
import { HistoryItem } from '../../components/HistoryItem';

export default function HistoryPage() {
  const uid = useAppSelector(state => state.user.uid);
  const {data: history, isLoading} = useGetHistoryQuery(String(uid));
  if (isLoading) return <Loader />
  return (
    <div className={styles.historyPage}>
      <h1 className='pageTitle'>История запросов:</h1>
      {history && (
        history.length > 0 ? (
          <>
            {history.map((item) => (
              <HistoryItem key={item[0]} uniqId={item[0]} searchValue={item[1]}/>
            ))}
          </>
          ) : (
            <span className={styles.notHistorySpan}>История запросов отсутствует</span>
          )
      )}
    </div>
  );
}
