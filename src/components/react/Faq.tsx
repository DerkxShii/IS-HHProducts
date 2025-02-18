import {Accordion, AccordionItem} from "@heroui/react";
import React from "react";

export default function App() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-3 sm:py-32 lg:px-8 lg:py-6">
        <header className= "mb-10">    
            <h1 className="text-4xl font-bold text-center" >Preguntas Frecuentes</h1>    
        </header> 
        <Accordion variant="shadow">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                HandHeld 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Adipisci dolor aut tenetur ullam maxime officiis voluptates incidunt provident fugit aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Adipisci dolor aut tenetur ullam maxime officiis voluptates incidunt provident fugit aperiam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Adipisci dolor aut tenetur ullam maxime officiis voluptates incidunt provident fugit aperiam.
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                HandHeld 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Similique ab, rerum accusantium omnis reprehenderit facere?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Similique ab, rerum accusantium omnis reprehenderit facere?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Similique ab, rerum accusantium omnis reprehenderit facere?
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                HandHeld 3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, fugiat!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, fugiat!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, fugiat!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, fugiat!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, fugiat!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, fugiat!
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
                HandHeld 4: Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
            </AccordionItem>
        </Accordion>
    </section>
    
  );
}
