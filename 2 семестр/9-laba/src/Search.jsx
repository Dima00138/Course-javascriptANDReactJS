import react, {useState} from 'react';
import Catalog from './Catalog';

var arr = [{}];

export default function Search(props) {
    const [up, SetUp] = useState(0);
    const [selected, SetSelected] = useState({search: "name"});
    const SearchHandler = e => {
        arr = [];
        props.items.map((val, i) => {
            if (props.items[i][selected.search].includes(e.target.value) && e.target.value != "") {
                arr = [{
                "id": props.items[i].id,
                "name": props.items[i].name,
                "price": props.items[i].price,
                "InStock": props.items[i].InStock,
                "img": props.items[i].img,
                "description": props.items[i].description,
                "new": props.items[i].new,
                "sale": props.items[i].sale
                }]}console.log(arr);
            SetUp(up+1);})
    }
    const SelectHandler = e => {
        SetSelected({search: e.target.value});
    }
    return (
        <div className="search">
            <form>
            <select onChange={e => (SelectHandler(e))}>
                <option value="name">Поиск по имени</option>
                <option value="price">Поиск по цене</option>
                <option value="InStock">Поиск по количеству</option>
            </select>
            <input className="search" type="text" onChange={e => (SearchHandler(e))}/>
            <input type="button" value="Search"/>
            <br/>
            <div>
            {arr !== [] ? (<Catalog items={arr}/>) : null}
            </div>
            </form>
        </div>
    )
}