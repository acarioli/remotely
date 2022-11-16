import { Table, Button } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../css/Subscriptions.css";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  const URL = "http://localhost:3001/subscribe/";

  const getSubscriptions = async () => {
    try {
      const { data } = await axios.get(URL);
      setSubscriptions(data.user);
      console.log(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSubscriptions()
  }, [])


  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure you want to delete this subscriptor?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Exit`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.delete(`${URL}${id}`);
        Swal.fire("Deleted", "", "success");
        getSubscriptions();
      } else if (result.isDenied) {
        Swal.fire("This subscriptor has not been deleted");
      }
    });
  };

  return (
    <div className="container">
      <h2 className="m-4">Subscriptors</h2>
      <Table className="container m-2 table striped bordered hover">
        <thead className="container text-left m-5">
          <tr>
            <th>Email</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        {subscriptions.map((subscription) => (
          <tbody>
            <tr className="body">
              <td>{subscription.email}</td>
              <td className="text-center">
                <Button
                  variant="danger"
                  onClick={() => handleDelete(subscription._id)}
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

export default Subscriptions;