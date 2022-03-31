import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

export const PostComments = ({ postComments }) =>
  postComments.map((comments, index) => (
    <div className="joo" key={comments.id}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="info">{comments.email}</Alert>
        <Alert sx={{ mt: 0 }} severity="success">
          {comments.body}
        </Alert>
      </Stack>
    </div>
  ));

// export const PostComments = ({ postComments }) =>
// postComments.map((comments, index) => (
//   <div key={index}>
//     <Stack sx={{ width: "100%" }} spacing={2}>
//       <Alert severity="info">{comments.email}</Alert>
//       <Alert severity="success">{comments.body}</Alert>
//     </Stack>
//   </div>
// ));
