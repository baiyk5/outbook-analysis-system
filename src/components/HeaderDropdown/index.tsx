import { Dropdown } from 'antd';
import type { DropDownProps } from 'antd/es/dropdown';
import { createStyles } from 'antd-style';
import classNames from 'classnames';
import React from 'react';

const useStyles = createStyles(({ token }) => {
  return {
    dropdown: {
      [`@media screen and (max-width: ${token.screenXS}px)`]: {
        width: 'auto',
        minWidth: '160px',
        maxWidth: '90vw',
      },
      // 移动端下拉菜单优化
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        '.ant-dropdown-menu': {
          minWidth: '160px',
          maxWidth: '90vw',
        },
        '.ant-dropdown-menu-item': {
          padding: '8px 12px',
          fontSize: '14px',
        },
      },
    },
  };
});

export type HeaderDropdownProps = {
  overlayClassName?: string;
  placement?:
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomCenter';
} & Omit<DropDownProps, 'overlay'>;

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  overlayClassName: cls,
  ...restProps
}) => {
  const { styles } = useStyles();
  return (
    <Dropdown
      overlayClassName={classNames(styles.dropdown, cls)}
      {...restProps}
    />
  );
};

export default HeaderDropdown;
