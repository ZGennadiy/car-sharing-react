import React, {useContext} from 'react';
import {OrderContext} from '../../context/OrderContext';
import styles from './Breadcrumbs.module.scss';
import {Link} from 'react-router-dom';

export const Breadcrumbs = () => {
  const crumbs = ['Местоположение', 'Модель', 'Дополнительно', 'Итого'];
  const {order} = useContext(OrderContext);

  return (
    <ul className={styles.breadcrumbs}>
      {crumbs.map((crumb, i) => {
        const crumbNumber = i + 1;
        const classList =
          crumbNumber < order.stepOrder
            ? `${styles.breadcrumbs__crumbLink} ${styles.breadcrumbs__crumbLink_prevStep}`
            : styles.breadcrumbs__crumbLink;
        return (
          <li key={String(i)} className={styles.breadcrumbs__crumb}>
            <Link
              className={classList}
              disabled={order.stepOrder < crumbNumber}
              to={`/order#step${order.stepOrder}`}
            >
              {crumb}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
