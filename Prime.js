import React, { useState } from 'react'

function Prime() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        setResult("");
    }
    const isPrime = (num) => {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
            return num > 1;
        }
    }
    const checkNumber = () => {
        if (value === 0) {
            setResult("Error");
        } else {
            const response = isPrime(parseInt(value));
            setResult(response);
        }
    }
    let text = "";
    let classValue = "";

    if (result === "YES") {
        text = `${value} is a prime number`;
        classValue = "success panel";
    } else if (result === "NO") {
        text = `${value} is not a prime number`;
        classValue = "error panel";
    } else if (result === "ERROR") {
        text = `${value} is not a number`;
        classValue = "error panel";
    }
    console.log(`text: ${text}, value:${classValue}`)

    return (
        <div>
            <br />
            <form className='container h-100 justify-content-center'>

                <input type="number" className="form-control w-25" name="number" placeholder='Enter your number' onChange={handleChange} />

                <input type='submit' className="form-control w-25" name='submit' onClick={checkNumber} />
                <div className={ classValue }>{text}</div>

            </form>

            
        </div>
    )
}

export default Prime