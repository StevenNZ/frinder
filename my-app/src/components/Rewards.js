import "./RewardsStyles.css";
import RewardsData from "./RewardsData";

function Rewards () {
    return(
        <div className="reward">
            <h1>Points Rewards System</h1>
            <h2>Your Points: 260</h2>
            
        <div className="reward-card">
            <RewardsData
            img="https://cdn.shopify.com/s/files/1/0721/3671/products/e38bd83af578077b65a31424bd24d085.png?v=1571438830"
            heading="Reward 1"
            text="$20 Gift Card"/>
            <RewardsData
            img="https://cdn-icons-png.flaticon.com/512/1041/1041885.png"
            heading="Reward 2"
            text="$5 Off Your Next Purchase"/>
            <RewardsData
            img="https://www.pngall.com/wp-content/uploads/13/Buy-Get-Free-PNG-File.png"
            heading="Reward 3"
            text="Buy 1 Get 1 FREE"/>
        </div>
        </div>
    );
}

export default Rewards;