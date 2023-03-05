import React from 'react';

export default function Catalog(props) {
    return (
        <div>
             <table border="1" style={{marginTop: "20px",marginLeft: "50px", width: "600px"}}>
             <thead>
                <tr>
                    <td>Фото</td>
                    <td>Описание</td>
                </tr>
                </thead>
                <tbody>
                {props.items.map((val, i) => {
                    return (
                    <tr key={i}>
                    <td className="t-flex"><span style={{color: "red", fontSize: "1.1em", fontWeight: "bold"}}>{val.new ? "Новинка " : null}</span>
                    {val.sale ? (val.sale + "%") : null}
                    <div className={val.img} style={{width: "150px", height: "150px"}}></div></td>
                    <td><div style={{width: "100%"}}>{val.name}</div>
                    <div style={{width: "100%", fontSize: "1.2em", fontWeight: "bold"}}>
                    <span style={val.sale ? {textDecoration: "line-through", fontSize: "15px", color: "grey"} : null}>{val.price} </span>
                    {val.sale ? Math.round(val.price*100 - val.price*val.sale)/100 : null}</div>
                    <div style={{ textAlign: "left"}}>Количество: {val.InStock}</div>
                    <div style={{width: "100%"}}>{val.description}</div></td>
                </tr>)
                })}
                </tbody>
             </table>
        </div>
    )
}