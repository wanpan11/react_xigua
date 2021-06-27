import React, { useState, useEffect } from 'react'
import Test from './test'

function Entry(props) {

    const [name, setName] = useState('wanpan');

    useEffect(() => {
        debugger
        console.log(name);
    })

    const setNameFun = (name) => {
        debugger
        setName(name)
    }

    return (
        <div>
            <Test
                name={name}
                setNameFun={setNameFun}
            ></Test>
        </div>
    )
}

export default Entry