import { menuItems } from "../const/sidebarList";
import clsx from "clsx";
import { Link, useHref } from "react-router-dom";
import { Fragment } from "react";

export const Sidebar = () => {
  const currentHref = useHref(null);
  return (
    <aside className="flex flex-col justify-items-start gap-5 w-60 h-screen pt-14 pl-6 bg-theme-black text-theme-gray">
      {menuItems.map(({ name, divider, group, key }) => (
        <Fragment key={key}>
          {name && <h3 className="uppercase text-xs">{name}</h3>}
          <ul className={clsx("flex flex-col gap-4")}>
            {group.map(({ name, href, icon }) => {
              const mathed = currentHref === href;
              return (
                <li key={name} className={clsx("flex justify-between group")}>
                  <Link
                    to={href}
                    className={clsx(
                      "flex items-center gap-4 w-full text-3xls capitalize group-hover:text-white",
                      {
                        "text-white": mathed,
                      }
                    )}
                  >
                    <span
                      className={clsx("text-xl group-hover:text-red-500", {
                        "text-red-500": mathed,
                      })}
                    >
                      {icon}
                    </span>
                    {name}
                  </Link>

                  <div
                    className={clsx(
                      "h-full w-1 rounded-l-full group-hover:bg-red-500",
                      {
                        "bg-red-500": mathed,
                      }
                    )}
                  />
                </li>
              );
            })}
          </ul>
          {divider && <hr className="border-theme-gray mr-6" />}
        </Fragment>
      ))}
    </aside>
  );
};
