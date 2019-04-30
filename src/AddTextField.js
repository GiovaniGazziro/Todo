import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
&&{
    padding: 10px;
}
`


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 0,
  },
  menu: {
    width: 200,
  },
});


class AddTextField extends React.Component {
  static propTypes = { task: PropTypes.string }
  static defaultProps = { task: '' }

  render() {
    const { classes, task, onChange, taskId } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <StyledTextField
          id="outlined-dense"
          label="Task"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          value={task}
          onChange={ event  => onChange(event.target.value, taskId)}
          variant="outlined"
        />

      </form>
    );
  }
}

AddTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTextField);
