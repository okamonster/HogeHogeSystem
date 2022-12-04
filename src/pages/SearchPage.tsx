import { BottomBar } from "../parts/BottomBar";
import { SerachResultView } from "../views/SearchResultView";
import { SearchHeader } from "../parts/SearchHeader";

export const SearchPage = () => {
    return(
        <>  
            <SearchHeader/>
            <SerachResultView/>
            <BottomBar/>
        </>
    );
}






