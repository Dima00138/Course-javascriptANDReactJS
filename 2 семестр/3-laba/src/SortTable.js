//import './SortTable.css';
import React from 'react';

var arr = [{'id':1,
              'name': 'Butter',
              'price': '0.9',
              'InStock': '99'},
              {'id':2,
              'name': 'Cheese',
              'price': '4.9',
              'InStock': '20'},
              {'id':3,
              'name': 'Fancy French Cheese',
              'price': '99',
              'InStock': '12'},
              {'id':4,
              'name': 'Heavy Cream',
              'price': '3.9',
              'InStock': '0'},
              {'id':5,
              'name': 'Apple',
              'price': '1.9',
              'InStock': '32'},
              {'id':6,
              'name': 'Sour Cream',
              'price': '2.9',
              'InStock': '86'},
              {'id':7,
              'name': 'Yoghurt',
              'price': '2.4',
              'InStock': '2'}];

class SortTable extends React.Component {
  constructor() {
        super();
        this.state = {sortId: true,sortName: false, sortPrice: false, sortInStock: false};
        
        this.Sort = this.Sort.bind(this);
    }
  Sort(event) {
      switch (event.target.id) {
          case 'b1': 
            if (this.state.sortId === true) { 
                arr = arr.reverse();
                this.setState({sortId: true, sortName: false, sortPrice: false, sortInStock: false});}
                else {
            arr.sort(function f(a, b) {return a.id - b.id;});
            this.setState({sortId: true, sortName: false, sortPrice: false, sortInStock: false});}
          break;
          case 'b2': 
          if (this.state.sortName === true) {
            arr = arr.reverse();
            this.setState({sortId: true, sortName: false, sortPrice: false, sortInStock: false});}
            else {
          arr.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
          this.setState({sortId: false, sortName: true, sortPrice: false, sortInStock: false});}
          break;
          case 'b3': 
          if (this.state.sortPrice === true) {
            arr = arr.reverse();
            this.setState({sortId: true, sortName: false, sortPrice: false, sortInStock: false});}
            else {
          arr.sort(function f(a, b) {return a.price - b.price;});
          this.setState({sortId: false, sortName: false, sortPrice: true, sortInStock: false});}
          break;
          case 'b4': 
          if (this.state.sortInStock === true) {
            arr = arr.reverse();
            this.setState({sortId: true, sortName: false, sortPrice: false, sortInStock: false});}
            else {
          arr.sort(function f(a, b) {return a.InStock - b.InStock;});
          this.setState({sortId: false, sortName: false, sortPrice: false, sortInStock: true});}
          break;
          default: break;
      }
  }
  render() {
    const date = arr.map((elem) => {
      var color = "";
      if (parseInt(elem.InStock) < 3) {
        color = "yellow";
      }
      if (parseInt(elem.InStock) == 0) {
        color = "red";
      }
        return (
            <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.price}</td>
                <td style={{backgroundColor: color}}>{elem.InStock}</td>
            </tr>
        )
    })
  return (
    <div className="App">
        <table border="1" style={{marginTop: "20px", width: "600px"}}>
        <thead>
            <tr>
                <td><button id='b1' onClick={this.Sort}>ID</button></td>
                <td><button id='b2' onClick={this.Sort}>NAME</button></td>
                <td><button id='b3' onClick={this.Sort}>PRICE</button></td>
                <td><button id='b4' onClick={this.Sort}>IN STOCK</button></td>
            </tr>
            </thead>
            <tbody>
            {date}
            </tbody>
        </table>
    </div>
  );
}
}

export default SortTable;
