import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <Paper elevation={3} >
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            style={{ margin: "auto" }}
          >
            &copy; Nedal Al Saleh
          </Typography>
        </Toolbar>
      </Container>
    </Paper>
  );
}
