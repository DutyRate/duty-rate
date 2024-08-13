"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutForm() {
  const router = useRouter();
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-center text-2xl font-bold">Logout</CardTitle>
        <CardDescription>Log out of your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full"
          onClick={async () => {
            await signOut();
            router.push("/");
          }}
        >
          Log Out
        </Button>
      </CardContent>
    </Card>
  );
}
