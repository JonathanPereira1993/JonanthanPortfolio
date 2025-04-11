import React from "react";

type Props = {
  id: number;
  isChecked: boolean;
  label: React.ReactNode | string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const CheckboxFilterItem = ({
  id,
  isChecked = false,
  label,
  onClick,
}: Props) => {
  return (
    <div className="checkbox-filter-item" data-id={id}>
      <div
        role="checkbox"
        tabIndex={0}
        aria-checked={isChecked}
        onClick={onClick}
        className={`checkbox ${isChecked && "checked"}`}
      />
      <div className="checkbox-filter-label">{label}</div>
    </div>
  );
};

export default CheckboxFilterItem;
