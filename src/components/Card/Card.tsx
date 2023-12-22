import styles from './card.module.css';
import { Link } from 'react-router-dom';
import { LikeBtn } from '../LikeBtn';
import { IPlayer } from '../../redux/RTKQuery/playersApi';
import { useAddInFavoritesMutation, useGetFavoritesByIdQuery, useRemoveFromFavoritesMutation } from '../../redux/RTKQuery/favoritesApi';
import { useAppSelector } from '../../hooks/reduxHooks';
import PropTypes from "prop-types";

type ICard = {
  player: IPlayer

}
export function Card({ player }: ICard) {
  const [addFavorites] = useAddInFavoritesMutation();
  const [removeFavorites] = useRemoveFromFavoritesMutation();
  const uid = useAppSelector(state => state.user.uid)
  const { data: isFavorite, isLoading} = useGetFavoritesByIdQuery({
    id: player.id,
    uid: String(uid),
  });
  async function handleLike(e: React.MouseEvent) {
    e.preventDefault()
    if (isFavorite) {
      await removeFavorites({ id: player.id, uid })
    } else {
      await addFavorites({ player, uid })
    }
  }
  return (
    <Link to={`/player/${player.id}`} className={styles.card}>
      <h1 className={styles.name}>{player.name}</h1>
      <div className={styles.aboutPlayerDiv}>
        <img src={player.img} alt="" className={styles.img} />
        <div className={styles.info}>
          <p className={styles.number}>{player.id}</p>
          <p className={styles.position}>Позиция: {player.position}</p>
          <p className={styles.price}>Цена:  {player.price} млн. €</p>
          <p className={styles.age}>Возраст: {player.age} </p>
          {uid && !isLoading && (<LikeBtn isFavorite={isFavorite} handleLike={handleLike} />)}
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  plr: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
