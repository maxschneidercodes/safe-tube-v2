import Header from "@/components/ui/header";
import Link from "next/link";

export default function Imprint() {
  return (
    <>
      <Header extraCSS="shadow-2xl " title="SafeTube.eu" titleCSS="text-white">
        <Link
          className="btn-sm text-sm inline-flex items-center text-white bg-red-500 hover:bg-red-600 group shadow-sm"
          href="/feed"
        >
          zum Feed
        </Link>
      </Header>
      <div className="container p-4 text-white">
        <h1 className="h2 text-blue-500">Impressum</h1>
        <p className="text-gray-500 p-4">
          Angaben gemäß Informationspflicht laut § 5 Telemediengesetz (TMG).
        </p>

        <h2 className="h4 text-blue-500 mt-4">Anschrift und Kontakt</h2>
        <div className="p-4">
          <p className="">
            Max Schneider
            <br />
            Lindauerstrasse 63, <br />
            53842 Troisdorf, <br />
            Deutschland
          </p>
          <div className="mt-4">
            <p className="">
              Email:{" "}
              <a
                className="text-blue-500  hover:underline"
                href="mailto:info@maxschneidercodes.de"
              >
                info@maxschneidercodes.de
              </a>
            </p>
            <p className="">Berufsbezeichnung: Web-Entwickler</p>
          </div>
        </div>

        <h1 className="h4 text-blue-500 mt-6">Haftungsausschluss</h1>
        <div className="p-4 mt-2">
          <h2 className="text-blue-500 ">Haftung für Inhalte</h2>
          <p className="mt-2">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mt-2">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den all­gemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>

          <h2 className="text-blue-500 mt-6">Haftung für Links</h2>
          <p className="mt-2">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p className="mt-2">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>

          <h2 className="text-blue-500 mt-6">Urheberrecht</h2>
          <p className="mt-2">
            {" "}
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheber­rechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p className="mt-2">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
    </>
  );
}
