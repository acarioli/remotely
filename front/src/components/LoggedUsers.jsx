import { Table, Button } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../css/LoggedUsers.css";

const LoggedUsers = () => {
  const [users, setUsers] = useState([]);

  const URL = "http://localhost:3001/register/";

  const getUsers = async () => {
    try {
      const { data } = await axios.get(URL);
      setUsers(data.user);
      console.log(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers()
  }, [])


  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure you want to delete this user?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Exit`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.delete(`${URL}${id}`);
        Swal.fire("Deleted", "", "success");
        getUsers();
      } else if (result.isDenied) {
        Swal.fire("This user has not been deleted");
      }
    });
  };

  return (
    <div className="container">
      <h2 className="m-4">Users</h2>
      <Table className="container m-2 table striped bordered hover">
        <thead className="container text-left m-5">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr className="body">
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td className="text-center">
                <Button
                  variant="danger"
                  onClick={() => handleDelete(user._id)}
                  className="m-1"
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default LoggedUsers;