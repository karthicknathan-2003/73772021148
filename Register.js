import React from 'react'
import { useState } from 'react';


const Register = () => {
    const [name1, setName] = useState('');
    const [oname, setOname] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [rollno, setRollno] = useState('');

    const [submit, setSubmit] = useState('');
    const [error, setError] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
        setSubmit(false);
    }
    const handleOname = (e) => {
        setOname(e.target.value);
        setSubmit(false);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmit(false);
    }
    const handleCode = (e) => {
        setCode(e.target.value);
        setSubmit(false);
    }
    const handleRollno = (e) => {
        setRollno(e.target.value);
        setSubmit(false);
    }


    const handleSubmit = () => {

        if (name1 === '' || oname === '' || email === '' || code === '' || rollno === '') {
            setError(true);
        } else {
            setSubmit(true);
            setError(false);
        }
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submit ? '' : 'none',
                }}>
                <h1>User {name1} successfully registered!!</h1>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    return (



        < div className="container h-100" >
            <div>
                {successMessage}
                {errorMessage}
            </div>
            <div className="card-body p-md-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1  bg-info">


                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                        <form className="mx-1 mx-md-4 ">

                            <div className="d-flex flex-row align-items-center mb-4">

                                <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Company name</label>
                                    <input type="text" value={name1} className="form-control" name='name1' onChange={handleName} />

                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">

                                <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Owner name</label>
                                    <input type="text" value={oname} className="form-control" name='oname' onChange={handleOname} />

                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">

                                <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Email</label>
                                    <input type="email" value={email} className="form-control" name='email' onChange={handleEmail} />

                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">

                                <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Access code</label>
                                    <input type="text" value={code} className="form-control" name='code' onChange={handleCode} />

                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">

                                <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" >Roll no</label>
                                    <input type="number" value={rollno} className="form-control" name='rollno' onChange={handleRollno} />

                                </div>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg" name='submit'>Register</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Register