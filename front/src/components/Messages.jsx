import { Table, Button } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../css/Messages.css";


const Messages = () => {

  const [contacts, setContacts] = useState([]);

  const URL = "http://localhost:3001/contactus/";

  const getContacts = async () => {
    try {
      const { data } = await axios.get(URL);
      setContacts(data.user);
      console.log(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContacts()
  }, [])


  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure you want to delete this message?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Exit`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.delete(`${URL}${id}`);
        Swal.fire("Deleted", "", "success");
        getContacts();
      } else if (result.isDenied) {
        Swal.fire("This message has not been deleted");
      }
    });
  };


  return (
    <div className="container w-100">
      <h2 className="m-4">Messages</h2>
    <Table className="container m-2 table bordered hover">
     <thead className="container text-left m-5">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Message</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        {contacts.map((contact) => (
          <tbody>
            <tr id="body">
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td className="text-center">
                <Button
                  variant="danger"
                  onClick={() => handleDelete(contact._id)}
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

export default Messages;