'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"

function DateForm() {

    /*
    const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ date: date, title: "",content:"" });
  const [errorMessage, setErrorMessage] = useState(""); 
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  // Fonction pour formater la date
  const formatDate = (date: Date | undefined): string => {
      if (!date) return ""; // Si la date est indéfinie, retournez une chaîne vide
      return date.toLocaleDateString(); // Formater la date en format local
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Date", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
      alert("not ok");
    } else {
      router.refresh();
      router.push("/");
    }
  }; */
  return (
    <> {/*
    <form onSubmit={handleSubmit} method="post">
          <div className="space-y-1">
            <Label htmlFor="date">Date</Label>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow bg-white text-black"
                
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="title">Mot de passe</Label>
            <Input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              required={true}
              value={formData.title}
              placeholder="Mot de passe"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="content">Mot de passe</Label>
            <Input
              type="text"
              name="content"
              id="content"
              onChange={handleChange}
              required={true}
              value={formData.content}
              placeholder="Mot de passe"
            />
          </div>
          <Button type="submit" className="mt-4">M&apos;enregistrer</Button>
          
  </form> */}
    </>
  )
}

export default DateForm