import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import getMeetups from '../services/meetup.service';
import formatDate from '../utilities/date.utilities';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  avatar:{
      float: 'left',
      margin: 5,
      marginRight: 10
  },
  speaker: {
      height: 50,
  },
  name: {
    lineHeight: '50px',
},
}));

function SimpleTable() {
  const classes = useStyles();
  const meetups = getMeetups();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Host</TableCell>
            <TableCell>Speakers</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meetups.map(meetup => (
            <TableRow key={meetup.id}>
              <TableCell>{formatDate(meetup.date)}</TableCell>
              <TableCell>{meetup.city}</TableCell>
              <TableCell>{meetup.host}</TableCell>
              <TableCell>
              {meetup.speakers.map(speaker => (
                  <div className={classes.speaker}>
                      <Avatar alt={speaker.name} src={speaker.photo} className={classes.avatar} />
                      <span className={classes.name}>{speaker.name}</span>                
                  </div>                  
              ))}
              </TableCell>
              <TableCell>{meetup.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;