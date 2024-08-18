"use client";

import { useState } from "react";
import CommandSearch from "~/components/ui/commandSearch";
export default function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("searchTerm", inputValue);
  };
  return (
    <form
      onSubmit={onSearch}
      className="w-2/5"
      onKeyDown={(e) => {
        if (e.key === "Enter") onSearch(e);
      }}
    >
      <CommandSearch
        commands={[]}
        className=""
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </form>
  );
}
