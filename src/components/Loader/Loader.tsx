import React from 'react';
import styles from './loader.module.css';

export function Loader() {
  return (
    <div className={styles.loader}>
      <h1 className={styles.title}>
      <span className={styles.loaderSymbol}>L</span>
      <span className={styles.loaderSymbol}>O</span>
      <span className={styles.loaderSymbol}>A</span>
      <span className={styles.loaderSymbol}>D</span>
      <span className={styles.loaderSymbol}>I</span>
      <span className={styles.loaderSymbol}>N</span>
      <span className={styles.loaderSymbol}>G</span>
      <span className={styles.loaderSymbol}>.</span>
      <span className={styles.loaderSymbol}>.</span>
      <span className={styles.loaderSymbol}>.</span>
    </h1>
    </div>
  );
}
