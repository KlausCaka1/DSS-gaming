
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Typography,
    Box
} from "@mui/material";
import {Link} from "react-router-dom";
import tickets from "./tickets.json";

const ticketsTable = tickets

const getStatusColor = (status) => {
    switch (status) {
        case "Open":
            return "warning";
        case "In Progress":
            return "info";
        case "Completed":
            return "success";
        default:
            return "default";
    }
};

export default function Tickets() {
    return (
        <div>
            <div className={'back-button'}>
                <Link to={'/'}>
                    <span>Go Home</span>
                </Link>
            </div>
            <br/>
            <Box sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                    🎮 Game Development Tickets
                </Typography>

                <TableContainer component={Paper} elevation={3}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Ticket ID</strong></TableCell>
                                <TableCell><strong>Title</strong></TableCell>
                                <TableCell><strong>Priority</strong></TableCell>
                                <TableCell><strong>Status</strong></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {ticketsTable.map((ticket) => (
                                <TableRow key={ticket.id} hover>
                                    <TableCell>{ticket.id}</TableCell>
                                    <TableCell>{ticket.title}</TableCell>
                                    <TableCell>{ticket.priority}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={ticket.status}
                                            color={getStatusColor(ticket.status)}
                                            variant="filled"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
}