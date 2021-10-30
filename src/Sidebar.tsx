import React, { ReactNode } from 'react';
import { FaDiscord, FaCompass } from 'react-icons/fa';
import { BsPlus, BsDownload } from 'react-icons/bs';

interface Props {
  //   children: React.ReactNode;
}

function Divider() {
  return <div className="w-9 h-px my-0.5 bg-iconGray" />;
}

export const Sidebar = (props: Props) => {
  return (
    <div className="fixed bg-gray-500 top-0 left-0 text-iconGreen h-screen flex flex-col items-center shadow-lg">
      <SidebarIcon icon={<FaDiscord size="28" />} home={true} active={true} tooltip="Home" />
      <SidebarIcon icon={<BsPlus size="38" />} tooltip="Add Server" />
      <SidebarIcon icon={<FaCompass size="26" />} tooltip="Explore" />
      <Divider />
      <SidebarIcon icon={<BsDownload size="24" />} tooltip="Download" />
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
  <SidebarIconContainer home={home}>
    <IconAria active={active} home={home} />
    {icon}
    <Tooltip>{tooltip}</Tooltip>
  </SidebarIconContainer>
);

function SidebarIconContainer(props: { home?: boolean; children: ReactNode }) {
  return (
    <div
      className={
        'flex items-center my-2 mx-3 justify-center group bg-iconGray h-12 w-12 rounded-3xl hover:rounded-xl hover:bg-iconGreen hover:text-white transition-all ease-linear duration-300 ' +
        (props.home ? '!bg-blue-600 !text-white rounded-2xl' : '')
      }
    >
      {props.children}
    </div>
  );
}

function IconAria(props: { active?: boolean; home?: boolean }) {
  return (
    <div
      className={
        (props.active ? 'py-[10px] px-[3px]' : 'py-[7px] px-[2px]') +
        ' absolute left-0  bg-white rounded-r-3xl group-hover:py-3 group-hover:px-[3px] transition-all duration-100 ' +
        (props.home ? '!py-4' : '')
      }
    ></div>
  );
}

function Tooltip({ children = 'tooltip' }: { children?: string }) {
  return (
    <div className="absolute left-[80px]  flex items-center scale-0 group-hover:scale-100 transition-all duration-75">
      <div className="absolute p-1 bg-black text-white rotate-45" />
      <p className="absolute left-[4px] py-1 px-2 rounded-lg bg-black text-white min-w-max ">
        {children}
      </p>
    </div>
  );
}
