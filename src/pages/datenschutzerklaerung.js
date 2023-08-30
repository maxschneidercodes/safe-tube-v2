import Header from "@/components/ui/header";
import Link from "next/link";

export default function DataProtectionPage() {
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
      <div className="p-4 text-white bg-gray-100">
        <h1 className="h3 text-gray-100">Datenschutzerklärung</h1>

        <h2 className="h4 text-blue-500 mt-8">
          Warum erfassen wir personenbezogene Daten
        </h2>
        <div className="p-4">
          <p>
            SafeTube.eu verarbeitet personenbezogene Daten zu folgendem
            Zweckenum um die Dienste von SafeTube.eu anzubieten und verbessern
            zu können.
          </p>
        </div>

        <h1 className="h4 text-blue-500 mt-6">
          Wie erfassen und verarbeiten wir personenbezogene Daten
        </h1>
        <div className="p-4 mt-2">
          <p className="">
            SafeTube.eu nutzt externe Dienstleister zur Erfassung und
            Verarbeitung der erhobenen personenbezogenen Daten. Im Folgenden
            werden diese Dienstleister und deren Funktionsweise aufgeführt.
          </p>
          <h3 className="h4 text-blue-500 mt-6">
            Verarbeitung der Nutzerdaten
          </h3>
          <h3 className="h5 text-blue-500 mt-6">Cookies</h3>
          <p className="mt-2">
            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
            sind kleine Textdateien, die auf Deinem Rechner abgelegt werden und
            die Dein Browser speichert. Cookies richten auf Deinem Rechner
            keinen Schaden an und enthalten keine Viren. Cookies dienen dazu,
            unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>
          <p className="mt-2">
            Die meisten der von uns verwendeten Cookies sind so genannte
            „Session-Cookies”. Sie werden nach Ende Deines Besuchs automatisch
            gelöscht. Andere Cookies bleiben auf Deinem Endgerät gespeichert bis
            Du diese löschst. Diese Cookies ermöglichen es uns, Deinen Browser
            beim nächsten Besuch wiederzuerkennen.
          </p>
          <p className="mt-2">
            Du kannst Deinen Browser so einstellen, dass Du über das Setzen von
            Cookies informiert wirst und Cookies nur im Einzelfall erlauben, die
            Annahme von Cookies für bestimmte Fälle oder generell ausschließen
            sowie das automatische Löschen der Cookies beim Schließen des
            Browser aktivieren. Bei der Deaktivierung von Cookies kann die
            Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p className="mt-2">
            Cookies, die zur Durchführung des elektronischen
            Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Dir
            erwünschter Funktionen erforderlich sind, werden auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO gespeichert. Unser berechtigtes Interesse
            an der Speicherung von Cookies liegt in der Ermöglichung einer
            technisch fehlerfreien und optimierten Bereitstellung unserer
            Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Deines
            Surfverhaltens) gespeichert werden, werden diese in dieser
            Datenschutzerklärung gesondert behandelt.
          </p>
          <h3 className="h5 text-blue-500 mt-6">Server-Log-Dateien</h3>
          <p className="mt-2">
            Wir als Provider der Webseiten erheben und speichern automatisch
            Informationen in so genannten Server-Log-Dateien, die Dein Browser
            automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="mt-2 list-disc">
            <li>- Browsertyp und Browserversion</li>
            <li>- verwendetes Betriebssystem</li>
            <li>- Referrer URL</li>
            <li>- Hostname des zugreifenden Rechners</li>
            <li>- Uhrzeit der Serveranfrage</li>
            <li>- IP-Adresse</li>
          </ul>
          <p className="mt-2">
            Eine Zusammenführung dieser Daten mit anderen personenbezogenen
            Datenquellen wird nicht vorgenommen.
          </p>
          <p className="mt-2">
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Unser berechtigtes Interesse an der Verarbeitung von
            Server-Log-Files liegt in der Ermöglichung einer technisch
            fehlerfreien Darstellung und Optimierung unserer Webseite.
          </p>
          <p>YouTube mit erweitertem Datenschutz</p>
          <p>
            Unsere Website nutzt Plugins der Website YouTube. Betreiber der
            Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066,
            USA. Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser
            Modus bewirkt, dass YouTube keine Informationen über die
            Besucher*innen auf dieser Webseite speichert, bevor diese sich das
            Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird
            durch den erweiterten Datenschutzmodus hingegen nicht zwingend
            ausgeschlossen. So stellt YouTube – unabhängig davon, ob Du dir ein
            Video ansiehst – eine Verbindung zum Google DoubleClick-Netzwerk
            her. Sobald Du ein YouTube-Video auf unserer Webseite startest, wird
            eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird
            dem YouTube-Server mitgeteilt, welche unserer Seiten Du besucht
            hast. Wenn Du in Deinem YouTube-Account eingeloggt bist, ermöglichst
            Du YouTube, Dein Surfverhalten direkt Deinem persönlichen Profil
            zuzuordnen. Dies kannst Du verhindern, indem Du Dich aus Deinem
            YouTube-Account ausloggst. Des Weiteren kann YouTube nach Starten
            eines Videos verschiedene Cookies auf Deinem Endgerät speichern. Mit
            Hilfe dieser Cookies kann YouTube Informationen über BesucherInnen
            unserer Website erhalten. Diese Informationen werden u.a. verwendet,
            um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu
            verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben
            auf Deinem Endgerät, bis Du sie löschst. Gegebenenfalls können nach
            dem Starten eines YouTube-Videos weitere Datenverarbeitungsvorgänge
            ausgelöst werden, auf die wir keinen Einfluss haben. Weitere
            Informationen über Datenschutz bei YouTube findest Du in deren
            Datenschutzerklärung 
            <a
              className="hover:underline text-blue-500"
              href="https://policies.google.com/privacy?hl=de"
            >
              hier
            </a>
            . Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
            Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>

          <h3 className="h5 text-blue-500 mt-6">Vercel</h3>
          <p className="mt-2">
            Diese Webseite nutzt den Dienst Vercel. Der Anbieter ist Vercel
            Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel ist eine
            Cloudplattform, über die wir unsere Webseite bereitstellen. Das
            bedeutet, dass der Besuch unser Webseite durch die Server von Vercel
            bearbeitet oder durchgeleitet wird. Die mit deinem Besuch unserer
            Webseite verbundenen Daten werden auch an Vercel übermittelt. Dies
            ist notwendig, damit Deine Browseranfrage erfolgreich bearbeitet
            werden kann. Diese Daten umfassen:
          </p>
          <ul className="mt-2 list-disc">
            <li>- den Browser-Typ/-Version,</li>
            <li>- das verwendete Betriebssystem,</li>
            <li>- die Referrer-URL (die zuvor besuchte Seite),</li>
            <li>- die IP-Adresse,</li>
            <li>- die Uhrzeit der Serveranfrage</li>
            <li>- Cookies</li>
          </ul>
          <p className="mt-2">
            Diese Daten werden je nach Serverstandort auch in die USA
            übertragen. Wir haben mit Vercel einen Vertrag über die
            Auftragsverarbeitung abgeschlossen. Außerdem ist Vercel unter dem{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://www.privacyshield.gov/ps/participant?id=a2zt0000000TTIbAAO&status=Active"
            >
              EU-US Datenschutzabkommen zertifizier
            </a>
            t und damit verpflichtet, den EU-Datenschutzvorgaben nachzukommen.
          </p>
          <p className="mt-2">
            Die Datenschutzerklärung von Vercel findest Du unter{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://vercel.com/legal/privacy-policy"
            >
              https://vercel.com/legal/privacy-policy
            </a>
            .
          </p>
          <p className="mt-2">
            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
            DSGVO. Die Datenübermittlung ist notwendig, damit du unsere Webseite
            benutzen kannst.
          </p>
        </div>
        <h1 className="h4 text-blue-500 mt-6">Dauer der Datenspeicherung</h1>
        <p className="mt-2">
          Die Dauer der Datenspeicherung ist abhängig von der Art der jeweiligen
          Daten. Eine Löschung der Daten erfolgt, sobald Serlo.org kein
          legitimes Interesse mehr an der Aufbewahrung und Verarbeitung der
          Daten hat.
        </p>
        <p className="mt-2">
          Die Daten registrierter NutzerInnen werden solange gespeichert wie das
          Nutzerprofil vorhanden ist. Bei einer Löschung des Profils werden die
          Daten unverzüglich gelöscht. Anonymisierte Daten, die der Analyse des
          Nutzungsverhalten und sonstigen statistischen Erhebungen dienen werden
          solange gespeichert, wie sie relevante Informationen zur
          Weiterentwicklung und Verbesserung des Produkts und der Tätigkeiten
          von SafeTube.eu liefern.
        </p>

        <h1 className="h4 text-blue-500 mt-4">Deine Rechte</h1>
        <p className="mt-2">
          BesucherInnen der Webseite sowie registrierte NutzerInnen haben
          folgende Rechte:
        </p>
        <p className="mt-2">
          Recht auf Zugang zu Deinen Daten: Du hast das Recht unentgeltlich zu
          erfahren, welche personenbezogenen Daten verarbeitet werden, deren
          Herkunft und Empfänger sowie Zugang zu diesen Daten zu erhalten.
        </p>
        <p className="mt-2">
          Recht auf Korrektur Deiner Daten: Das Recht eine Berichtigung
          unrichtiger Daten zu verlangen sowie das Recht, eine Vervollständigung
          unvollständiger personenbezogener Daten zu verlangen.
        </p>
        <p className="mt-2">
          Recht auf Widerspruch gegen die Datenverarbeitung: Erfolgt die
          Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO,
          hast du jederzeit das Recht aufgrund deiner persönlichen Situation
          Widerspruch gegen die Verarbeitung personenbezogener Daten einzulegen.
          Die jeweiligen Rechtsgrundlage, aufgrund derer die Verarbeitung
          erfolgt ist dieser Datenschutzerklärung zu entnehmen. Wenn du
          Widerspruch einlegst, werden deine personenbezogenen Daten nicht
          weiter verarbeitet, außer es liegen unsererseits legitime Gründe zur
          Verarbeitung der Daten vor. Diese legitimen Gründe umfassen auch die
          Geltendmachung, Ausübung und Verteidigung von Rechtsansprüchen.
        </p>
        <p className="mt-2">
          Recht auf eingeschränkte Datenverarbeitung: Du hast das Das Recht eine
          Einschränkung der Verarbeitung aller oder eines Teils der
          personenbezogenen Daten zu verlangen. Das Recht auf Einschränkung der
          Verarbeitung besteht in folgenden Fällen: Wenn Du die Richtigkeit
          Deiner bei uns gespeicherten personenbezogenen Daten bestreitest,
          benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer
          der Prüfung hast Du das Recht, die Einschränkung der Verarbeitung
          Deiner personenbezogenen Daten zu verlangen. Wenn die Verarbeitung
          Deiner personenbezogenen Daten unrechtmäßig geschah / geschieht,
          kannst Du statt der Löschung die Einschränkung der Datenverarbeitung
          verlangen. Wenn wir Deine personenbezogenen Daten nicht mehr
          benötigen, Du sie jedoch zur Ausübung, Verteidigung oder
          Geltendmachung von Rechtsansprüchen benötigst, hast Du das Recht,
          statt der Löschung die Einschränkung der Verarbeitung Deiner
          personenbezogenen Daten zu verlangen. Wenn Du einen Widerspruch nach
          Art. 21 Abs. 1 DSGVO eingelegt hast, muss eine Abwägung zwischen
          Deinen und unseren Interessen vorgenommen werden. Solange noch nicht
          feststeht, wessen Interessen überwiegen, hast Du das Recht, die
          Einschränkung der Verarbeitung Deiner personenbezogenen Daten zu
          verlangen.
        </p>
        <p className="mt-2">
          Wenn Du die Verarbeitung Deiner personenbezogenen Daten eingeschränkt
          hast, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
          Deiner Einwilligung oder zur Geltendmachung, Ausübung oder
          Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer
          anderen natürlichen oder juristischen Person oder aus Gründen eines
          wichtigen öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </p>
        <p className="mt-2">
          Recht auf Datenübertragbarkeit: Das Recht die von uns gesammelten
          personenbezogenen Daten in einem gängigen, maschinenlesbaren Format zu
          erhalten sowie das Recht diese Daten einer anderen Partei zu
          übermitteln. Sofern Du die direkte Übertragung der Daten an einen
          anderen Verantwortlichen verlangst, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>
        <p className="mt-2">
          Recht auf Löschung / „Vergessenwerden”: Das Recht auf unverzügliche
          und vollständige Löschung aller personenbezogenen Daten.
        </p>
        <p className="mt-2">
          Das Recht auf Beschwerde bei einer Aufsichtsbehörde: Im Falle von
          Verstößen gegen die DSGVO steht dir ein Beschwerderecht bei einer
          Aufsichtsbehörde zu. Diese geht der Beschwerde nach und unterrichtet
          dich über das Ergebnis.{" "}
        </p>
        <p className="mt-2">
          Das Beschwerderecht besteht unbeschadet anderweitiger
          verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </p>
      </div>
    </>
  );
}
