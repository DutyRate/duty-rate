"use client"
import { CommandInput, Command, CommandList, CommandItem } from "./command";
import {useState} from "react";

interface ICommandProps {
  commands: { value: string; label: string }[];
  className: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  placeholder?: string;
}

export default function CommandSearch({ commands, className, inputValue, setInputValue , placeholder}: ICommandProps) {
  const [open, setOpen] = useState(false);

  const handleValueChange = (value: string) => {
    setInputValue(value);
    setOpen(!!value);
  };

  const filteredCommands = Array.isArray(commands)
    ? commands.filter((command) =>
        command.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];

  return (
    <Command className={`rounded-[20px] shadow-sm ${className}}`}>
      <CommandInput
        placeholder={placeholder || "Type a command or search..."}
        onValueChange={handleValueChange}
        value={inputValue}
        className="w-full"
      />
      {
        <CommandList>
          {open &&
            filteredCommands.length > 0 &&
            filteredCommands.map((command) => (
              <CommandItem key={command.value} value={command.value}>
                {command.label}
              </CommandItem>
            ))}
        </CommandList>
      }
    </Command>
  );
}