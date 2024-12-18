/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import faq from "../api/faq.json";
import { Faq } from "./Faq";
interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const Accordion = () => {
  const [data, setData] = useState<FAQ[]>([]);
  const [activeId, seActiveId] = useState<number | null>(null)

  useEffect(() => {
    setData(faq);
  }, []);

  const handleButton = (id:any) => {
    seActiveId((prev) => (prev === id ? false : id))
  }
  return (
    <>
      <div className="accordionWrap">
        <h2>The Accordion</h2>
        <ul>
          {data.map((curElem) => {
            return <Faq 
            key={curElem.id} 
            curData={curElem} 
            isActive={activeId === curElem.id } 
            onToggle = {() => handleButton(curElem.id)}
            />
          })}
        </ul>
      </div>
    </>
  );
};
