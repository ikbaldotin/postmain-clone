"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus, Copy, Link as LinkIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { toast } from "sonner";

import { Hint } from "@/components/ui/hint";

const InviteMember = () => {
  const [inviteLink, setInviteLink] = useState("");

  const copyToClipboard = async () => {
    if (inviteLink) {
      await navigator.clipboard.writeText(inviteLink);
      toast.success("Invite link copied to clipboard");
    }
  };

  return (
    <DropdownMenu>
      <Hint label="Invite Member">
        <DropdownMenuTrigger asChild>
          <Button className="border border-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-400 hover:text-emerald-300">
            <UserPlus className="size-4 text-emerald-400" />
          </Button>
        </DropdownMenuTrigger>
      </Hint>

      <DropdownMenuContent
        className="w-80 rounded-xl"
        align="end"
      ></DropdownMenuContent>
    </DropdownMenu>
  );
};

export default InviteMember;
