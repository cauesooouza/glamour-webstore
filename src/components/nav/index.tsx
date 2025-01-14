import {CircleUserRound, ShoppingCart} from "lucide-react";
import NavigationMenu from "./menu";


export default function Nav() {

    return (
        <div className="bg-white shadow-md sticky top-0 z-10">
            <div className="container py-5 px-4 flex justify-between">
                <div className="flex gap-4 items-center">
                    <NavigationMenu isMobile={true}/>
                    <span className="font-anton text-2xl md:text-3xl">
                        <a href="/">
                            Glamour
                        </a>
                    </span>

                    <NavigationMenu isMobile={false}/>
                </div>
                <div className="flex gap-4 items-center relative">
                    <button>
                        <ShoppingCart/>
                    </button>
                    <a href="/login">
                        <CircleUserRound/>
                    </a>
                </div>
            </div>
        </div>
    );
}
