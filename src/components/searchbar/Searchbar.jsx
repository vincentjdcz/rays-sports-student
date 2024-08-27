
export function Searchbar() {
    return (

     <div className="pt-2 relative mx-auto text-gray-600 w-fit ml-6">
        <input className="border-2 border-gray-300 bg-white h-10 w-40 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"/>
        <button type="submit" className="absolute right-0 top-0 mt-4 mr-2">
          <img src="/src/assets/icons/search.png"/>
        </button>
      </div>
    )
}

export default Searchbar;