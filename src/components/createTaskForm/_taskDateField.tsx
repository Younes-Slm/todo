import React, { FC, ReactElement } from 'react';
//import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IDateField } from './interfaces/IDateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

export const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  //  Destructure props
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Task Date"
          format="MM-DD-YYYY"
          value={value}
          onChange={onChange}
          disabled={disabled}
          slots={(params:any) => (
            <TextField {...params} />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
