import {CircleUserRound, ShoppingCart} from "lucide-react";
import NavigationMenu from "./menu";
import {NavLink} from "react-router";


export default function Nav() {

    return (
        <div className="bg-white shadow-md sticky top-0 z-10">
            <div className="container py-5 px-4 flex justify-between">
                <div className="flex gap-4 items-center">
                    <NavigationMenu isMobile={true}/>
                    <span className="font-anton text-2xl md:text-3xl">
                        <NavLink to="/">
                            Glamour
                        </NavLink>
                    </span>

                    <NavigationMenu isMobile={false}/>
                </div>
                <div className="flex gap-4 items-center relative">
                    <button>
                        <ShoppingCart/>
                    </button>
                    <NavLink to="/login">
                        <CircleUserRound/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
