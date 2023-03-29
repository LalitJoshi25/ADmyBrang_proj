import React, { useState } from 'react'

const Dropdown = () => {

    const [lan, setLan] = useState('undefine');
    const [data,setData] = useState([]);
    // const [bool,setBool] = useState('undefine');

    // const handelBool = (event) =>{
    //     setBool(event.target.value)
    // }

    var hideElement = "none";
    var hideE = 'block';
    var argElement = "none";
    var addElement = 'none';

    function changelang(event) {
        setData({lan});
        setLan(event.target.value);
    }

    if (lan === 'cons') {
        hideElement = "block";
        hideE = 'none';
    }
    if (lan === 'arg') {
        // hideElement = "none";
        hideE = 'none';
        argElement = 'block';
    }
    if (lan === 'and') {
        addElement = 'block';
    }

    const reverse = () => {
        hideElement = "none";
        hideE = 'block';
        setLan("undefine");
        // console.log("kam kar rha hai");
    }
    const reverse1 = () => {
        argElement = 'none';
        hideE = 'block';
        setLan("undefine");
    }
    const reverse2 = () => {
        addElement = 'none';
        // hideE = 'block';
        setLan("undefine");
    }
    return (
        <div className='container'>
            <h3>Select Programing option</h3>
            <div>
                <div style={{ display: hideE }}>
                    <select id='sel' value={lan} onChange={changelang}>
                        <option value="undefine">select</option>
                        <option value="cons">constant</option>
                        <option value="arg">argument</option>
                        <option value="and">and</option>
                        <option value="or">or</option>
                    </select>
                    <button>x</button>
                </div>
                <div style={{ display: hideElement }}>
                {/* value={bool} onChange={handelBool} */}
                    <select value={lan} onChange={changelang} id='test' >
                        <option value= "true" >true</option>
                        <option value="false" >false</option>
                    </select>
                    <button onClick={reverse}>x</button>
                </div>
                <div style={{ display: argElement }}>
                    <select id='test1'>
                        <option >true</option>
                        <option >false</option>
                    </select>
                    <button onClick={reverse1}>x</button>
                </div>
                <div style={{ display: addElement }}>
                    <select id='test2'>
                        <option value="undefine">select</option>
                        <option value="cons">constant</option>
                        <option value="arg">argument</option>
                        <option value="and">and</option>
                        <option value="or">or</option>
                    </select>
                    <button onClick={reverse2}>x</button>
                    <br/>
                    <select id='test22'>
                        <option value="undefine">select</option>
                        <option value="cons">constant</option>
                        <option value="arg">argument</option>
                        <option value="and">and</option>
                        <option value="or">or</option>
                    </select>
                    <button onClick={reverse2}>x</button>
                </div>

            </div>
            <h2>Result: {lan}</h2>
        </div>
    )
}

export default Dropdown
