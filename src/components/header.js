import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import purple from "@material-ui/core/colors/purple";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import ServicesIcon from "@material-ui/icons/FormatPaintTwoTone";
import ContactsIcon from "@material-ui/icons/PhoneInTalkTwoTone";
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import BusinessIcon from "@material-ui/icons/BusinessCenterTwoTone";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 300
  },
  fullList: {
    width: "auto"
  }
}));

export function MyAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div>
        <Typography variant="h6" align="center">
          Аудиторско-консалтинговое агенство
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </Typography>
      </div>

      <Divider />

      <List>
        <ListItem button>
          <Link to="/">
            <IconButton>
              <HomeIcon />
            </IconButton>
            Главная
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/about">
            <IconButton>
              <BusinessIcon />
            </IconButton>
            О компании
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/services">
            <IconButton>
              <ServicesIcon />
            </IconButton>
            Наши услуги
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/contacts">
            <IconButton>
              <ContactsIcon />
            </IconButton>
            Контакты
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: purple[400] }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
          <Typography variant="h5" className={classes.title}>
            Аудиторско-консалтинговое агенство
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
