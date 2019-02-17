import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorICP';
  elementsArray = [];
  onclick(a) {
    const obj_eq = document.getElementById('equation').innerHTML;
    let obj_num = document.getElementById('number').innerHTML;
    const eq = document.getElementById('number').innerHTML;
    const val = a.target.innerHTML;
    switch (val) {
      case '+': {
        this.equationAdd('+');
        this.clearNumber();
        break;
      }
      case '-': {
        this.equationAdd('-');
        this.clearNumber();
        break;
      }

      case '*': {
        this.equationAdd('*');
        this.clearNumber();
        break;
      }
      case '/': {
        this.equationAdd('/');
        this.clearNumber();
        break;
      }
      case 'C': {
        this.clear();
        break;

      }
      case '=': {
        this.equationAdd('=');
        this.elementsArray.pop();
        this.calculate();
        obj_num = this.elementsArray[0];
        document.getElementById('equation').innerHTML = '';
        document.getElementById('number').innerHTML = this.elementsArray[0];
        this.elementsArray.pop();
        break;
      }
      default: {
        document.getElementById('number').innerHTML = eq + a.target.innerHTML;
        break;
      }
    }
    // document.getElementById('equation').innerHTML = eq + a.target.innerHTML;
  }
  clear() {
    document.getElementById('equation').innerHTML = '';
    document.getElementById('number').innerHTML = '';
    this.elementsArray = [];
  }

  clearNumber() {
    document.getElementById('number').innerHTML = '';
  }

  equationAdd(b) {
    const a = document.getElementById('number').innerHTML;
    console.log(a);
    this.elementsArray.push(a);
    this.elementsArray.push(b);
    document.getElementById('equation').innerHTML = document.getElementById('equation').innerHTML + a + b;
  }

  multiply(a, b) {
    const c = parseInt(this.elementsArray[a]) * parseInt(this.elementsArray[b]);
    this.elementsArray[a] = c.toString();
    this.elementsArray.splice(a + 1, 2);
  }

  divide(a, b) {
    const c = parseInt(this.elementsArray[a]) / parseInt(this.elementsArray[b]);
    this.elementsArray[a] = c.toString();
    this.elementsArray.splice(a + 1, 2);
  }

  add(a, b) {
    const c = parseInt(this.elementsArray[a]) + parseInt(this.elementsArray[b]);
    this.elementsArray[a] = c.toString();
    this.elementsArray.splice(a + 1, 2);
  }

  substract(a, b) {
    const c = parseInt(this.elementsArray[a]) - parseInt(this.elementsArray[b]);
    this.elementsArray[a] = c.toString();
    this.elementsArray.splice(a + 1, 2);
  }


  calculate() {
    console.log(this.elementsArray);
    for (let i = 0; i < this.elementsArray.length; i++) {
      console.log(this.elementsArray[i]);
      if (this.elementsArray[i] === '*') {
        console.log(this.elementsArray[i]);
        this.multiply(i - 1, i + 1);
        i = i - 2;
      } else if (this.elementsArray[i] === '/') {
        this.divide(i - 1, i + 1);
        i = i - 2;
      }
    }
    for (let i = 0; i < this.elementsArray.length; i++) {
      if (this.elementsArray[i] === '+') {
        this.add(i - 1, i + 1);
        i = i - 2;
      } else if (this.elementsArray[i] === '-') {
        this.substract(i - 1, i + 1);
        i = i - 2;
      }
    }
  }

}
