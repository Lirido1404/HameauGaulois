"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function LoginForm() {
  const router = useRouter();
  //  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*  const handleError = () => {
      toast({
        variant: "destructive",
        title: (
          <h3 className="text-white font-bold">
            Identifiants incorrects, veuillez réessayer.
          </h3>
        ),
      });
    }; */

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
    });

    if (result && !result.error) {
      // handleError();
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {" "}
          <h2 className="text-3xl font-bold">Connexion</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <form onSubmit={handleSignIn} method="post">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-black">
              Email
            </Label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password" className="text-black">
              Mot de passe
            </Label>
            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Input
            type="submit"
            value={"Se connecter"}
            className="border-[#25723B] font-bold flex justify-center text-black hover:bg-[#25723B] ease-in-out duration-200 cursor-pointer"
          />
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
