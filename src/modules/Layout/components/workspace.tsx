"use client";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import { Loader, Plus, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
const Workspace = () => {
  return (
    <>
      <Hint label="Change Workspace">
        {/* The Button component with specific Tailwind styling */}
        <Button
          className="
          // Basic layout (Flex container for icon and text)
          flex flex-row items-center space-x-1 p-2 rounded 
          
          // Default State (Indigo-400 theme)
          border border-indigo-400 
          bg-indigo-400/10 
          text-indigo-400 
          
          // Hover State (Slightly darker background, slightly lighter text)
          hover:bg-indigo-400/20 
          hover:text-indigo-300
          
          // Smooth transition for hover effects
          transition duration-150 ease-in-out
        "
        >
          {/* User Icon */}
          <User className="size-4 text-indigo-400" />

          {/* Workspace Name Text */}
          <span className="text-sm font-semibold">Personal Workspace</span>
        </Button>
      </Hint>
    </>
  );
};

export default Workspace;
