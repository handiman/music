import React from 'react';
import { IAlbum, ITrack } from '.';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(_ => ({
  track: {
      cursor: 'pointer'
  }
}));

export default (props: {
  album: IAlbum;
  onTrackSelected: (album: IAlbum, track: ITrack) => void;
}) => {
  const { onTrackSelected, album } = props;
  const { tracks, title } = album;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h4" component="h4">{title}</Typography>
      <ul>
        {tracks && tracks.map((track: ITrack, index: number) => (
          <li key={index} onClick={() => onTrackSelected(album, track)} className={classes.track}>
            {track.title}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}