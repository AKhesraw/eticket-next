import Link from "next/link";

export default function QuickLinkItem({ children, href }) {
  return (
    <Link
      href={href}
      className="group flex w-full items-center px-3 py-3 text-base font-medium rounded-md text-[hsl(var(--quick-nav-item))] hover:text-[hsl(var(--quick-nav-item-hover))] transition-all duration-200 ease-in-out hover:bg-primary/5 active:bg-primary/10"
    >
      {children}
    </Link>
  );
}