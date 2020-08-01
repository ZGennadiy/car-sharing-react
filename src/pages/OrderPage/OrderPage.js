import React, {useState} from 'react';
import styles from './OrderPage.module.scss';
import {OrderContext} from '../../context/OrderContext';
import {Header} from '../../components/Header/Header';
import {Breadcrumbs} from '../../components/Breadcrumbs/Breadcrumbs';
// import {OrderStep1} from '../../components/OrderSteps/OrderStep1';
// import {OrderStep2} from '../../components/OrderSteps/OrderStep2';
import {OrderStep3} from '../../components/OrderSteps/OrderStep3';
import {OrderState} from '../../components/OrderSteps/OrderState';

export const OrderPage = () => {
  const [order, setOrder] = useState({
    stepOrder: 1,
  });

  const goNextStep = ({stepOrder}) =>
    setOrder({...order, stepOrder: stepOrder + 1});

  return (
    <OrderContext.Provider value={{order, setOrder, goNextStep}}>
      <div className={styles.orderpage}>
        <Header />
        <main className={styles.orderpage__mainContent}>
          <Breadcrumbs />
          <div className={styles.orderpage__container}>
            <section className={styles.orderpage__orderMake}>
              {/* <OrderStep1 /> */}
              {/* <OrderStep2 /> */}
              <OrderStep3 />
            </section>
            <OrderState />
          </div>
        </main>
      </div>
    </OrderContext.Provider>
  );
};
