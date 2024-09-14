import HomeCardList from "./homeNewsCardList";
import HomeImage from "./homeImage";
import PlayerOfTheMonth from "./payerOfTheMonth";
import TournamentsPage from "./upcomingTournaments";


export function loader () {
    
}

function HomePage() {
    return(
        <>
            <HomeImage/>
            <HomeCardList/>
            <PlayerOfTheMonth/>
            <TournamentsPage/>
            
        </>
    )
}
export default HomePage;
