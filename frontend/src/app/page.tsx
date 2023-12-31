"use client";

import * as React from "react";
import { Autocomplete, Box, Paper, TextField } from "@mui/material";

const events = [
  { title: "Event 1" },
  { title: "Event 2" },
  { title: "Event 3" },
];

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end",
        height: "100vh",
        width: "100vw",
        bgcolor: "primary.main",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          height: "90vh",
          width: "70vw",
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            height: "90%",
            width: "90%",
          }}
        >
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={events.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} label="Search Event" />
            )}
            sx={{
              width: "90%",
              height: "10%",
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
