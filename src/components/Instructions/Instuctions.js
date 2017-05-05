import React, { Component } from 'react';
import one from '../../../public/img/1.png';
import two from '../../../public/img/2.png';
import three from '../../../public/img/3.png';
import four from '../../../public/img/4.png';

class Instuctions extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div><h2><b>Стоянка на тратуаре</b></h2></div>
        <br />
        <span>На фото должно быть видно:</span>
        <div>1: Cамо нарушение и номер авто</div>
        <img src={one} alt="one" />
        <br />
        <div>2: Общий план с автомобилем и объектом с географической привязкой</div>
        <img src={two} alt="two"/>
        <br />
        <div>3: Адрес нарушения.</div>
        <img src={three} alt="three"/>
        <br />
        <div>4: Отсутствие водителя в автомобиле.</div>
        <img src={four} alt="four"/>
      </div>
    )
  }
}

export default Instuctions;
