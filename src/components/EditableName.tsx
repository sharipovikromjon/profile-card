interface EditableFieldProps {
  value: string;
  isEditingName: boolean;
  placeholder: string;
  className: string;
  changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEditName: () => void;
  onBlur: () => void;
}

const EditableField: React.FC<EditableFieldProps> = ({
  value,
  isEditingName,
  placeholder,
  className,
  changeName,
  onEditName,
  onBlur,
}) => {
  return isEditingName ? (
    <input
      value={value}
      onChange={changeName}
      onBlur={onBlur}
      onKeyDown={(e) => e.key == "Enter" && e.currentTarget.blur()}
      className={`${className} outline-none`}
      type="text"
      placeholder={placeholder}
      autoFocus
    />
  ) : (
    <h4
      onClick={onEditName}
      className={`${className} ${value ? "" : "invisible"}`}
    >
      {value || " "}
    </h4>
  );
};

export default EditableField;
