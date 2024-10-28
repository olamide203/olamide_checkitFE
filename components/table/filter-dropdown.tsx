import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/store/hooks";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Filter } from "lucide-react";
import { FilterField, setFilterField } from "@/app/lib/store/capsuleSlice";

interface Option {
  value: FilterField;
  label: string;
}

export function FilterDropdown({
  onValueChange,
}: {
  onValueChange: () => void;
}) {
  const filterField = useAppSelector((state) => state.capsules.filterField);
  const dispatch = useAppDispatch();

  const handleFilterChange = (value: string) => {
    dispatch(setFilterField(value as FilterField));
    onValueChange();
  };

  const options: Option[] = [
    { value: "status", label: "status" },
    { value: "original_launch", label: "original launch" },
    { value: "type", label: "type" },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Filter />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={filterField}
          onValueChange={handleFilterChange}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem value={option.value} key={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
