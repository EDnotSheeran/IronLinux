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
      outline: 'none',
      boxShadow: 'none',
    };
  },
  control: styles => {
    return {
      ...styles,
      height: '3rem',
      borderColor: 'rgba(209, 213, 219, var(--tw-border-opacity))',
      borderWidth: '2px',
      flexDirection: 'row-reverse',
      outline: 'none',
      boxShadow: 'none',
      ':active': {
        outline: 'none',
        boxShadow: 'none',
      },
      ':hover': {
        outline: 'none',
        boxShadow: 'none',
        borderColor: 'rgb(209, 213, 219)',
      },
    };
  },
  indicatorsContainer: styles => {
    return {
      ...styles,
      backgroundColor: 'rgb(244, 190, 2)',
      ':hover': {
        backgroundColor: 'rgb(224, 176, 0)',
      },
      width: '3rem',
      height: '3rem',
      marginTop: '-2px',
      marginLeft: '-2px',
      borderRadius: '0.375rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'white',
    };
  },
  indicatorSeparator: () => {
    return {
      display: 'none',
    };
  },
  placeholder: () => {
    return {
      color: 'rgb(156, 163, 175)',
    };
  },
  dropdownIndicator: () => {
    return {
      color: 'white',
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
