//How to create a table with react

import './Predicciones.css';

import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import UserData from "./assets/components/UserData.jsx";
const API = "https://jsonplaceholder.typicode.com/users";


const Tables = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        <div Class="Container">
            <table class="Table">
                <thead>
                    <tr>
                        <th>CLUB</th>
                        <th>ÚLTIMOS RESULTADOS</th>
                        <th>POSICION ACTUAL</th>
                        <th>PROBABILIDAD DE CAMPEONAR</th>
                    </tr>
                </thead>
                <tbody>
                    <UserData users={users} />
                </tbody>
            </table>
        </div>

        <div class='Container-3'>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
        </div>
    </>
}

export default Tables;