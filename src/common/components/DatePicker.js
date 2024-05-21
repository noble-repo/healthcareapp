import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft:"16px",
    marginTop:"10px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers(props) {
  const [selectedDate, setSelectedDate] = React.useState("");
  React.useEffect(() => {
      setSelectedDate(props.value)
  }, [props.value]);

  const handleDateChange = event => {
      setSelectedDate(event.target.value);
      if (props.questionObject)
          props.onChange(event, props.questionObject); //For Question Answer Usage
      else
          props.onChange(event); //For Generic Usage
  };
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id={props.id ? props.id : "date"}
        type="date"
        classes={'date-func'}
        onChange={handleDateChange}
        value={selectedDate}
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
