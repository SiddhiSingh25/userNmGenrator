import React, { useState, useCallback } from "react";
import './Form.css';

function Form() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        bDate: "",
        gender: ""
    });
    const [users, setUsers] = useState([]);

    const fieldChangeFun = (e) => {
        const fieldName = e.target.name;
        const newValue = e.target.value;
        setUser((curr) => ({
            ...curr,
            [fieldName]: newValue
        }));
    };

    const submitChange = (e) => {
        e.preventDefault();
        setUsers((prev) => [...prev, user]);
        setUser({
            firstName: "",
            lastName: "",
            bDate: "",
            gender: ""
        });
        document.querySelector("ul").innerHTML = "";
    };

    const checkGender = (e) => {
        let genderPrefix = "";
        let genderName = "";
        if (e === "male") {
            genderPrefix = "Mr";
            genderName = "TheKing";
        } else if (e === "female") {
            genderPrefix = "Miss";
            genderName = "TheQueen";
        } else if (e === "other") {
            genderPrefix = "Mx";
            genderName = "Monarch";
        }
        return { genderName, genderPrefix };
    };

    const handleClick = useCallback((text) => {
        navigator.clipboard.writeText(text)
            .then(() => alert('Copied to clipboard!'))
            .catch(err => console.error('Failed to copy:', err));
    }, []);

    return (
        <>
            <div className="w-full h-screen  flex items-center flex-col justify-center">
                <div className="container border-2 h-[90vh] bg-slate-50 px-5 py-5 flex-col border-red-border-solid 950 w-[45vw] flex items-center justify-start rounded" >
                <h1 className="text-[6vh] underline mb-5 text-center font-bold text-900">Aesthetic UserName Generator</h1>
                    <form onSubmit={submitChange}>
                        <input type="text"
                            required
                            value={user.firstName}
                            onChange={fieldChangeFun}
                            id="firstName"
                            placeholder="First Name"
                            name="firstName"
                            className="w-96 px-3 py-2.5 rounded-full"
                        />
                        <br />
                        <br />
                        <input type="text"
                            required
                            value={user.lastName}
                            onChange={fieldChangeFun}
                            id="lastName"
                            name="lastName"
                            className="w-96 px-3 py-2.5 rounded-[25px]"
                            placeholder="Last Name"
                        />
                        <br />
                        <br />
                        <input type="text"
                            value={user.bDate}
                            onChange={fieldChangeFun}
                            id="bDate"
                            required
                            name="bDate"
                            placeholder="Birthday date"
                            className="w-96 px-3 py-2.5 rounded-[25px]"
                        />
                        <br />
                        <br />
                        <select
                            value={user.gender}
                            onChange={fieldChangeFun}
                            id="gender"
                            name="gender"
                            required
                            className="w-96 px-3 py-2.5 rounded-[15px]"
                        >
                            <option value="" disabled>
                                Select Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <br />
                        <br />
                        <input type="submit"
                            className="bg-black shadow-none text-white MT-2 px-5 py-1.5 rounded-[8PX]" />
                        <br />
                        <br />
                        <ul>
                            {
                                users.map((item, index) => (
                                    <div key={index} className="w-96 h-48 flex items-start justify-start gap-x-2 gap-y-2 flex-wrap">
                                        <div className="mini" onClick={() => handleClick(0 + item.bDate.charAt(0) + "._" + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase())}>
                                            <li>{0 + item.bDate.charAt(0) + "._" + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase()}</li>
                                        </div>
                                        <div className="mini" onClick={() => handleClick(item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase() + "_" + item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1).toLowerCase() + "00" + item.bDate.charAt(0))}>
                                            <li>{item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase() + "_" + item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1).toLowerCase() + "00" + item.bDate.charAt(0)}</li>
                                        </div>
                                        <div className="mini" onClick={() => handleClick(checkGender(item.gender).genderName + "._" + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase())}>
                                            <li>{checkGender(item.gender).genderName + "._" + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase()}</li>
                                        </div>
                                        <div className="mini" onClick={() => handleClick(checkGender(item.gender).genderName + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase())}>
                                            <li>{checkGender(item.gender).genderName + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase()}</li>
                                        </div>
                                        <div className="mini" onClick={() => handleClick(checkGender(item.gender).genderPrefix + "" + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase())}>
                                            <li>{checkGender(item.gender).genderPrefix + "" + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase()}</li>
                                        </div>
                                        <div className="mini" onClick={() => handleClick(item.firstName.charAt(0) + item.lastName + 0 + item.bDate.charAt(0))}>
                                            <li>{item.firstName.charAt(0) + item.lastName + 0 + item.bDate.charAt(0)}</li>
                                        </div>
                                        <div className="mini" onClick={() => handleClick(checkGender(item.gender).genderPrefix + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase() + "_." + item.bDate.charAt(0))}>
                                            <li>{checkGender(item.gender).genderPrefix + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase() + "_." + item.bDate.charAt(0)}</li>
                                        </div>
                                        <div className="mini" onClick={() => handleClick(item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1).toLowerCase() + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase() + "._" + 0 + item.bDate.charAt(0))}>
                                            <li>{item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1).toLowerCase() + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase() + "._" + 0 + item.bDate.charAt(0)}</li>
                                        </div>
                                        <div className="mini" onClick={() => handleClick(checkGender(item.gender).genderPrefix + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase())}>
                                            <li>{checkGender(item.gender).genderPrefix + item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase()}</li>
                                        </div>
                                        <div className="mini" onClick={() => handleClick(item.firstName.charAt(0).toUpperCase() + 'k' + item.lastName)}>
                                            <li>{item.firstName.charAt(0).toUpperCase() + 'k' + item.lastName}</li>
                                        </div>
                                    </div>
                                ))
                            }
                        </ul>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;
