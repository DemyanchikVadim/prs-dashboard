import React, { Component } from 'react';
import one from '../../../public/img/perexod/1.JPG';
import two from '../../../public/img/perexod/2.JPG';
import three from '../../../public/img/perexod/3.JPG';
import four from '../../../public/img/perexod/4.JPG';

class Crosswalk extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div><h2><b>Стоянка на переходе</b></h2></div>
        <br />
        <span>На фото должно быть видно:</span>
        <div>1: Разметку и номер авто. </div>
        <img src={one} alt="one" />
        <br />
        <br />
        <div>2: Знак, таблички на здании, автомобиль.</div>
        <img src={two} alt="two"/>
        <br />
        <br />
        <div>3: Адресная табличка ближайшего к месту нарушения дома.</div>
        <img src={three} alt="three"/>
        <br />
        <br />
        <div>4: Отсутствие водителя в автомобиле.</div>
        <img src={four} alt="four"/>
      </div>
    )
  }
}

export default Crosswalk;
