import Image from "next/image";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { CreateForm } from "./_components/createForm";
import { api } from "~/trpc/server";

export default async function Dashboard() {
  const logistics = await api.logistics.getLatest({});

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Logistics</h1>
      </div>
      <div className="flex flex-1 flex-col items-center justify-start rounded-lg border border-dashed shadow-sm">
        <div className="my-8 flex items-center justify-center gap-4 text-center">
          <CreateForm />
        </div>

        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="hidden md:table-cell">Id</TableHead>
              <TableHead className="hidden w-[100px] sm:table-cell">
                Image
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="hidden md:table-cell">Desciption</TableHead>
              <TableHead className="hidden md:table-cell">Website</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {logistics &&
              logistics.map((logistic, i) => (
                <TableRow key={logistic.id}>
                  <TableCell className="hidden md:table-cell">
                    {logistic.id}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt="Product image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={logistic.img}
                      width="64"
                    />
                  </TableCell>

                  <TableCell className="font-medium">{logistic.name}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {logistic.location}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {logistic.desc}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {logistic.url}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatDate(logistic.createdAt)}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-6 w-6" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Pencil className="text-red mr-2" size={15} />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2" size={15} /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-2</strong> of <strong>{logistics.length}</strong> companies
        </div>
      </div>
    </main>
  );
}

const formatDate = (date: Date) => {
  new Date(date);
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes} on ${day}-${month}-${year}`;
};
