import React from 'react';
import { FaDiscord } from 'react-icons/fa';

interface Props {
  //   children: React.ReactNode;
}

export const Sidebar = (props: Props) => {
  return (
    <div className="fixed bg-gray-500 top-0 left-0 text-iconGreen h-screen flex flex-col shadow-lg">
      <SidebarIcon icon={<FaDiscord size="28" />} home={true} active={true} tooltip="Home" />
      <SidebarIcon icon={<FaDiscord size="28" />} />
      <SidebarIcon icon={<FaDiscord size="28" />} />
      <SidebarIcon icon={<FaDiscord size="28" />} />
    </div>
  );
};

const SidebarIcon = ({
  icon,
  tooltip,
  active,
  home,
}: {
  icon: React.ReactNode;
  home?: boolean;
  active?: boolean;
  tooltip?: string;
}) => (
  <div className="flex items-center">
    <div
      className={
        'flex items-center group bg-iconGray my-2 mx-3 p-3 hover:rounded-2xl hover:bg-iconGreen hover:text-white rounded-[2rem] transition-all duration-150 ' +
        (home ? '!bg-blue-600 !text-white rounded-2xl' : '')
      }
    >
      <div
        className={
          (active ? 'py-[10px] px-[3px]' : 'py-[7px] px-[2px]') +
          ' absolute left-0  bg-white rounded-r-3xl group-hover:py-3 group-hover:px-[3px] transition-all duration-100 ' +
          (home ? '!py-4' : '')
        }
      ></div>
      {icon}
      <Tooltip>{tooltip}</Tooltip>
    </div>
  </div>
);

function Tooltip({ children = 'tooltip' }: { children?: React.ReactNode }) {
  return (
    <div className="absolute left-[80px] flex items-center scale-0 group-hover:scale-100 transition-all duration-75">
      <div className="absolute p-1 bg-black text-white rotate-45" />
      <div className="absolute left-[4px] py-1 px-2 rounded-lg bg-black text-white ">
        {children}
      </div>
    </div>
  );
}
