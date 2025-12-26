import { Button } from "@/components/ui/button";
import { Bell, Search, UserCircle } from "lucide-react";

export function TopNav() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between h-20 px-8 bg-background border-b shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/innov'webtech.jpg" alt="InnovWebTech Logo" className="h-10 w-auto" />
      </div>

      {/* Search Bar (UX improvement) */}
      <div className="hidden md:flex items-center w-1/3 bg-muted rounded-full px-4 py-2 border focus-within:ring-2 focus-within:ring-ring/20 focus-within:border-ring transition-all">
        <Search className="h-4 w-4 text-muted-foreground mr-2" />
        <input
          type="text"
          placeholder="Rechercher dans l'ERP..."
          className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
        />
      </div>

      {/* User actions */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-destructive rounded-full border-2 border-background"></span>
        </Button>

        <div className="flex items-center gap-3 pl-4 border-l">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@innovwebtech.com</p>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full p-0 h-10 w-10 overflow-hidden border">
              <UserCircle className="h-full w-full text-muted-foreground bg-muted" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
