import React, {useState} from 'react';
import {ArrowLeftIcon, ArrowRightIcon} from '../../assets/icons/icons';
import styles from './Slider.module.scss';
import {Button} from '../Button/Button';

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState('0');
  const slides = [
    {
      className: styles.slider__slider1,
      heading: 'Бесплатная парковка',
      descr:
        'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
      btnModifier: 'button_slide-green',
    },
    {
      className: styles.slider__slider2,
      heading: 'Страховка',
      descr: 'Полная страховка страховка автомобиля',
      btnModifier: 'button_slide-indigo',
    },
    {
      className: styles.slider__slider3,
      heading: 'Бензин',
      descr: 'Полный бак на любой заправке города за наш счёт',
      btnModifier: 'button_slide-crimson',
    },
    {
      className: styles.slider__slider4,
      heading: 'Обслуживание',
      descr: 'Автомобиль проходит еженедельное ТО',
      btnModifier: 'button_slide-purple',
    },
  ];

  const getNextSlide = () => {
    const nextIndex = Number(slideIndex) + 1;
    setSlideIndex(nextIndex === slides.length ? 0 : nextIndex);
  };

  const getPrevSlide = () => {
    const prevIndex = Number(slideIndex) - 1;
    setSlideIndex(prevIndex < 0 ? slides.length - 1 : prevIndex);
  };

  return (
    <div className={styles.slider}>
      <div className={`${styles.slider__item} ${slides[slideIndex].className}`}>
        <h2 className={styles.slider__h2}>{slides[slideIndex].heading}</h2>
        <p className={styles.slider__descr}>{slides[slideIndex].descr}</p>
        <Button
          value="Подробнее"
          btnModifier={slides[slideIndex].btnModifier}
        />
      </div>

      <div className={styles.slider__prevSlideBtn} onClick={getPrevSlide}>
        <ArrowLeftIcon />
      </div>
      <div onClick={getNextSlide} className={styles.slider__nextSlideBtn}>
        <ArrowRightIcon />
      </div>

      {/* <div className={styles.slider__dots}>
  <span className={styles.slider__dotsItem} onclick={currentSlide(1)}></span> 
    <span class={styles.slider__dotsItem} onclick={currentSlide(2)}></span> 
    <span class={styles.slider__dotsItem} onclick={currentSlide(3)}></span> 
    <span class={styles.slider__dotsItem} onclick={currentSlide(4)}></span> 
</div> */}

      {/* <a class="prev" onclick="minusSlide()">&#10094;</a>
    <a class="next" onclick="plusSlide()">&#10095;</a> */}
    </div>
  );
};
