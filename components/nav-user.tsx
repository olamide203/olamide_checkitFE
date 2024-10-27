import { Bell } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    role: string;
    avatar: string;
  };
}) {
  return (
    <div className="flex flex-row gap-2">
      <div className="h-full flex items-center justify-center">
        <Bell size={30} weight="fill" color="hsl(240 5.3% 26.1%)" />
        <Badge className="relative -left-4 self-start flex items-center justify-center w-fit leading-tight rounded-full  px-1.5 text-[12px] py-0 bg-neutral-300 text-neutral-700">
          22
        </Badge>
      </div>
      <div className="flex flex-1 flex-col text-right text-sm leading-tight items-end justify-center">
        <span className="truncate text-base">{user.name}</span>
        <span className="truncate text-sm capitalize text-neutral-500">
          {user.role}
        </span>
      </div>
      <Avatar className="h-12 w-12 rounded-full border border-black">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback className="rounded-lg">EM</AvatarFallback>
      </Avatar>
    </div>
  );
}
