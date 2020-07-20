import React, {useState} from 'react';
import {ArrowLeftIcon, ArrowRightIcon} from '../../assets/icons/icons';
import styles from './Slider.module.scss';
import {Button} from '../Button/Button';

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState('0');

  const slides = [
    {
      className: styles.slider__slider0,
      heading: 'Бесплатная парковка',
      descr:
        'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
      btnModifier: 'button_slide-green',
    },
    {
      className: styles.slider__slider1,
      heading: 'Страховка',
      descr: 'Полная страховка страховка автомобиля',
      btnModifier: 'button_slide-indigo',
    },
    {
      className: styles.slider__slider2,
      heading: 'Бензин',
      descr: 'Полный бак на любой заправке города за наш счёт',
      btnModifier: 'button_slide-crimson',
    },
    {
      className: styles.slider__slider3,
      heading: 'Обслуживание',
      descr: 'Автомобиль проходит еженедельное ТО',
      btnModifier: 'button_slide-purple',
    },
  ];

  const getNextSlide = () => {
    const nextIndex = Number(slideIndex) + 1;
    setSlideIndex(nextIndex >= slides.length ? 0 : nextIndex);
  };

  const getPrevSlide = () => {
    const prevIndex = Number(slideIndex) - 1;
    setSlideIndex(prevIndex < 0 ? slides.length - 1 : prevIndex);
  };

  const handleDotClick = ({target}) => {
    setSlideIndex(target.getAttribute('dotindex'));
    target.className = `${styles.slider__dotsItem} ${styles.slider__dotsItem_active}`;
  };

  // const autoScrolling = (time) => {
  //   setInterval(getNextSlide, time);
  // };

  // autoScrolling(3000);

  return (
    <div className={styles.slider}>
      <div
        className={styles.slider__container}
        style={{left: -100 * slideIndex + '%'}}
      >
        {slides.map((slide, index) => (
          <div
            key={String(index)}
            className={`${styles.slider__item} ${slide.className}`}
          >
            <h2 className={styles.slider__h2}>{slide.heading}</h2>
            <p className={styles.slider__descr}>{slide.descr}</p>
            <Button value="Подробнее" btnModifier={slide.btnModifier} />
          </div>
        ))}
      </div>

      <div className={styles.slider__prevSlideBtn} onClick={getPrevSlide}>
        <ArrowLeftIcon />
      </div>
      <div onClick={getNextSlide} className={styles.slider__nextSlideBtn}>
        <ArrowRightIcon />
      </div>

      <div className={styles.slider__dots}>
        {slides.map((dot, i) => {
          const classList =
            i === Number(slideIndex)
              ? `${styles.slider__dotsItem} ${styles.slider__dotsItem_active}`
              : `${styles.slider__dotsItem}`;
          return (
            <div
              dotindex={i}
              key={String(i)}
              onClick={handleDotClick}
              className={classList}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
