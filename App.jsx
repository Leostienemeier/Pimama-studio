import { useState } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Calendar } from "./components/ui/calendar";
import { Select, SelectItem } from "./components/ui/select";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [language, setLanguage] = useState("de");

  const courses = [
    { name: "Sunrise Flow", duration: "60 Min", intensity: "Mittel", trainer: "Anna", spots: 3 },
    { name: "Deep Core", duration: "45 Min", intensity: "Hoch", trainer: "Lucia", spots: 5 },
    { name: "Relax Stretch", duration: "50 Min", intensity: "Niedrig", trainer: "Sofia", spots: 2 }
  ];

  const texts = {
    de: {
      title: "PiMaMa Studio",
      about: "Über uns",
      philosophy: "Unsere Philosophie",
      location: "Unsere Location",
      book: "Kurs buchen",
      contact: "Kontakt"
    },
    en: {
      title: "PiMaMa Studio",
      about: "About Us",
      philosophy: "Our Philosophy",
      location: "Our Location",
      book: "Book a Class",
      contact: "Contact"
    },
    es: {
      title: "PiMaMa Studio",
      about: "Sobre nosotros",
      philosophy: "Nuestra filosofía",
      location: "Nuestra ubicación",
      book: "Reservar clase",
      contact: "Contacto"
    }
  };

  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{texts[language].title}</h1>
        <Select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <SelectItem value="de">DE</SelectItem>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="es">ES</SelectItem>
        </Select>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{texts[language].about}</h2>
        <p className="mb-4">Wir sind ein minimalistisches Boutique-Studio im Herzen von Palma, das Körper & Geist verbindet.</p>
        <h2 className="text-xl font-semibold mb-2">{texts[language].philosophy}</h2>
        <p className="mb-4">Unsere Kurse verbinden traditionelle Pilates-Prinzipien mit moderner Achtsamkeit.</p>
        <h2 className="text-xl font-semibold mb-2">{texts[language].location}</h2>
        <p className="mb-4">Carrer de la Pau 15, Palma – mit Innenhof, Naturlicht und Matcha-Bar.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{texts[language].book}</h2>
        <Calendar selected={date} onSelect={setDate} className="mb-4" />
        <div className="grid gap-4">
          {courses.map((course) => (
            <Card key={course.name}>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{course.name}</h3>
                <p>Dauer: {course.duration}</p>
                <p>Intensität: {course.intensity}</p>
                <p>Trainerin: {course.trainer}</p>
                <p>Verfügbare Plätze: {course.spots}</p>
                <Button className="mt-2">Jetzt buchen</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="mt-10 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">{texts[language].contact}</h2>
        <p>Email: info@pilatespalma.com</p>
        <p>Instagram: <a className="text-blue-600 underline" href="https://www.instagram.com/pilatespalma" target="_blank">@pilatespalma</a></p>
      </footer>
    </div>
  );
}
