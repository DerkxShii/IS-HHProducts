import {Accordion, AccordionItem} from "@heroui/react";
import React from "react";

export default function App() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-3 sm:py-32 lg:px-8 lg:py-6 mb-5">
        <header className= "mb-10">    
            <h1 className="text-4xl font-bold text-center" >Preguntas Frecuentes</h1>    
        </header> 
        <Accordion variant="shadow">
            <AccordionItem key="1" aria-label="Accordion 1" title="¿El plan de renta incluye software?">
            Si, incluye SOFTWARE (Inventarios Windows Mobile e Inventarios Android), accesorios de carga y comunicación para cubrir el número de equipos 
            solicitados, además de una batería de respaldo por equipo. Y un equipo de respaldo (en rentas mayores a 20 equipos).
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="¿La entrega puede ser en otro Estado?">
            Si, en este caso deberá de considerarse costo de mensajería, y tipo de envío que puede ser express 24 hrs. O estándar 
            con un estimado de entrega de tres a cinco días hábiles. O bien si el cliente desea una mensajería en particular 
            (ETN, Flecha roja) "La entrega dentro de la ciudad de México y área metropolitana va por nuestra cuenta".
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="¿La entrega del equipo puede ser antes del período de renta?">
            Si, la entrega puede ser días antes del inicio de la operación a solicitud del cliente. Con ello se da tiempo para 
            la preparación interna de los equipos.
            </AccordionItem>
            <AccordionItem key="4" aria-label="Accordion 4" title="¿Podemos tener un técnico en sitio para el día de arranque (inventario)?">
            Si, este servicio cuenta con un precio adicional.
            </AccordionItem>
        </Accordion>
    </section>
    
  );
}
