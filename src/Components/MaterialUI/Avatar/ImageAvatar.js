import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  author: {
      color: theme.palette.primary.main,
      fontWeight: 500
  }
}));

const ImageAvatar = props => {
  const classes = useStyles();
  const { item, showName, classNames } = props;

  return (
      <>    
        <Avatar alt={item.author} src={item.media} className={classNames.join(' ')} />
        {showName && 
            <Typography className={classes.author} variant="body1">{item.author}</Typography>
        }
      </>
  )
}

export default ImageAvatar;