"use client";

// React hook form
import { type SubmitHandler, useForm } from "react-hook-form";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";


import { type User } from "@prisma/client";

import { signIn } from "next-auth/react";
import { useToast } from "~/components/ui/use-toast";

export default function LoginForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm<User>({});


  const submitData: SubmitHandler<User> = async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/",
      redirect: true,
    });
    console.log(response);

    if (!response) toast({
      variant: "destructive",
      description: "Unable to sign you in",
    });
  };
  return (
    <form onSubmit={() => handleSubmit(submitData)}>
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl font-bold">
            Login
          </CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                {...register("email")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                {...register("password")}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
