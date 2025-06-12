import { useState} from "react"; // type SetStateAction (Option 2)

const Card = () => {
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
    <div className="w-[55%] mx-auto pt-[50px]">
      <div className="bg-[#FBF4FA] py-[78px] px-[73px] rounded-2xl flex items-center justify-between relative">
        {/* User image */}
        <div>
          {/* <img
            className="absolute bottom-0 left-0 w-[350px] h-[520px]"
            src="/user-img.png"
            alt="user-img"
          /> */}
        </div>
        {/* User data */}
        <div className="w-[50%]">
          {isEditingName ? (
            <input
              className="text-[#111827] text-[32px] font-medium leading-10 mb-[8px] outline-none"
              placeholder={name == "" ? "Username" : ""}
              value={name}
              onChange={changeName}
              onBlur={() => {
                // Option 2: !(name == "")
                if (name.trim() !== "") {
                  setIsEditingName(false);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.currentTarget.blur();
                }
              }}
              autoFocus
              type="text"
            />
          ) : (
            <h4
              className={`text-[#111827] text-[32px] font-medium leading-10 mb-[8px] ${
                name ? "" : "invisible"
              }`}
              onClick={() => setIsEditingName(true)}
            >
              {name || " "}
            </h4>
          )}
          {/* Job */}
          {isEditingJob ? (
            <input
              className="text-[#D5B0CF] text-[18px] font-medium leading-6 mb-[40px] outline-none"
              value={job}
              placeholder={job ? "" : "Job position"}
              onChange={changeJob}
              onBlur={() => {
                if (job.trim() !== "") {
                  setIsEditingJob(false);
                }
              }}
              type="text"
              autoFocus
            />
          ) : (
            <p
              className={`text-[#D5B0CF] text-[18px] font-medium leading-6 mb-[40px] ${
                job ? "" : "invisible"
              }`}
              onClick={() => setIsEditingJob(true)}
            >
              {job || " "}
            </p>
          )}
          <p className="text-[#111827] text-[16px] font-normal leading-6 mb-[40px]">
          Frontend developer intern actively working on real projects to strengthen my React, TypeScript, and UI skills. Currently developing a customizable, responsive <span className="font-bold">profile card</span> application to explore editable components, global state, and UI design using Tailwind CSS. Always interested to learn, build, and grow as a developer through hands-on experience.
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
            className="text-[#fff] bg-[#BB8DB7] rounded-[4px] text-[14px] font-normal leading-6 py-[10px] px-[49px] transition-all duration-400 ease-in hover:bg-[#111827] hover:cursor-pointer"
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
