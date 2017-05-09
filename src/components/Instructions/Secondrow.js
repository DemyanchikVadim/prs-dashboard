import React, { Component } from 'react';
import one from '../../../public/img/secondrow/1.JPG';
import two from '../../../public/img/secondrow/2.JPG';
import three from '../../../public/img/secondrow/3.JPG';
import four from '../../../public/img/secondrow/4.JPG';

class Secondrow extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div><h2><b>Стоянка во втором ряду</b></h2></div>
        <br />
        <span>На фото должно быть видно:</span>
        <div>1: Автомобиль во втором ряду </div>
        <img src={one} alt="one" />
        <br />
        <br />
        <div>2: Отсутствие водителя в автомобиле</div>
        <img src={two} alt="two"/>
        <br />
        <br />
        <div>3:  Адресную табличку или общий план.</div>
        <img src={three} alt="three"/>
        <br />
        <br />
        <div>4: Отсутствие сзади выставленного знака аварийной остановки.</div>
        <img src={four} alt="four"/>
      </div>
    )
  }
}

export default Secondrow;
