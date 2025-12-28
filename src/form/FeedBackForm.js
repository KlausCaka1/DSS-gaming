import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
} from "@mui/material";
import './Feedback.scss'
import {Link} from "react-router-dom";

function FeedBackForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
        category: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted! Check console for data.");
        setFormData({ name: "", email: "", feedback: "", category: "" });
    };

    return (
        <div className={'container'}>
            <div>
                <Link to={'/'}>
                    <span>Go Home</span>
                </Link>
            </div>
            <Box
                sx={{
                    maxWidth: 500,
                    margin: "50px auto",
                    padding: 4,
                    border: "1px solid #ccc",
                    borderRadius: 2,
                    boxShadow: 2,
                    background: 'white'
                }}
            >
                <Typography variant="h4" mb={3}>
                    Feedback Form
                </Typography>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />

                    {/* Email */}
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />

                    {/* Category (Dropdown) */}
                    <FormControl fullWidth margin="normal" required>
                        <InputLabel>Category</InputLabel>
                        <Select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <MenuItem value="general">General</MenuItem>
                            <MenuItem value="bug">Bug Report</MenuItem>
                            <MenuItem value="feature">Feature Request</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Feedback */}
                    <TextField
                        fullWidth
                        label="Feedback"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        margin="normal"
                        multiline
                        rows={4}
                        required
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </div>

    );
}

export default FeedBackForm;
