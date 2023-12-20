import { useParams } from 'react-router-dom';
import { useGetPlayerByIdQuery } from '../../redux/RTKQuery/playersApi';
import styles from './cardpage.module.css';
import { useAddInFavoritesMutation, useGetFavoritesByIdQuery, useRemoveFromFavoritesMutation } from '../../redux/RTKQuery/favoritesApi';
import { useAppSelector } from '../../hooks/reduxHooks';
import { LikeBtn } from '../../components/LikeBtn';
import { Loader } from '../../components/Loader';

export default function CardPage() {
  const {id} = useParams();
  const uid  = useAppSelector(state => state.user.uid)
  const { data: player, isLoading } = useGetPlayerByIdQuery(String(id));
  const [addFavorites] = useAddInFavoritesMutation();
  const [removeFavorites] = useRemoveFromFavoritesMutation();
  const { data: isFavorite} = useGetFavoritesByIdQuery({
    id: String(id),
    uid: String(uid),
  });
  async function handleLike(e: React.MouseEvent) {
    e.preventDefault()
    if (isFavorite && player) {
      await removeFavorites({ id: player.id, uid })
    } else {
      await addFavorites({ player, uid })
    }
  }

  return (
    <>
      {isLoading ? <Loader/> : (
        <>
          {player && (
          <div className={styles.cardPage}>
            <h1 className={styles.cardTitle}>{player.name}</h1>
            <div className={styles.cardInfo}>
              <div className={styles.imgContainer}>
                  <img src={player.img} alt={player.name} className={styles.img} />
              </div>
              <div className={styles.info}>
                <p className={styles.number}>{id}</p>
                <p className={styles.position}>Позиция: {player.position}</p>
                <p className={styles.price}>Цена:  {player.price} млн. €</p>
                <p className={styles.age}>Возраст: {player.age}</p>
              { uid && (<LikeBtn isFavorite={isFavorite} width='80px' height='65px' handleLike={handleLike} />)}
              </div>
            </div>
          </div>
        )}
        </>
      )}
    </>
  );
}
