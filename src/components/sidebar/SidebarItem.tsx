import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";

import "./SidebarItem.scss";

type Props = {
  children: React.ReactNode;
  selected: boolean;
  isChild?: boolean;
  onClick: (id: string, sectionName: string) => void;
  id: string;
  sectionName: string;
};

const SidebarItem = ({
  id,
  sectionName,
  children,
  onClick,
  selected = false,
  isChild = false,
}: Props) => {
  const onClickHandler = () => {
    onClick(id, sectionName);
  };

  return (
    <div
      onClick={onClickHandler}
      className={`sidebar-item ${isChild && "sidebar-item--child"} ${selected && "active"}`}
    >
      <div className="sidebar-item__icon">
        {selected ? <AiFillFolderOpen size={24} /> : <AiFillFolder size={24} />}
      </div>
      <div className="sidebar-item__content">{children}</div>
    </div>
  );
};

export default SidebarItem;
