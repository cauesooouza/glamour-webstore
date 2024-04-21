import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface MenuProps {
    isMobile: Boolean
}

export default function NavigationMenu({ isMobile }: MenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        open: { x: 0, display: "flex"},
        closed: { x: "-100%", display: "hidden" }
    }

    if (isMobile) {
        return (
            <>
                <nav className="ml-8 text-sm flex lg:hidden">
                    <button type="button" title="Menu" className="flex lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <Menu />
                    </button>

                    <motion.div animate={isOpen ? "open" : "closed"} variants={variants} className="absolute bg-white right-0 top-[72px] w-screen z-10 hidden justify-center items-center shadow-md">
                        <ul className="flex flex-col gap-8 my-4">
                            <a href="#">
                                <li >Ofertas</li>
                            </a>
                            <a href="#">
                                <li >Verão</li>
                            </a>
                            <a href="#">
                                <li>Inverno</li>
                            </a>
                            <a href="#">
                                <li>Feminino</li>
                            </a>
                            <a href="#">
                                <li>Masculino</li>
                            </a>
                        </ul>
                    </motion.div>
                </nav>
            </>
        )
    } else {
        return (
            <nav className="ml-8 text-sm hidden lg:flex">
                <ul className="flex gap-8">
                    <li >Ofertas</li>
                    <li >Verão</li>
                    <li >Inverno</li>
                    <a href="#">
                        <li>Feminino</li>
                    </a>
                    <a href="#">
                        <li>Masculino</li>
                    </a>
                </ul>
            </nav>
        )
    }
}