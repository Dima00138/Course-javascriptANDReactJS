import React from "react";

export default class Create extends React.Component
{
 
  changeValue(e1, e2) {
    let str = prompt();
    e2.innerText = str;
    e1.innerText = "Date:" + new Date().toLocaleDateString();
  }

  deleteComment(e) {
    let str = prompt();
    str === e.name ? e.parentNode.remove() : console.log();
  }

render()
{
  var ava = this.props.ava;
  var header = this.props.header;
  let text = this.props.text;
  let email = this.props.email;
  let del = this.props.del;
  let date = this.props.date;
  var count = this.props.count;
  return(
    <div>
       
       {header.map((val, index) => (
        <p key={index}>
          <div className="ava"><div className={ava[index]}></div></div>
          <span>{"Header:" + val}</span>
          <br></br>
          <span>{"Date:" + date[index]}</span>
          <br></br>
          <span>{"email:"+email[index]}</span>
          <br></br>
          <span>{text[index]}</span>
          <br></br>
          <button type="button" name={del[count-1]} onClick={e => {this.deleteComment(e.target)}}>del</button>
          <br></br>
        <button type="button" onClick={e => this.changeValue(e.target.parentNode.children[2], e.target.parentNode.children[6])} >edit</button>
        </p>
      ))}
  
    </div>
  )
}
}
