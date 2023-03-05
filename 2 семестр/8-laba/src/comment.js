import React from "react"
import ".//comments.css"
import Create from "./createCom"
import InputMask from "react-input-mask";

export default class Comments extends React.Component {
    constructor() {
        super();
        this.state = {
          ava: "",
          header: [],
          date: [],
        email:[],
          text: [],
          del:[],
          count: 0,
          prop: "",
        };
        this.handleInput = this.handleInput.bind(this);
       
      }
      handleInput = () => {
        const ava = this.ava.value;
        const val = this.headInput.value;
        const text = this.textar.value;
        const date = this.date.value;
        const email =this.email.value;
        const del = this.del.value;
        this.form.reset();
        if (date === "") {
          this.setState((prevState) => ({
            ava: [...prevState.ava, ava],
            header: [...prevState.header, val],
            text: [...prevState.text, text],
            email: [...prevState.text, email],
            del: [...prevState.text, del],
            count: this.state.count + 1,
            date: [...prevState.date, new Date().toLocaleDateString()],
            prop: "",
          }));
        } else {
          this.setState((prevState) => ({
            ava: [...prevState.ava, ava],
            header: [...prevState.header, val],
            text: [...prevState.text, text],
            email: [...prevState.text, email],
            del: [...prevState.text, del],
            count: this.state.count + 1,
            date: [...prevState.date, date],
            prop: "",
          }));
        }
      };

      SelectHandler = (e) => {
        this.setState({
          prop: e.target.value,
        });
      }
     
     
      render() {
       
        return (
          <div>
          <div className="divs">
          <div className={this.state.prop}></div>
            <form style={{ width: "fit-content" }} ref={(e) => (this.form = e)}>
              <fieldset>
                <legend>{"Комментарий"}</legend>
                <select onChange={e => (this.SelectHandler(e))} ref={e => (this.ava = e)}>
                  <option selected disabled>Выберите Аватар</option>
                  <option value="orange">Апельсин</option>
                  <option value="apple">Яблоко</option>
                  <option value="pear">Груша</option>
                </select>
                <input
                  placeholder="name"
                  type={"text"}
                  name={"header"}
                  ref={(e) => (this.headInput = e)}
                ></input><br/>
                <InputMask
                placeholder="date"
                  type={"text"}
                  name={"date"}
                  ref={(e) => (this.date = e)}
                  mask={"99.99.9999"}
                ></InputMask><br/>
                
                <input placeholder="email" type={"email"} name="email" ref={(e)=>(this.email=e)}></input><br/>
          
                <input placeholder="word to del" type={"text"} name="del" ref={(e)=>(this.del=e)}></input><br/> 
               
                <textarea placeholder="text" name="text " ref={(e) => (this.textar = e)}></textarea><br/>
                <button type={"button"} onClick={this.handleInput}>
                  {"Добавить коментарий"}
                </button>
                
              </fieldset>
            </form>
            </div>
            <div>
              <Create
                ava={this.state.ava}
                header={this.state.header}
                text={this.state.text}
                email={this.state.email}
                del={this.state.del}
                count={this.state.count}
                date={this.state.date}
              >
              </Create>
            </div>
          </div>
        );
      }
    }
    