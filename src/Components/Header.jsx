import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Loading from "./Loading";

export const Header = ({ fetchUsers }) => (
  <>
    <Stack className="header" spacing={2} direction="row">
      <Button
        color="secondary"
        className="button"
        onClick={fetchUsers}
        variant="error"
      >
        <Loading />
      </Button>
    </Stack>
  </>
);
