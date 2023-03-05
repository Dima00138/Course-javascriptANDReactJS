import './PhoneInput.css';
import React from 'react';

var operators = {'by': ['МТС', 'А1', 'life:)'],
                 'ru': ['Билайн', 'Мегафон', 'МТС', 'Tele2'],
                 'uk': ['Lifecell', 'Vodafone', 'КийвСтар'],
                 'po': ['Orange', 'Play', 'Plus', 'T-mobile'],
                 'lt': ['Telia', 'Bite', 'Tele2'],
                 'lv': ['LMT', 'Tele2', 'Bite'] };

var code = {'by': '+375 (XX) XXX-XX-XX',
            'ru': '+7 (XXX) XXX-XX-XX',
            'uk': '+380 (XX) XXX-XX-XX',
            'po': '+48 XXX-XXX-XXX',
            'lt': '+370 (XX) XXX-XX-XX',
            'lv': '+371 XXXX-XXXX'};
var buff = [];
var buf = code['by'];


class PhoneInput extends React.Component {
  constructor() {
        super();    
        this.state = {'country':'by', opers: ""};

        this.handleChange = this.handleChange.bind(this);
        this.Change = this.Change.bind(this);
        this.ResetF = this.ResetF.bind(this);
  }
    handleClick() {
          let ftel = document.getElementsByClassName('ftel');
          (ftel[0].style.display === 'block')? ftel[0].style.display = 'none': ftel[0].style.display = 'block';
    }
    handleChange(event) {
      this.handleClick();
      let country = event.target.getAttribute('country');
      buff = operators[country].map((i) => <label htmlFor={country}><input type='radio' name={country}/>{i}</label>);
      document.getElementById('r1').value = code[country];
      buf = code[country];
      this.setState({country : country});
    }
    Change(event) {
      buff = [];
      let val = document.getElementById('r1').value;
      // for (let i in code) {
      // if (val == parseInt(code[i])) {
      //   buff = operators[i].map((f) => <label htmlFor={i}><input type='radio' name={i}/>{f}</label>);
      //     this.setState({country: i});
      // }
      // }
      let pos = val.search('X');
      document.getElementById('r1').selectionStart = document.getElementById('r1').selectionEnd = pos;
      let char = val.charAt(pos-1);
      if (Number.isInteger(parseInt(char))) {
        buf = buf.replace("X", char);
      }
      document.getElementById('r1').value = buf;
      pos = val.search('X');
      document.getElementById('r1').selectionStart = document.getElementById('r1').selectionEnd = pos;
    }

    ResetF() {
      buf = code[this.state.country];
    }

  render() {
  return (
    <div className='Phone'>
    <select className={this.state.country} onClick={this.handleClick}>
      </select>
      <input type="tel" id='r1' onChange={this.Change}  />
      
      <div className='ftel'>
      <button onClick={this.handleChange} country='by'>Беларусь<span>+375<img src="by.png" alt='Флаг'/></span></button>
      <button onClick={this.handleChange} country='ru'>Россия<span>+7<img src="ru.png" alt='Флаг'/></span></button>
      <button onClick={this.handleChange} country='uk'>Украина<span>+380<img src="uk.png" alt='Флаг'/></span></button>
      <button onClick={this.handleChange} country='po'>Польша<span>+48<img src="po.png" alt='Флаг'/></span></button>
      <button onClick={this.handleChange} country='lt'>Литва<span>+370<img src="lt.png" alt='Флаг'/></span></button>
      <button onClick={this.handleChange} country='lv'>Латвия<span>+371<img src="lv.png" alt='Флаг'/></span></button>
      </div>
      {buff}
    </div>
  );
}
}

export default PhoneInput;
