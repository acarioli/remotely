import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../css/JobForm.css";
import Swal from 'sweetalert2';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const JobForm = () => {
    
        const URL = 'http://localhost:3001/upload';

        const [inputs, setInputs] = useState({
            // id: "",
            title: "",
            description: "",
        });

        const handleChange = (e) => {
            setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
            });
        };

        const handleClick = async () => {
            await axios.post(URL, inputs)
            setInputs({
            // id: "",
            title: "",
            description: "",
            })

        Swal.fire({
            title: 'Data sent',
            text: 'Thanks to sent your data',
            icon: 'success',
            confirmButtonText: 'Accept'
        })

    };

return (
    <div>
        <div className="container-fluid">
        <div className="container px-6 py-5" id="custom-cards">
            <h2 className="pb-2 border-bottom">Why us</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
                <div
                id="card1"
                className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Proof of quality
                    </h2>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                        <img
                        src="https://i.postimg.cc/9Mk72SJn/Dise-o-sin-t-tulo-9.png"
                        alt="Quality"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                        />
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="col">
                <div
                id="card2"
                className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    No cost until you hire
                    </h2>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                        <img
                        src="https://i.postimg.cc/FKspsMVr/Dise-o-sin-t-tulo-10.png"
                        alt="Cost"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                        />
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="col">
                <div
                id="card3"
                className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Safe and secure
                    </h2>
                    <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                        <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAAAEBATq6uokJCTp6ekYGBjz8/MWFhbt7e3k5OT8/Py1tbXAwMDU1NQbGxtLS0sqKirZ2dnOzs7IyMirq6twcHCVlZWlpaWDg4M1NTXe3t56enqfn59hYWFRUVGNjY07OztERERWVlZiYmIvLy9qamqxsbE3Nzdzc3OPj48QEBCZmZl9fX1ytbm2AAAGWElEQVR4nO2d61riMBBAi8BWQBDlYhFwuXhH3v/1llJQsJNkkmZyYef8rl9zJNOZNE2SJAzDMAzDMAzDMAzDMAzDMAzDMP8n7dfne99toGTYr+1YdX23g4j0bVk78DhKfbfGPulXo3bC7UPdd4vs0p7VSozbvltlj8FT2S9nPfTdMit0bvqwX87ypuO7fVXpzO/EfjmNh6gfOvWJXK9gG21A9l4xfjlPA99tNaH7F+uX07/x3V5dMkX4lbnNInro1Be6egWTSKqA+w8zv5xxz3fr1XTX5n45/bDL8s6bdviVaYQbkK2H6noFYZbl91tbfjkfwY2TBxXDr0xYZfnNi22/nOtQyvLW/JbCb+/40PJttxvbTjZUfnu2U79+vWdSvT1rf2V5p7uk98vxNE5OM5LHC0xj7nycXF9cu/PL2UycjpOn6LGtTZ6cleVDrbGtTfpdBwHZGS19+eW8Z8QBmX46Dr8ymwVhFTCtMLa1yStZFeDb7IeLN7xiQzZkQ++wIRuyoX/YkA3Z0D9syIZs6B82DN7wSnlB5IZZXXVF5IZZkjQVM5JxG47yO7Ub0muiNsyKW7WlsRiz4eh4r6Zsajliw9HPzWQdNV7D0end2uLHTbSGo/PbNS/O8O33/Zp/LsuwJLjrqIIPAeM0BASTZHhBhqBg/YJ+Q/BD9kuKQ1CwJZxRj88QFKyLU350hrCgZHwRmyEsKIrBCA21f8HYDOGHzAWND8HlFU3Fd0kxGYKC4jQRnyEoKEkT0RkaCsZjCMegLE1EZgjHIEIwFkPTLhqNIbjoR57o6Q1trh2BBTFddMeGytDi6h9YENVFd1xTGWIbYCioKNVOuKUyXKruvF3hWgiu81GVaie8UBmq1hhOkvTRWFBZqp3QpzIcqwSTJEX0tGoxmPNEZSjf5WKyvyZVroYCf0EtwdqMyvBTdtfF4aL0Xd46cGkPNk0c+KIyzCQ3nXxfJf8V4RjUzEPgy1UbdDGC8liEBXXTENmuBFPhLRdn14mfqGAXxYwmziFbyt7CCYoVwZZpxmAO2Qq2VDCNMClfCfY7+CFjUClRCYpS/gK4EvpnWBP8S2cIr12bQ5eWOyrYRTVKtR/KfcYagnTxgFEEBXVKtR8yOsOe4JZgBj6PRVjQbLRCuCtIU/QdD9xRXxSNQo7oS1BuJSGsyGDF78vBRZ8GaWLPinK5s3h0ASveSQR1S7VvyOrunBvxfcHwL2IRFjR+Y0C6tZu4bhMpPtauwM0Q6uaLwml3O5HdGVRsrWBBwxjccUcqKMj5B0bqvz9gUskcGRPqJdJA1FCsIkg3dCpI5XfHKVboojuo93FR7PqBGX2jJl+ELIkFk7miAepHuXma2AMmXpu0VS1QKZqWakea1IaJ8rW2XLFaDO5KNnJBZTeVKxqXakfIOymim8qe5xVjcIeL3aIk23OrFCuUagfWDgQVSV+maDaiP8PNhsqYlkCzL9W7aG3jZms61D7IZcVKpdqBhRNBzLMGUKyaJvbQJ8MCwVEHUsXKaSLHyXMmZ4Brz+ksjIUYrAnmdUjQnq6vWqoVkE1ul5FMs4GKVmKQfGR4Bnbb7mKqwsZTtOZg3HQKJuvvyd8E24lBV9n+COqrkpyehVKtgOwjGhhsJO6Shq1vxVzv7+18D1PCSUMY0TQUGe63oVd8IGWbD+eCqveKtvGxObvs+yHrOHh5AbB0J0g8VyHC4cPG12kXhkcC6fPpSRBfnlbk0d85F7IJU4v4PJFF/XrYAmRfk6KwfrxMGYfjXoiUfI/2je+DWJDvbMzxf3AgcSj6KWbOIT3r4tm33R7EVI0pDmYLMWBWkZjR8P2UOYJ7zW+A57OeTiCqwUM67hH/YkqDoI6Ww79AxRPa6bLWFUMTtK4YnqDlWAzzvFXB1mMmhPWQ+cFa0gjuENJvmugJGxkvQZ4keyC1MCJeOz8IUA/5WmEEhIuaLFExa4SYJX4zrRCM7+HU2jI6xj11FsgBwGoMk3+YaR6mYzC7OI7mByzoar7xb8T0AxZ0tM6SXwSeBGHa6PS/dnoSrk16qNdwff8vfSvQVTqu4gvAXwykHzKuQh0naXEvTB2vIb1Nq0Tra1nWe/xy9U2zG3qz85Xus0FkCR5BZ7A96m2Hl6d3YJr1+9nFBB/DMAzDMAzDMAzDMAzDMAzDMIwW/wCi02pxnMetXQAAAABJRU5ErkJggg=="
                        alt="Security"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                        />
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>

        <ThemeProvider theme={theme}>
        <Form className="container mt-2" id="form">
            <Avatar sx={{ m: 2 }} id="avatar" ></Avatar>
            <Typography component="h1" variant="h3"  id="title">
                Upload a job
            </Typography>
            <div className="container-flex d-flex flex-column m-auto align-items-center" id="boxp">
            {Object.keys(inputs).map((key, index) => (
                        <Form.Group className="pt-4" key={index} style={{ maxWidth: "auto" }} id="grp">
                        <Form.Label id="label">
                            {key === "" ? key.toUpperCase() : key[0].toUpperCase() + key.slice(1)}</Form.Label>
                        <Form.Control
                            id="control"
                            name={key}
                            value={inputs[key]}
                            onChange={handleChange}
                        />
                        </Form.Group>
                    ))}
                <Button 
                className="mt-4" 
                onClick={handleClick} 
                id="button"
                >
                Upload
                </Button>
            </div>
        </Form>
        </ThemeProvider>
        </div>
</div>
    );
}

export default JobForm;