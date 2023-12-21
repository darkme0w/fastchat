import { Outlet } from "react-router-dom";
import ButtonNavigation from "./ButtonNavigation";

function Layout() {
    return (
        <div className="phone-frame-im">
            <div className="turnOnOf-btn"></div>
            <div className="volume-btn">
                <div className="volume-up btn"></div>
                <div className="volume-down btn"></div>
            </div>

            <div className="phone-display bg-[#F4F0FA]">
                <Outlet/>
                {/* <div className="top-details">
                    <div className="speF"></div>
                    <div className="camF"></div>
                </div> */}
                <ButtonNavigation/>
            </div>
        </div>
    );
}

export default Layout;