'use client'
import {useState} from "react";
import Link from "next/link";
import {ChevronDown} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import NavSubMenu from "@/components/navigation/nav-sub-menu";

export default function NavItem({item, active}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative rounded-full" onMouseEnter={() => setIsOpen(true)}
             onMouseLeave={() => setIsOpen(false)}>
            {item.items ? (
                <button onClick={() => setIsOpen(!isOpen)} className={`group nav-link ${isOpen || active && "nav-link-active"}`}>
                    <div className="relative">
                        <item.icon
                            className={`h-4 w-4 mr-2 transition-transform duration-200 group-hover:scale-110 ${isOpen || active && "scale-110"}`}/>
                        {isOpen && (
                            <motion.div
                                className="absolute inset-0 bg-primary/50 rounded-full blur-lg"
                                layoutId="glow"
                                transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                            />
                        )}
                    </div>
                    <p className="text-xs whitespace-nowrap">{item.label}</p>
                    {item.items && (
                        <ChevronDown
                            className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${isOpen && 'rotate-180'}`}/>
                    )}
                </button>
            ) : (
                <Link href={item.href} className={`group nav-link ${isOpen || active && "nav-link-active"}`}>
                    <div className="relative">
                        <item.icon
                            className={`h-4 w-4 mr-2 transition-transform duration-200 group-hover:scale-110 ${isOpen || active && "scale-110"}`}/>
                        {isOpen && (
                            <motion.div
                                className="absolute inset-0 bg-primary/50 rounded-full blur-lg"
                                layoutId="glow"
                                transition={{type: "spring", bounce: 0.2, duration: 0.6}}
                            />
                        )}
                    </div>
                    <p className="text-xs whitespace-nowrap">{item.label}</p>
                    {item.items && (
                        <ChevronDown className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${isOpen && 'rotate-180'}`}/>
                    )}
                </Link>
            )}
            <AnimatePresence>
                {item.items && isOpen && <NavSubMenu items={item.items}/>}
            </AnimatePresence>
        </div>
    );
}