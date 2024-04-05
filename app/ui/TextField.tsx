import react from "react";

interface TextFieldProps {
  label: string;
}

const TextField: React.FC<TextFieldProps> = ({ label }) => {
  return (
    <>
      <div>
        <p className=" font-medium text-[#8E8878] my-2">{label}</p>
        <input
          type="text"
          className="ring-1 ring-[#CCBCA3] p-[10px] rounded-md  focus:ring-[#8E8878] outline-none shadow-none w-full"
        />
      </div>
    </>
  );
};

export default TextField;

// {label, placeholder, type, value }
