import React from 'react';
import ReactSelect, { GroupTypeBase, Styles } from 'react-select';

const colourStyles:
  | Partial<
      Styles<
        {
          value: string;
          label: string;
        },
        false,
        GroupTypeBase<{
          value: string;
          label: string;
        }>
      >
    >
  | undefined = {
  container: styles => {
    return {
      ...styles,
      minWidth: '5rem',
    };
  },
  control: styles => {
    return {
      ...styles,
      height: '3rem',
      borderColor: 'rgba(209, 213, 219, var(--tw-border-opacity))',
      borderWidth: '2px',
      flexDirection: 'row-reverse',
      ':active': {
        boxShadow: 'none',
      },
      ':hover': {
        boxShadow: 'none',
        borderColor: 'rgb(209, 213, 219)',
      },
    };
  },
  indicatorsContainer: styles => {
    return {
      ...styles,
      backgroundColor: 'rgb(244, 190, 2)',
      width: '3rem',
      height: '3rem',
      marginTop: '-2px',
      marginLeft: '-2px',
      borderRadius: '0.375rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
  indicatorSeparator: () => {
    return {
      display: 'none',
    };
  },
};

const Select: React.FC<SelectProps> = ({ options, placeholder }) => {
  return (
    <ReactSelect
      styles={colourStyles}
      options={options}
      placeholder={placeholder}
    />
  );
};

export default Select;
