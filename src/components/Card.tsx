import { MdDarkMode } from "react-icons/md";
import EditableJob from "./EditableJob";
import EditableField from "./EditableName";
import { useState } from "react";
import { CiLight } from "react-icons/ci";

interface CardProps {
  name: string;
  job: string;
  isEditingName: boolean;
  isEditingJob: boolean;
  setIsEditingName: (isEditingName: boolean) => void;
  setIsEditingJob: (isEditingJob: boolean) => void;
  changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeJob: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Card: React.FC<CardProps> = ({
  name,
  job,
  isEditingName,
  isEditingJob,
  setIsEditingName,
  setIsEditingJob,
  changeName,
  changeJob,
}) => {
  // true - light
  // false - dark
  const [theme, setTheme] = useState(true);

  return (
    <div className="w-[55%] mx-auto pt-[50px]">
      <div
        className={`py-[78px] px-[73px] rounded-2xl flex items-center justify-between relative transition-all duration-500 ${
          theme ? "bg-[#FBF4FA]" : "bg-[#111827]"
        }`}
      >
        <>
          {theme ? (
            <MdDarkMode
              onClick={() => setTheme(false)}
              className="w-[36px] h-[36px] absolute top-[10px] right-[10px] cursor-pointer transition-all duration-500 transform hover:scale-110"
            />
          ) : (
            <CiLight
              onClick={() => setTheme(true)}
              className="w-[36px] h-[36px] absolute top-[10px] right-[10px] cursor-pointer text-[#fff] transition-all duration-500 transform hover:scale-110"
            />
          )}
          {/* User image */}
          <div></div>
        </>
        {/* User data */}
        <div className="w-[50%]">
          {/* Username */}
          <EditableField
            value={name}
            isEditingName={isEditingName}
            placeholder={"Username"}
            changeName={changeName}
            onEditName={() => setIsEditingName(true)}
            onBlur={() => name.trim() && setIsEditingName(false)}
            className={`text-[32px] font-medium leading-10 mb-[8px] transition-all duration-500 ${
              theme ? "text-[#111827]" : "text-[#fbf4fa]"
            }`}
          />
          {/* Job Title */}
          <EditableJob
            job={job}
            isEditingJob={isEditingJob}
            placeholder={"Job position"}
            changeJob={changeJob}
            onEditName={() => setIsEditingJob(true)}
            onBlur={() => name.trim() && setIsEditingJob(false)}
            className={`text-[18px] font-medium leading-6 mb-[40px] transition-all duration-500 ${
              theme ? "text-[#D5B0CF]" : "text-[#9ca3af]"
            }`}
          />

          {/* Description */}

          <p
            className={`text-[16px] font-normal leading-6 mb-[40px] transition-all duration-500 ${
              theme ? "text-[#111827]" : "text-[#fbf4fa]"
            }`}
          >
            Frontend developer intern actively working on real projects to
            strengthen my React, TypeScript, and UI skills. Currently developing
            a customizable, responsive{" "}
            <span className="font-bold">profile card</span> application to
            explore editable components, global state, and UI design using
            Tailwind CSS. Always interested to learn, build, and grow as a
            developer through hands-on experience.
          </p>
          {/* Media */}
          <ul className="flex items-center gap-x-[48px] mb-[42px]">
            <li>
              <img src="/media/facebook.svg" alt="Facebook" />
            </li>
            <li>
              <img src="/media/lin.svg" alt="LinkedIn" />
            </li>
            <li>
              <img
                className="w-[24px] h-[24px]"
                src="/media/instagram.png"
                alt="Instagram"
              />
            </li>
            <li>
              <img src="/media/twitter.svg" alt="Twitter" />
            </li>
          </ul>
          <button
            className={`rounded-[4px] text-[14px] font-normal leading-6 py-[10px] px-[49px] transition-all duration-500 ease-in-out ${
              theme
                ? "text-[#fff] bg-[#bb8db7] hover:bg-[#111827]"
                : "text-[#111827] bg-[#9ca3af] hover:bg-[#fbf4fa] hover:text-[#000]"
            }`}
            type="button"
          >
            Buy me a coffee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
