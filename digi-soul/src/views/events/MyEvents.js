import { Button, Container, Grid } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MyEventCard from "../../components/MyEventCard";
// import eventsData from "../../data/events.json";
import { eventsApi } from "./services/events-api";

function MyEvents() {
  const [eventsData, setEventsData] = React.useState([]);

  React.useEffect(() => {
    eventsApi
      .getAllEvents()
      .then((res) => {
        setEventsData(() => res?.data?.events || []);
      })
      .catch((err) => {
        console.log("While fetching events-->", err);
      });
  }, []);

  function deleteEvent(id) {
    eventsApi
      .removeEvent(id)
      .then((res) => {
        console.log("Event Delete-->", res);
        setEventsData((prevEventData) => {
          return prevEventData.filter((event) => {
            return event._id !== id;
          });
        });
      })
      .catch((err) => {
        console.log("While deleting event-->", err);
      });
  }

  return (
    <Container sx={{ marginTop: "25px" }}>
      <Container maxWidth="l">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          href="/events/create"
        >
          Create
        </Button>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="l">
        <Grid container spacing={8}>
          {eventsData.map((event) => (
            <Grid item key={event.eventId} xs={12} sm={6} md={4}>
              <MyEventCard
                key={event._id}
                id={event._id}
                name={event.name}
                imageURL={event.imageURL}
                brief={event.brief}
                deleteEvent={deleteEvent}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default MyEvents;
