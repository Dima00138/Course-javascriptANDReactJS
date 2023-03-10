import React, { useState, useRef } from "react";
import InputMask from "react-input-mask";
import StudentInfoHandler from "./StudentInfoHandler";
import "./StudentInfoHandler.css"

export default function StudentInfo(props) {
  const [info, setStudentInfo] = useState({
    FIO: "Default",
    dateOfBirth: 1,
    universityEntranceDate: 1,
    faculty: "",
    group: 1,
    spec: "",
    email: "",
    telNumber: 1,
    submitState: false,
  });
  const update = (e) => {
    setStudentInfo({ ...info, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentInfo({ ...info, submitState: true });
  };
  const email = useRef(null);
  const isNormalEmail = () => {
    // eslint-disable-next-line
    const re = /^[\w-\.]+@[\w-]+\.(ru|com|by){2,4}$/i;
    const result = re.test(email);
    return result;
  };

  return (
    <div className="StudentInfo">
      <div>
        <form style={{ width: "fit-content" }} onSubmit={handleSubmit}>
          <fieldset>
            <legend>{"Новый Студент"}</legend>
            <label htmlFor="FIO">{"ФИО:"}</label>
            <input type={"text"} id="FIO" onChange={update}></input>
            <label htmlFor="dateOfBirth">{"Дата рождения:"}</label>
            <InputMask mask="99.99.9999" id="dateOfBirth" onChange={update}></InputMask>
            <label htmlFor="universityEntranceDate">{"Год поступления:"}</label>
            <input type={"text"} id="universityEntranceDate" onChange={update}></input>
            <label htmlFor="faculty">{"Факультет:"}</label>
            <input type={"text"} id={"faculty"} onChange={update}></input>
            <label htmlFor="group">{"Группа:"}</label>
            <input type={"text"} id={"group"} onChange={update}></input>
            <label htmlFor="spec">{"Специальность"}</label>
            <input type={"text"} id={"spec"} onChange={update}></input>
            <label htmlFor="email">{"Email:"}</label>
            <input type={"email"} id="email" onChange={update} onInput={isNormalEmail} ref={email}></input>
            <label htmlFor="telNumber">{"Номер телефона:"}</label>
            <InputMask mask="999(99)999-99-99" id="telNumber" onChange={update}></InputMask>
            <input type={"Submit"} value={"Submit"} onClick={handleSubmit}></input>
          </fieldset>
        </form>
      </div>
      <div>
        {info.submitState === true ? (
          <StudentInfoHandler
            FIO={info.FIO}
            dateOfBirth={info.dateOfBirth}
            universityEntranceDate={info.universityEntranceDate}
            faculty={info.faculty}
            group={info.group}
            spec={info.spec}
            email={info.email}
            telNumber={info.telNumber}
          />
        ) : null}
      </div>
      </div>
  );
}
