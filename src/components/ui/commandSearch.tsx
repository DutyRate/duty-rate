"use client"
import { CommandInput, Command, CommandList, CommandItem } from "./command";
import {useState} from "react";

interface ICommandProps {
  commands: { value: string; label: string }[];
  className: string;
  inputValue: string;
  setInputValue: (value: string) => void;
}

export default function CommandSearch({ commands, className, inputValue, setInputValue }: ICommandProps) {
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
        placeholder="Type a command or search..."
        onValueChange={handleValueChange}
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