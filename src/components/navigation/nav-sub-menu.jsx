import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavSubMenu({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: -10 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
      className="absolute left-0 mt-2 w-96 rounded-lg bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black/5 z-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="relative bg-white dark:bg-slate-800">
        <div className="p-2 grid gap-2 grid-cols-2">
          {items.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`group relative overflow-hidden rounded-lg border p-4 transition-all hover:shadow-md ${
                index === 0
                  ? "bg-gradient-to-br from-primary to-primary dark:from-slate-900 text-white col-span-full"
                  : "dark:bg-slate-900 hover:bg-sky-50 dark:hover:bg-slate-700"
              }`}
            >
              <div className="relative z-10 flex flex-col gap-2">
                <item.icon
                  className={`h-6 w-6 ${
                    index === 0 ? "text-sky-100" : "text-primary-light"
                  }`}
                />
                <div>
                  <h3
                    className={`font-medium ${
                      index === 0 ? "text-white" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </h3>
                  <p
                    className={`text-sm ${
                      index === 0 ? "text-sky-100" : "text-muted-foreground"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}