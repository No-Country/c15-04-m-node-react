


const ButtonQuestions = ({ options, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {options.map((option, index) => (
        <button
          key={index}
          className="bg-emerald-500 text-white py-2 px-4 rounded-md mb-2 w-32"
          onClick={() => onClick(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};


export default ButtonQuestions;
