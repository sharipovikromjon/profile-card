import React from "react";
import Card from "../components/Card";
import { useState } from "react"; // Option 2: type SetStateAction

function EditableText() {
  const [name, setName] = useState("Ikromjon Sharipov");
  const [isEditingName, setIsEditingName] = useState(false);
  const [job, setJob] = useState("Frontend Developer Intern");
  const [isEditingJob, setIsEditingJob] = useState(false);

  // Option 2: e: { target: { value: SetStateAction<string> } }
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const changeJob = (e: React.ChangeEvent<HTMLInputElement>) =>
    setJob(e.target.value);
  return (
    <>
      <Card
        name={name}
        job={job}
        isEditingName={isEditingName}
        isEditingJob={isEditingJob}
        setIsEditingName={setIsEditingName}
        setIsEditingJob={setIsEditingJob}
        changeName={changeName}
        changeJob={changeJob}
      />
    </>
  );
}

export default EditableText;
