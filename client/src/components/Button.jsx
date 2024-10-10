const Button = ({ children }) => {
  return (
    <>
      <button className="px-5 py-2 bg-black rounded-lg text-white text-lg hover:opacity-80 lowercase">
        {children}
      </button>
    </>
  );
};

export default Button;
