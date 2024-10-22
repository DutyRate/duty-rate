"use client";

import { useState } from "react";
import CommandSearch from "~/components/ui/commandSearch";
import { useSearchParams, useRouter } from "next/navigation";

interface SearchInputProps {
  className?: string;
  intialText?: string;
  placeholder?: string;
}

export default function SearchInput(props: SearchInputProps) {
  const [inputValue, setInputValue] = useState(props.intialText ?? "");
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("searchTerm", inputValue);
    const params = new URLSearchParams(searchParams);
    if (inputValue) params.set("q", inputValue);
    router.replace(`/rate?${params.toString()}`);
  };
  return (
    <form
      onSubmit={onSearch}
      className={`${props.className ?? ""} w-2/5`}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSearch(e);
      }}
    >
      <CommandSearch
        placeholder={props.placeholder}
        commands={[]}
        className={""}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </form>
  );
}
