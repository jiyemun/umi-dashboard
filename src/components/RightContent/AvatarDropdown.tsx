// src/components/RightContent.tsx
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import React from 'react';

export const AvatarDropdown: React.FC = () => {
  const menu = (
    <Menu
      items={[
        {
          key: 'center',
          icon: <UserOutlined />,
          label: 'User Center',
        },
        {
          key: 'settings',
          icon: <SettingOutlined />,
          label: 'Settings',
        },
        {
          type: 'divider',
        },
        {
          key: 'logout',
          icon: <LogoutOutlined />,
          label: 'Logout',
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu}>
      <span
        style={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <Avatar size="small" src="/avatar.jpg" style={{ marginRight: 8 }} />
        Jiyeon
      </span>
    </Dropdown>
  );
};
