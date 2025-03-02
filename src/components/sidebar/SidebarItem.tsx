import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";

import "./SidebarItem.scss";

type Props = {
  children: React.ReactNode;
  selected: boolean;
  onClick: (id: number) => void;
  id: number;
};

const SidebarItem = ({ id, children, onClick, selected = false }: Props) => {
  const onClickHandler = () => {
    onClick(id);
  };

  return (
    <div
      onClick={onClickHandler}
      className={`sidebar-item ${selected && "active"}`}
    >
      <div className="sidebar-item__icon">
        {selected ? <AiFillFolderOpen size={24} /> : <AiFillFolder size={24} />}
      </div>
      <div className="sidebar-item__content">{children}</div>
    </div>
  );
};

export default SidebarItem;
