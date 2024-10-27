import { SidebarTrigger } from "./ui/sidebar";
import { NavUser } from "./nav-user";
import { List } from "@phosphor-icons/react/dist/ssr";

const user = {
  name: "Elon Musk",
  role: "admin",
  avatar: "/gojo.jpg",
};

export function AppNavbar() {
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 justify-between bg-sidebar border-b">
      <nav className="w-full flex gap-6 justify-between sm:justify-end">
        <SidebarTrigger
          size="lg"
          className="h-12 w-12 bg-sidebar-foreground text-sidebar-accent hover:bg-sidebar-foreground active:bg-sidebar-foreground hover:text-sidebar-accent active:text-sidebar-accent p-0 [&_svg]:size-8 flex sm:hidden"
        >
          <List />
        </SidebarTrigger>

        <NavUser user={user} />
      </nav>
    </header>
  );
}
