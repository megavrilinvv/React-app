import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../style.css";

export const UsersName = ({ users, takePosts, style }) => (
  <Box sx={{ width: "100%" }}>
    <Grid
      className="names"
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {users.map((user, index) => (
        <Grid key={user.id} item xs={3}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button onClick={() => takePosts(user.id)}>
              <ListItemText primary={user.name} />
            </ListItem>
            <Divider />
          </List>
        </Grid>
      ))}
    </Grid>
  </Box>
);
