'use client'

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavSubMenu from "@/components/navigation/nav-sub-menu";
import Link from "next/link"; // Import Link from Next.js

export default function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative rounded-ful"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={item.href || "#"} passHref>
        <button
          className={cn(
            "group inline-flex items-center px-3 py-3 text-base font-medium rounded-full",
            "text-gray-600 dark:text-gray-400 dark:hover:text-primary hover:text-primary",
            "transition-all duration-200 ease-in-out",
            "hover:bg-primary/5 active:bg-primary/10 dark:active:bg-primary/10",
            isOpen &&
              "text-primary bg-primary/5 dark:bg-primary/5 dark:text-primary"
          )}
        >
          <div className="relative">
            <item.icon
              className={cn(
                "h-4 w-4 mr-2 transition-transform duration-200",
                "group-hover:scale-110",
                isOpen && "scale-110"
              )}
            />
            {isOpen && (
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-lg"
                layoutId="glow"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </div>
          <p className="text-xs whitespace-nowrap">{item.label}</p>
          {item.items && (
            <ChevronDown
              className={cn(
                "ml-1 h-5 w-5 transition-transform duration-200",
                isOpen && "transform rotate-180"
              )}
            />
          )}
        </button>
      </Link>

      <AnimatePresence>
        {item.items && isOpen && <NavSubMenu items={item.items} />}
      </AnimatePresence>
    </div>
  );
}
