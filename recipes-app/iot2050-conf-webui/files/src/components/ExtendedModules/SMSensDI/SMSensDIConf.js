/* eslint-disable react/prop-types */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import ModuleInfo from '@/components/ModuleInfo';

export function convertToUIFormat (config) {
  const ret = {
    mlfb: config.mlfb
  };
  return ret;
};

export function convertToDeviceFormat (config) {
  const ret = {
    description: 'TBD',
    mlfb: config.mlfb
  };
  return ret;
};

export const SMSensDIConfDefault = {
  mlfb: '6ES7647-0CM00-1AA2'
};

export default function SMSensDIConf ({ slotNum, configData, updateConfig }) {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      <ModuleInfo
        description="SM SENS DI"
        artNumber="6ES 7647-0CM00-1AA2"
        fwVersion="NA"
      />
    </Stack>
  );
}
