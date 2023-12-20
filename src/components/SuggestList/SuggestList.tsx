import { Link } from 'react-router-dom';
import { useGetPlayersBySearchSuggestQuery } from '../../RTKQuery/playersApi';
import styles from './suggestlist.module.css';

interface ISuggestList {
    searchValue: string
}
export function SuggestList({searchValue}: ISuggestList) {
    const {data: players} = useGetPlayersBySearchSuggestQuery({name: searchValue});
    return (
        <>
            {players && (
                <div className={styles.suggestList} style={{display: players.length > 0 ? 'flex' : 'none'}}>
                    {players.map((p) => <Link to={`/player/${p.id}`} className={styles.suggestItem} key={p.id}>
                        <span className={styles.suggestItemNumber}>{p.id}</span>
                        {p.name}
                        </Link>)}
                </div>
            )}
        </>
    )
}