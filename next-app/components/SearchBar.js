const style = {
  wrapper: `search-bar hidden md:flex items-center justify-center ml-auto`,
  input: `search-input`,
}

const SearchBar = () => {
  return (
    <div className={style.wrapper}>
      <input className={style.input} placeholder='Search...' />
    </div>
  )
}

export default SearchBar
