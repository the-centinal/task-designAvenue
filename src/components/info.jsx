import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';

function Info() {
    const [data, setData] = useState([{
        _id: "",
        fullname: "",
        phone: "",
        email: "",
        address: "",
        highestQualification: "",

    }])
    useEffect(() => {
        fetch("/users").then(res => {
            if (res.ok) {
                return res.json()

            }
        }).then(jsonRes => setData(jsonRes));
    })

    return (
        <Table striped bordered hover>
            <thead>
                
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>country</th>
                        <th>Highest Qualification</th>
                    </tr>
            </thead>
            {data.map(user =>
            <tbody>
                <tr>
                    <td>{user._id}</td>
                    <td>{user.fullname}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.highestQualification}</td>
                </tr>

            </tbody>
            )}
        </Table>
    );
}

export default Info;