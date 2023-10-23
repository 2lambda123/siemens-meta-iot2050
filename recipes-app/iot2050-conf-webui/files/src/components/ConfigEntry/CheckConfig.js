/* eslint-disable react/prop-types */
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const doNothing = (id) => {};

export default function CheckConfig ({ id, data, updateConfig, disabled = false, postChange = doNothing }) {
  const onChange = (event) => {
    data.value = event.target.checked;
    postChange(id);
    updateConfig();
  };

  return (
    <FormControlLabel
      disabled={disabled}
      label={data.label}
      control={<Checkbox
        checked={data.value}
        onChange={onChange}
        id={id}
        name={id}
      />}
    />
  );
}
