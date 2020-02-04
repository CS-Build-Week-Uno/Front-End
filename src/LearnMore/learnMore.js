import React from "react";
import { Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const Data = {
  team: [
    {
      name: "Zach Young",
      bio: "`",
      role: "",
      lastBook: " ",
      secretTalent: "",
      portfolioLink: "",
      linkedInLink: "",
      gitHubLink: "",
      img_url: ""
    },
    {
      name: "Jeff Butler",
      bio: "`",
      role: "",
      lastBook: " ",
      secretTalent: "",
      portfolioLink: "",
      linkedInLink: "",
      gitHubLink: "",
      img_url: ""
    },
    {
      name: "Eli Citron",
      bio: "`",
      role: "",
      lastBook: " ",
      secretTalent: "",
      portfolioLink: "",
      linkedInLink: "",
      gitHubLink: "",
      img_url: "http://localhost:3000/static/media/eli.5e774496.jpeg"
    },
    {
      name: "Colin de Vries",
      bio: "Full Stack Developer, Front End Fanboy",
      role: "Full Stack Developer",
      lastBook: "What's a book?",
      secretTalent: "Can eat a whole party-size bag of Doritos",
      portfolioLink: "https://www.colindevries.dev/",
      linkedInLink: "https://www.linkedin.com/in/dvcolin/",
      gitHubLink: "https://github.com/dvcolin",
      img_url: ""
    },
    {
      name: "Derek Etman",
      bio: "Full stack developer with a degree in music composition",
      role: "Full Stack Developer",
      lastBook: "You Don't Know JS Scope & Closures",
      secretTalent: "Can cook or bake anything",
      portfolioLink: "https://www.DerekEtman.com",
      linkedInLink: "https://www.linkedin.com/in/dereketman/",
      gitHubLink: "https://github.com/DerekEtman",
      img_url: "https://avatars0.githubusercontent.com/u/49086915?s=460&v=4"
    }
  ]
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright ©"}
      <Link color="inherit" href="https://material-ui.com/">
        www.Testsite.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export function LearnMore() {
  const classes = useStyles();

  console.log(Data.team);

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              GETCHU GAME ON!!!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            ></Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Data.team.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img_url}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="h2">
                      {card.role}
                    </Typography>
                    <Typography>{card.bio}</Typography>
                    <br />
                    <Typography gutterBottom variant="h6" component="h2">
                      Secret Talent
                    </Typography>
                    <Typography>{card.secretTalent}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      href={card.linkedInLink}
                    >
                      Linked in
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      href={card.portfolioLink}
                    >
                      Portfolio
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thanks for visiting!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Computers think, so you don't have to!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
