import React from 'react'

const Ffield = () => {

    let count = 1;
    const add = ()=>{
        count ++;
       let html = '<div><input type={Text} name={"Field'+count+'"} placeholder="Enter Text"/>\
        <select>\
            <option>True</option>\
            <option>False</option>\
        </select></div>'
      let form = document.getElementById('form_data');
      form.innerHTML +=html;

    }

  return (
    <div>
      <form id='form_data' action="">
        <input type='text' name={"Field1"} placeholder={"Enter Text"}/>
        <select>
            <option>True</option>
            <option>False</option>
        </select>
      </form>
      <button onClick={add}>Click Me</button>
    </div>
  )
}

export default Ffield
