import React, { Component } from 'react';
import one from '../../../public/img/invalid/1.JPG';
import two from '../../../public/img/invalid/2.JPG';
import three from '../../../public/img/invalid/3.JPG';
import four from '../../../public/img/invalid/4.JPG';

class Invalid extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div><h2><b>На местах для инвалидов</b></h2></div>
        <br />
        <span>На фото должно быть видно:</span>
        <div>1: Знак и номер автомобиля. </div>
        <img src={one} alt="one" />
        <br />
        <br />
        <div>2: Общий план с автомобилем и объектом с географической привязкой</div>
        <img src={two} alt="two"/>
        <br />
        <br />
        <div>3:  Или адресную табличку ближайшего к месту нарушения дома</div>
        <img src={three} alt="three"/>
        <br />
        <br />
        <div>4: Отсутствие водителя в автомобиле.</div>
        <img src={four} alt="four"/>
      </div>
    )
  }
}

export default Invalid;
