"use client";

import { toast } from "~/components/ui/use-toast";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { api } from "~/trpc/react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { useState } from "react";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  location: z.string().min(1, {
    message: "Location is required",
  }),
  desc: z.string().min(1, {
    message: "Please enter a brief decription",
  }),
  img: z.string().optional(),
  url: z.string().url(),
});

export function CreateForm() {
  const createLogistics = api.logistics.create.useMutation({
    onSuccess: async (data) => {
      console.log("Created Successfully");
      // Use a toast alert here
      toast({
        title: "Logistics Created!",
      });
      setOpen(false);
    },
    onError: async (error) => {
      console.error("Error creating company", error);
      // Use a toast alert here
    },
  });

  const submitData = async (
    data: z.infer<typeof FormSchema>,
  ) => {
    console.log(data);
    createLogistics.mutate({ ...data, img: "/glovo.jpg" });
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      desc: "",
      location: "",
      img: "",
      url: "https://",
    },
  });
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Create Logistics comapany</Button>
      </DialogTrigger>
      <DialogContent className="max-h-full overflow-y-auto sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Logistics company</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitData)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center">
                <Label htmlFor="picture">Logo</Label>
                <Input
                  id="picture"
                  className="col-span-3 h-[50px] items-center text-wrap border border-2 border-dashed text-center"
                  type="file"
                />
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center">
                    <FormLabel className="text-left">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name of logistics"
                        className="col-span-3"
                        {...field}
                      />
                    </FormControl>
                    <div className="col-span-1" />
                    <FormMessage className="col-span-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center">
                    <FormLabel className="text-left">Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Brief description"
                        className="col-span-3"
                        {...field}
                      />
                    </FormControl>
                    <div className="col-span-1" />
                    <FormMessage className="col-span-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center">
                    <FormLabel className="text-left">Location</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Abuja, Nigeria"
                        className="col-span-3"
                        {...field}
                      />
                    </FormControl>
                    <div className="col-span-1" />
                    <FormMessage className="col-span-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center">
                    <FormLabel className="text-left">Website</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://company.com"
                        className="col-span-3"
                        {...field}
                      />
                    </FormControl>
                    <div className="col-span-1" />
                    <FormMessage className="col-span-3" />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
