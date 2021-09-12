import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./ListUsers.css";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://4000-aqua-chicken-iicfq4gb.ws-us15.gitpod.io/user/getUsers")
      .then((res) => {
        setUsers(res.data.users);
        setError("");
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.status === 402) setError(error.response.error);
        else setError("Something went wrong...😢");
        setUsers([]);
      });
  }, [error, users]);

  return (
    <Container>
      <h1 className="heading">Show All Users</h1>

      <Table responsive="lg" striped bordered hover>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.country}</td>
              <td>{u.state}</td>
              <td>{u.city}</td>
              <td>{u.area}</td>
              <td>
                <input type="button" value="Edit" />
              </td>
              <td>
                <input type="button" value="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListUsers;
