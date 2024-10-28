"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CardHeader, Card, CardTitle, CardContent } from "@/components/ui/card";
import { sapaceMono, spaceGrotesk } from "@/app/ui/fonts";
import { useAppSelector } from "@/app/lib/store/hooks";

export function AppCards() {
  const capsules = useAppSelector((state) => state.capsules.items);
  const active = capsules.reduce((acc, curr) => {
    if (curr.status == "active") {
      acc++;
    }
    return acc;
  }, 0);
  const destroyed = capsules.reduce((acc, curr) => {
    if (curr.status == "destroyed") {
      acc++;
    }
    return acc;
  }, 0);

  const stats = [
    { title: "total capsules", stat: capsules.length },
    { title: "total active capsules", stat: active },
    { title: "total destroyed capsules", stat: destroyed },
  ];

  return (
    <ScrollArea>
      <div className="flex flex-row gap-8 w-fit whitespace-nowrap py-4 max-w-screen-sm">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle
                className={`${spaceGrotesk.className} capitalize text-lg`}
              >
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className={`${sapaceMono.className}`}>
              {stat.stat}
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
