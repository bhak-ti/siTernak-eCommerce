import { useParams } from "react-router-dom";
import UserPage from "./UserPage";
import SideMenu from "./SideMenu";
import TransactionList from "./TransactionList";
import TabsDashboard from "./TabsDashboard";
import StorePage from "./StorePage";

// status 1 = user biasa, selain itu seller
const userStatus = 2;

const UserProfile = () => {
  let { type } = useParams();

  return (
    <div className="mt-3">
      <div
        className="mycontainer mobile:mycontainerfull py-7 gap-x-7 grid"
        style={{ gridTemplateColumns: "1.2fr 5fr" }}
      >
        <div>
          <SideMenu userStatus={userStatus} />
        </div>
        {type === "bio" && <UserPage />}
        {type === "bio_seller" && <StorePage />}
        {type === "pengiriman" && <TabsDashboard />}
        {type === "pesanan" && <TransactionList />}
      </div>
    </div>
  );
};

export default UserProfile;
