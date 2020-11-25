import React, {Fragment} from 'react';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import HomeIcon from '@material-ui/icons/Home';
import Drawer from '@material-ui/core/Drawer';

import { useStyles } from '../../utils/styles';


function DrawerMenu(props) {
    const currentAnchor = 'left';
    const classes = useStyles();

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={props.toggleDrawer(false)}
          onKeyDown={props.toggleDrawer(false)}
        >
          <List>
              <ListItem button component="a" href="/home" key='Home'>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>

          </List>
          <Divider />
          <List>
              <ListItem button component="a" href="/favorites" key='Favorites'>
                <ListItemIcon>
                    <MusicNoteIcon />
                </ListItemIcon>
                <ListItemText primary='Favorites' />
              </ListItem>
          </List>
        </div>
      );

    return (
        <Fragment key={currentAnchor}>
        <Drawer
          anchor={currentAnchor}
          open={props.openDrawer}
          onClose={props.toggleDrawer(false)}
        >
        {list(currentAnchor)}
        </Drawer>
    </Fragment>
    )
}
export default DrawerMenu;