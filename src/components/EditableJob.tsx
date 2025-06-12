interface EditableJobProps {
  job: string;
  placeholder: string;
  className: string;
  isEditingJob: boolean;
  onEditName: () => void;
  onBlur: () => void;
  changeJob: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditableJob: React.FC<EditableJobProps> = ({
  job,
  placeholder,
  className,
  isEditingJob,
  onEditName,
  onBlur,
  changeJob,
}) => {
  return isEditingJob ? (
    <input
      value={job}
      onChange={changeJob}
      className={`${className} outline-none`}
      onBlur={() => onBlur}
      onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
      placeholder={placeholder}
      autoFocus
      type="text"
    />
  ) : (
    <p
      onClick={onEditName}
      className={`${className} ${job ? "" : "invisible"}`}
    >
      {job || " "}
    </p>
  );
};

export default EditableJob;
