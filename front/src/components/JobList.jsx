import "../css/JobList.css";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const URL = "http://localhost:3001/";

  const getJobs = async () => {
    try {
      const { data } = await axios.get(URL);
      setJobs(data.job);
      console.log(data.job);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJobs()
  }, [])


  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure you want to delete this job?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Exit`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.delete(`${URL}${id}`);
        Swal.fire("Deleted", "", "success");
        getJobs();
      } else if (result.isDenied) {
        Swal.fire("This job has not been deleted");
      }
    });
  };

  return (
    <div className="container">
      <h2 className="m-4">Jobs</h2>
      <Table className="container m-2 table striped bordered hover">
        <thead className="container text-center m-5">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        {jobs.map((job) => (
          <tbody>
            <tr className="body">
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td className="text-center">
                <Button
                  variant="danger"
                  onClick={() => handleDelete(job._id)}
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

export default JobList;
