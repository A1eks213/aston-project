import { useGetFavoritesQuery } from '../../redux/RTKQuery/favoritesApi';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Card } from '../../components/Card';
import { Loader } from '../../components/Loader';
import { userSelectors } from '../../redux/store';
import styles from './favoritepage.module.css'

export default function FavoritePage() {
  const  uid = useAppSelector(userSelectors.uid);
  const { data = [], isLoading, isFetching } = useGetFavoritesQuery(String(uid));
  if (isLoading || isFetching) return <Loader />
  return (
    <div className='container'>
      {data &&  (
        data.length > 0 ? (
          <div className='gridContainer'>
          {data.map((p) => (
            <Card player={p} key={p.id}
            />
          ))}
        </div>
        ) : (
          <div className={styles.notFavoritesSpan}>У вас пока нет избранного</div>
        )
      )}
    </div>
  );
}
