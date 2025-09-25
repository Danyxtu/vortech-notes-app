const SearchBar = () => {
  return (
    <div className='flex justify-center'>
      <input
        className='
          h-[40px] w-[500px]
          px-[15px]
          border-2 border-black rounded-full
        '
        placeholder="Design lang po ito sir"
      />
    </div>
  );
};

export default SearchBar;
