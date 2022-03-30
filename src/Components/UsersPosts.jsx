import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../style.css";
import Divider from "@mui/material/Divider";

export const UsersPosts = ({ posts, takeComments }) => (
  <Box sx={{ width: "100%" }}>
    <Grid
      className="fuw"
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {posts.map((post, index) => (
        <Grid key={post.id} item xs={3}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <Box sx={{ my: 3, mx: 2 }}>
              <div>
                <Grid>
                  <Grid item xs>
                    <Typography gutterBottom variant="h4" component="div">
                      {post.title}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography color="text.secondary" variant="body2">
                  {post.body}
                </Typography>
              </div>
            </Box>
            <Divider variant="middle" />
            <Box className="tipo" sx={{ mt: 3, ml: 1, mb: 1 }}>
              <Button onClick={() => takeComments(post.id)}>Comments</Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

// export const UsersPosts = ({ posts, takeComments }) => (
//   <Box sx={{ width: "100%" }}>
//     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//       {posts.map((post, index) => (
//         <Grid item xs={3}>
//           <Card className="popos">
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {post.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {post.body}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button onClick={() => takeComments(post.id)} size="small">
//                 comments
//               </Button>
//             </CardActions>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   </Box>
// );

// export const UsersPosts = ({ posts, takeComments }) => (
//   <Box sx={{ width: "100%" }}>
//     <Grid
//       className="fuw"
//       container
//       rowSpacing={1}
//       columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//     >
//       {posts.map((post, index) => (
//         <Grid item xs={3}>
//           <Box
//             sx={{
//               width: "100%",
//               maxWidth: 360,
//               bgcolor: "background.paper",
//             }}
//           >
//             <Box sx={{ my: 3, mx: 2 }}>
//               <Grid>
//                 <Grid item xs>
//                   <Typography gutterBottom variant="h4" component="div">
//                     {post.title}
//                   </Typography>
//                 </Grid>
//               </Grid>
//               <Typography color="text.secondary" variant="body2">
//                 {post.body}
//               </Typography>
//             </Box>
//             <Divider variant="middle" />
//             <Box className="tipo" sx={{ mt: 3, ml: 1, mb: 1 }}>
//               <Button onClick={() => takeComments(post.id)}>Comments</Button>
//             </Box>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   </Box>
// );

// export const UsersPosts = ({ posts, takeComments }) => (
//   <Box sx={{ width: "100%" }}>
//     <Grid
//       className="fuw"
//       container
//       rowSpacing={1}
//       columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//     >
//       {posts.map((post, index) => (
//         <Grid key={post.id} item xs={3}>
//           <Box
//             sx={{
//               width: "100%",
//               maxWidth: 360,
//               bgcolor: "background.paper",
//             }}
//           >
//             <Box sx={{ my: 3, mx: 2 }}>
//               <div >
//                 <Grid >
//                   <Grid  item xs>
//                     <Typography gutterBottom variant="h4" component="div">
//                       {post.title}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//                 <Typography color="text.secondary" variant="body2">
//                   {post.body}
//                 </Typography>
//               </div>
//             </Box>
//             <Divider variant="middle" />
//             <Box className="tipo" sx={{ mt: 3, ml: 1, mb: 1 }}>
//               <Button onClick={() => takeComments(post.id)}>Comments</Button>
//             </Box>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   </Box>
// );
