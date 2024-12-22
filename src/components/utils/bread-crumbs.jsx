import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BreadCrumbs({ links = [] }) {
  return (
    <div className="shadow-sm bg-white/30 dark:bg-black">
      <div className="max-w-[1366px] mx-auto bg-white/30 dark:bg-black px-4 desktop:px-12">
        <div className="flex h-9">
          {links.map((link, index) => (
            <div
              className="flex items-center gap-1 text-sm text-muted-foreground"
              key={index}
            >
              {link.current ? (
                <span className="h-auto p-0 text-xs text-muted-foreground hover:text-primary">
                  {link.label}
                </span>
              ) : (
                <Link
                  href={link.route}
                  variant="link"
                  className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              )}
              <ChevronRight className="h-4 w-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
