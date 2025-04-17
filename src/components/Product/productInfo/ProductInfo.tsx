export default function ProductInfo() {
  return (
    <div className="border-t-2 border-gray-100 pt-10 w-full p-3 flex flex-col xxs:text-lg">
       <h1 className="text-xl xs:text-2xl font-bold mb-3">Om produktet</h1>

        <p className="my-2">Hort1 Greenline kombinerer kraft, teknologi og komfort i én solid pakke – laget for både bykjøring og krevende terreng. Med en kraftig Bafang-motor og et dreiemoment på 65Nm+, får du en jevn og kraftfull opplevelse, spesielt i motbakker og ved tunge belastninger. </p>
        <p className="my-2">
        Et stort pluss er den innebygde EPAS-teknologien (Energy Power Assist System). Denne funksjonen gjør det mulig å lade batteriet når du sykler i nedoverbakke og tråkker på pedalene. Det forlenger batteriets levetid og gir ekstra rekkevidde – perfekt for lengre turer eller dager hvor du ikke har tilgang på lading.
        </p>
        <div className="my-5">
          <h2 className="font-semibold">Tre moduser – tilpasset din kjørestil:</h2>
          <ul className="list-disc mx-10">
            <li>Sykle selv – bruk beina 100%, som en vanlig sykkel</li>
            <li>Kombinasjonsmodus – få motorassistanse mens du tråkker</li>
            <li>Full assistanse – len deg tilbake og la sykkelen gjøre jobben</li>
          </ul>
        </div>
        <p className="my-2">
        Sykkelen er utstyrt med hydrauliske skivebremser fra Shimano, som gir presis og pålitelig bremsekraft, selv i regn eller på sleipt underlag. Sammen med Shimano 27-girsystemet får du smidig og effektiv giring som takler alle typer stigning og underlag.
        </p>
        <p className="my-2">
        For optimal komfort har modellen både en låsebar frontdemper og bakfjæring, som demper støt og vibrasjoner – enten du sykler i byen eller på grusvei. Du får en jevn og behagelig kjøreopplevelse, selv på ujevne strekninger.
        </p>
        <p className="my-2">
        Det integrerte LED-frontlyset sørger for god sikt i mørket og øker sikkerheten betraktelig, mens den brukervennlige LCD-fargeskjermen gir deg full oversikt over fart, batteristatus og valgt kjøremodus – alt tilgjengelig med et raskt blikk.
        </p>
    </div>
  );
}