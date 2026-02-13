import React, { useState } from "react";
import story from "./story.json";

import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Chip,
    Divider,
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemText
} from "@mui/material";


const getStatusColor = (status) => {
    switch (status) {
        case "Completed":
            return "success";
        case "In Development":
        case "In Progress":
            return "warning";
        case "Planned":
            return "default";
        default:
            return "info";
    }
};

function ActCard({ act }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card sx={{ backgroundColor: "#1e1e1e", color: "white" }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">
                        Act {act.actNumber}: {act.title}
                    </Typography>
                    <IconButton
                        onClick={() => setExpanded(!expanded)}
                        sx={{ color: "white" }}
                    >
                    </IconButton>
                </Box>

                <Chip
                    label={act.status}
                    color={getStatusColor(act.status)}
                    sx={{ mt: 1 }}
                />

                <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">
                        Progress: {act.progress}%
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        value={act.progress}
                        sx={{ height: 8, borderRadius: 5, mt: 1 }}
                    />
                </Box>

                <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                        Overview:
                    </Typography>
                    <Typography variant="body2">{act.overview}</Typography>

                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                        Gameplay Style:
                    </Typography>
                    <Typography variant="body2">{act.gameplayStyle}</Typography>

                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                        Objectives:
                    </Typography>
                    <List dense>
                        {act.objectives.map((obj, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={`• ${obj}`} />
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                        Milestones:
                    </Typography>
                    <List dense>
                        {act.milestones.map((ms, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={`• ${ms}`} />
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                        Branching Choices:
                    </Typography>
                    <List dense>
                        {act.branchingChoices.map((choice, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={`• ${choice}`} />
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                        Cutscenes Completed: {act.cutscenesCompleted}
                    </Typography>

                    <Typography variant="subtitle2">
                        Estimated Time: {act.estimatedTimeHours} hours
                    </Typography>
                </Collapse>
            </CardContent>
        </Card>
    );
}

function StoryDashboard() {
    return (
        <Box sx={{ p: 4, backgroundColor: "#121212", minHeight: "100vh", color: "white" }}>

            {/* Title */}
            <Typography variant="h4" gutterBottom>
                📖 Story Development Dashboard
            </Typography>

            {/* Story Overview Card */}
            <Card sx={{ mb: 4, backgroundColor: "#1e1e1e", color: "white" }}>
                <CardContent>
                    <Typography variant="h5">{story.title}</Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        {story.description}
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                        <Typography variant="subtitle1">
                            Overall Story Progress: {story.overallProgress}%
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={story.overallProgress}
                            sx={{ height: 10, borderRadius: 5, mt: 1 }}
                        />
                    </Box>

                    {story.storyNotes && story.storyNotes.length > 0 && (
                        <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle1">📝 Story Notes</Typography>
                            <List dense>
                                {story.storyNotes.map((note, idx) => (
                                    <ListItem key={idx}>
                                        <ListItemText primary={`• ${note}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    )}
                </CardContent>
            </Card>

            {/* Acts Section */}
            <Typography variant="h5" gutterBottom>
                🎬 Acts Progress
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                {story.acts.map((act) => (
                    <Grid item xs={12} md={6} key={act.actNumber}>
                        <ActCard act={act} />
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ backgroundColor: "#333", mb: 3 }} />

            {/* Character Arcs */}
            <Typography variant="h5" gutterBottom>
                🧙 Character Story Arcs
            </Typography>

            <Grid container spacing={2}>
                {story.characterRoles.map((character, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ backgroundColor: "#1e1e1e", color: "white" }}>
                            <CardContent>
                                <Typography variant="h6">{character.name}</Typography>

                                <Chip
                                    label={character.arcStatus}
                                    color={getStatusColor(character.arcStatus)}
                                    sx={{ mt: 1 }}
                                />

                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Main Acts: {character.mainActs.join(", ")}
                                </Typography>

                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Story Role: {character.storyRole}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default StoryDashboard;
