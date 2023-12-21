import { InputBase } from "@mui/material";
import { Search } from "./icons";

function SearchBar() {
    return (
        <div className="relative rounded-md bg-opacity-15 bg-white hover:bg-opacity-25 md:mr-2 md:ml-0 w-full md:w-auto">
            <div className="left-4 h-full absolute pointer-events-none flex items-center justify-center">
                <Search/>
            </div>
            <InputBase
                className="text-white w-full md:w-20 transition-all duration-300 pl-8"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
}

export default SearchBar;