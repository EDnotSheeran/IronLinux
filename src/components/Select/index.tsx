import React from 'react';
import ReactSelect, {
  ActionMeta,
  ValueType,
  OptionTypeBase,
} from 'react-select';
import styles from './styles';

type SelectProps = {
  id: string;
  options: {
    value: string;
    label: string;
  }[];
  value: {
    value: string;
    label: string;
  } | null;
  placeholder: string;
  onChange?:
    | ((
        value: {
          value: string;
          label: string;
        } | null,
        actionMeta: ActionMeta<OptionTypeBase>
      ) => void)
    | undefined;
};

const Select: React.FC<SelectProps> = ({
  id,
  options,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <ReactSelect
      instanceId={id}
      styles={styles}
      options={options}
      placeholder={placeholder}
      classNamePrefix="react-select"
      onChange={onChange}
      isMulti={false}
      value={value}
    />
  );
};

export default Select;
