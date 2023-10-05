import React from "react";
import { SectionDivider } from "../../styles/GlobalComponents";

const data = [
  {
    title: "Et liv med mening - Grønt iværksætteri og lækker mad",
    type: "Book(danish)",
    link: "https://www.saxo.com/dk/et-liv-mad-mening_bog_9788785100009",
  },
  {
    title: "Iværksætterhistorier - Gaia Madservice",
    type: "Podcast(danish)",
    link: "https://ivaerksaetterhistorier.dk/gaia-madservice/",
  },
  {
    title: "DR - Booster - Knæk koden og få flere kunder over på abonnement",
    type: "Podcast(danish)",
    link: "https://www.dr.dk/lyd/p1/booster/booster-11",
  },
  {
    title: "Veganske retter er populære: Gaia Madservice vokser til det dobbelte",
    type: "Article(danish)",
    link: "https://ugeavisen.dk/toerringfolkeblad/artikel/veganske-retter-er-popul%C3%A6re-gaia-madservice-vokser-til-det-dobbelte",
  },
  {
    title: "Andreas vil indtage den globale scene med veganske måltidskasser",
    type: "Article(danish)",
    link: "https://effektivtlandbrug.landbrugnet.dk/artikler/business/30-under-30/68403/andreas-vil-indtage-den-globale-scene-med-veganske-maaltidskasser.aspx",
  },
  {
    title: "Efter navnestrid: Stort cateringfirma er gået konkurs - men ejerne er alligevel 'utrolig stolte og taknemmelige'",
    type: "Article(danish)",
    link: "https://vafo.dk/artikel/slut-med-veganske-k%C3%B8dboller-og-tang-sushi-stort-cateringfirma-er-konkurs-efter-navnestrid",
  }
];

const Medier = () => (
  <section className="mx-md" id="medier">
    <SectionDivider divider />
    <h2>In the media</h2>
    <div className="flex flex-wrap my-12 gap-x-[4%] gap-y-8 md:gap-8">
      {data.map((item, index) => (
        <a href={item.link} target="_blank" key={index} className="basis-[48%] md:min-w-[240px] max-w-[320px]">
        <p className="uppercase text-lg md:text-xl">{item.type}</p>
          <h5>{item.title}</h5>
        </a>
      ))}
    </div>
  </section>
);

export default Medier;
