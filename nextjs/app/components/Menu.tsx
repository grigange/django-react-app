import React from "react";
import Image from "next/image";
import logo from "@/public/Logo.png";
import logoSmall from "@/public/logoSmall.png";
import Link from "next/link";
import { HiChartBar } from "react-icons/hi2";
import { HiCpuChip } from "react-icons/hi2";
import { TbLogout2 } from "react-icons/tb";
import { HiGlobeAlt } from "react-icons/hi2";
import { HiCog6Tooth } from "react-icons/hi2";
import { HiPresentationChartBar } from "react-icons/hi2";
/*TODO: In smaller screen sizes element escapes the main layout
 and hides in the left, making it appear only with menu button*/
const Menu = async ({ active }: { active: boolean }) => {
  return (
    <aside
      className={` max-w-fit xl:min-w-64sticky top-0 px-6 gap-8 py-12 h-screen flex flex-col items-start bg-bg2`}
    >
      <Image className={`xl:block hidden`} src={logo} alt="logo" width={200} />
      <Image
        className={`xl:hidden block`}
        src={logoSmall}
        alt="logo"
        width={52}
      />
      <div className="flex flex-col gap-6 w-full">
        <NavLink
          title="Dashboard"
          path="/"
          active={active}
          icon={<HiPresentationChartBar size={26} />}
        />
        <NavLink
          title="Analysis"
          path="/analysis"
          active={active}
          icon={<HiCpuChip size={26} />}
        />
        <NavLink
          title="Stocks"
          path="/stocks"
          active={active}
          icon={<HiChartBar size={26} />}
        />
        <NavLink
          title="Blog"
          path="/blog"
          active={active}
          icon={<HiGlobeAlt size={26} />}
        />
      </div>
      <div className="flex flex-col gap-6 w-full h-full justify-end">
        <NavLink
          title="Settings"
          path="/settings"
          active={active}
          icon={<HiCog6Tooth size={26} />}
        />
        <NavLink
          title="Log out"
          path="/logout"
          active={active}
          icon={<TbLogout2 size={26} />}
        />
      </div>
    </aside>
  );
};

const NavLink = ({
  title,
  path,
  active,
  icon,
}: {
  title: string;
  path: string;
  active: boolean;
  icon: React.ReactNode;
}) => {
  return (
    <Link
      href={path}
      title={title}
      className={`transition-all aspect-square xl:aspect-auto w-full p-2 xl:py-2 xl:px-4 flex xl:justify-start justify-center items-center gap-6 hover:bg-bg3 rounded-xl hover:fill-pr2 hover:text-pr2`}
    >
      {icon}
      <h2 className="text-lg font-semibold hidden xl:block">{title}</h2>
    </Link>
  );
};
export default Menu;
