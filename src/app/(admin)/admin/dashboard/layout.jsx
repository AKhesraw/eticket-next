import { Sidebar } from "@/components/navigation/sidebar"


import MainNav from "@/components/navigation/main-nav"
import BreadCrumbs from "@/components/utils/bread-crumbs"
export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex h-screen overflow-hidden">
    
      <main className='flex-1 overflow-y-auto bg-background'>
      <header className="sticky top-0 z-50 bg-background">
        <MainNav />
        <BreadCrumbs
          links={[{ label: "Search", route: "/search", current: true }]}
        />
      </header>
      <div className="bg-background max-w-7xl py-8 mx-auto px-8 md:px-8 lg:px-8 xl:px-0">
        {children}
      </div>
      </main>
    
    </div>
  )
}

