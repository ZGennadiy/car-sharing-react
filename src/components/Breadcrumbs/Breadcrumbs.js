import React from 'react';
import styles from './Breadcrumbs.module.scss';
import {Link} from 'react-router-dom';

export const Breadcrumbs = ({step}) => {
  const crumbs = ['Местоположение', 'Модель', 'Дополнительно', 'Итого'];

  return (
    <ul className={styles.breadcrumbs}>
      {crumbs.map((crumb, i) => {
        const crumbNumber = i + 1;
        const classList =
          crumbNumber < step
            ? `${styles.breadcrumbs__crumbLink} ${styles.breadcrumbs__crumbLink_prevStep}`
            : styles.breadcrumbs__crumbLink;
        return (
          <li key={String(i)} className={styles.breadcrumbs__crumb}>
            <Link
              className={classList}
              disabled={step < crumbNumber}
              to={`/order#step${step}`}
            >
              {crumb}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
