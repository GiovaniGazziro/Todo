import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({

  button: {
    margin: theme.spacing.unit,
    padding: 10,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function ButtonTools(props) {
  const { classes, removeTask, taskId, onClick } = props;
  return (
    <div>
      <Button variant="contained" color="primary" onClick={event => onClick(taskId)} className={classes.button}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>
      <Button variant="contained"  color="primary" className={classes.button}>
        Completed
        <Icon className={classes.rightIcon} />
      </Button>
    </div>
  );
}

ButtonTools.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonTools);
