import './SortTable.css';
import React from 'react';
import Catalog from './Catalog';
import Search from './Search';

var arr = [{'id':1,
              'name': 'Apple',
              'price': '0.9',
              'InStock': '99',
              'img': 'apple',
              'description': 'Яблоко красное',
              'new': true,
              'sale': 10},
              {'id':2,
              'name': 'Orange',
              'price': '4.9',
              'InStock': '20',
              'img': 'orange',
              'description': 'Апельсин Оранжевый',
              'new': false,
              'sale': 0},
              {'id':3,
              'name': 'Pear',
              'price': '99',
              'InStock': '12',
              'img': 'pear',
              'description': 'Груша сочная',
              'new': true,
              'sale': 80},
              {'id':4,
              'name': 'Plum',
              'price': '43',
              'InStock': '1000',
              'img': 'plum',
              'description': 'Слива спелая',
              'new': true,
              'sale': 15},
              // {'id':5,
              // 'name': 'Apple',
              // 'price': '1.9',
              // 'InStock': '32'},
              // {'id':6,
              // 'name': 'Sour Cream',
              // 'price': '2.9',
              // 'InStock': '86'},
              // {'id':7,
              // 'name': 'Yoghurt',
              // 'price': '2.4',
              // 'InStock': '2'}
            ];

class SortTable extends React.Component {
  constructor() {
        super();
        this.state = {sortSale: true,sortName: false, sortPrice: false, sortInStock: false};
        
        this.Sort = this.Sort.bind(this);
    }
  Sort(event) {
      switch (event.target.id) {
          case 'b8': 
            if (this.state.sortSale === true) { 
                arr = arr.reverse();
                this.setState({sortSale: true, sortName: false, sortPrice: false, sortInStock: false});}
                else {
            arr.sort(function f(a, b) {return a.id - b.id;});
            this.setState({sortSale: true, sortName: false, sortPrice: false, sortInStock: false});}
          break;
          case 'b2': 
          if (this.state.sortName === true) {
            arr = arr.reverse();
            this.setState({sortSale: true, sortName: false, sortPrice: false, sortInStock: false});}
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
          this.setState({sortSale: false, sortName: true, sortPrice: false, sortInStock: false});}
          break;
          case 'b3': 
          if (this.state.sortPrice === true) {
            arr = arr.reverse();
            this.setState({sortSale: true, sortName: false, sortPrice: false, sortInStock: false});}
            else {
          arr.sort(function f(a, b) {return a.price - b.price;});
          this.setState({sortSale: false, sortName: false, sortPrice: true, sortInStock: false});}
          break;
          case 'b4': 
          if (this.state.sortInStock === true) {
            arr = arr.reverse();
            this.setState({sortSale: true, sortName: false, sortPrice: false, sortInStock: false});}
            else {
          arr.sort(function f(a, b) {return a.InStock - b.InStock;});
          this.setState({sortSale: false, sortName: false, sortPrice: false, sortInStock: true});}
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
                <td>{elem.description}</td>
                <td><div className={elem.img}></div></td>
                <td>{elem.new ? "true" : "false"}</td>
                <td>{elem.sale}</td>
            </tr>
        )
    })
  return (
    <div>
    <div style={{float: "left"}}>
        <table border="1" style={{marginTop: "20px", width: "600px"}}>
        <thead>
            <tr>
                <td><button id='b1'>ID</button></td>
                <td><button id='b2' onClick={this.Sort}>NAME</button></td>
                <td><button id='b3' onClick={this.Sort}>PRICE</button></td>
                <td><button id='b4' onClick={this.Sort}>IN STOCK</button></td>
                <td><button id='b5'>DESCRIPTION</button></td>
                <td><button id='b6'>IMAGE</button></td>
                <td><button id='b7'>NEW</button></td>
                <td><button id='b8' onClick={this.Sort}>SALE</button></td>
            </tr>
            </thead>
            <tbody>
            {date}
            </tbody>
        </table>
    </div>
    <Search items={arr}/>
    <Catalog items={arr}/>
    </div>
  );
}
}

export default SortTable;
