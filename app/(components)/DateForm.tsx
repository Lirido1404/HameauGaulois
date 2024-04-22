// DateForm.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

function DateForm() {
  const router = useRouter();

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState<{
    date: Date | undefined;
    title: string;
    content: string;
  }>({ date: undefined, title: "", content: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    // Convertir la date en chaîne de caractères au format local
    const dateString = date?.toLocaleDateString();

    const dataToSend = {
      ...formData,
      date: dateString,
    };

    const res = await fetch("/api/Date", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
      // Afficher un message d'erreur plus descriptif que "not ok"
      alert(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="space-y-1">
        <Label htmlFor="date" className="text-white">Date</Label>
        
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow bg-white text-black w-64"
          />
        
        <p className="text-white">{date?.toLocaleDateString()}</p>
      </div>
      <div className="space-y-1">
        <Label htmlFor="title" className="text-white">
          Titre
        </Label>
        <Input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          required
          value={formData.title}
          placeholder="Titre"
          className="text-white"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="content" className="text-white">
          Contenu
        </Label>
        <Input
          type="text"
          name="content"
          id="content"
          onChange={handleChange}
          required
          value={formData.content}
          placeholder="Contenu"
          className="text-white"
        />
      </div>
      <Button type="submit" className="mt-4">
        Ajouter
      </Button>
    </form>
  );
}

export default DateForm;
