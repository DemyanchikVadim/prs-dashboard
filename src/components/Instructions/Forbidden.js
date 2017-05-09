import React, { Component } from 'react';
import one from '../../../public/img/forbidden/1.JPG';
import two from '../../../public/img/forbidden/2.JPG';
import three from '../../../public/img/forbidden/3.JPG';
import four from '../../../public/img/forbidden/4.JPG';

class Forbidden extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div><h2><b>Под знаком “Остановка запрещена”</b></h2></div>
        <br />
        <span>На фото должно быть видно:</span>
        <div>1: Знак и номер автомобиля.</div>
        <img src={one} alt="one" />
        <br />
        <br />
        <div>2: Общий план с автомобилем и объектом с географической привязкой</div>
        <img src={two} alt="two"/>
        <br />
        <br />
        <div>3: Адресная табличка ближайшего к месту нарушения дома</div>
        <img src={three} alt="three"/>
        <br />
        <br />
        <div>4: Отсутствие водителя в автомобиле.</div>
        <img src={four} alt="four"/>
      </div>
    )
  }
}

export default Forbidden;
