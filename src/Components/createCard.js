// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });


// const CreateCard = () => {

//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default  CreateCard 



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ViewTree from './viewTree';
import Topbar from './topbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '100vh',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />

      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            {/* Form input for creating the json object tree */}
            <Typography component="h4" variant="h4">
              Create Member
            </Typography>
            <Grid item>
              <form className={classes.container} noValidate>

                <Grid item>
                  <TextField
                    required
                    id="name"
                    label="Person Name"

                  /></Grid>
                <br></br>
                <Grid item>

                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

              </form>
            </Grid>
          </Paper>
        </Grid>


        {/*  */}
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Typography component="h4" variant="h4">
              View Tree
            </Typography>
            <ViewTree />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
