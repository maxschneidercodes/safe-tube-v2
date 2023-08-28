import { parseXMLArrayToJSONArray } from "../../../lib/xmlHelper";
import { createVideosHTML } from "../../../lib/videoHelper";
import Add from "../../../components/add";
import Head from "next/head";
import Settings from "../../../components/settings";
import useSWR from "swr";
import Delete from "../../../components/delete";
import Script from "next/script";

export default function DashboardPage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(
    process.env.URL ? "" : "http://localhost:3000" + "/api/yt",
    fetcher
  );

  let videoHTMLData = [];

  if (error) {
    return (
      <div className="bg-light">
        <div className="p-4 text-center">
          <h1>Ein Fehler ist aufgetreten.</h1>
          <p>Bitte Laden sie die Seite neu.</p>
          <p>{JSON.stringify(error)}</p>
        </div>
      </div>
    );
  }

  if (data) {
    let jsonArray = parseXMLArrayToJSONArray(data.xmlArray);
    videoHTMLData = jsonArray;
  }

  return (
    <>
      <Head>
        <title>Dein YT-Video Feed - SafeTube</title>
      </Head>
      <div className="bg-light">
        <div className="container p-4">
          {!data || !data.xmlArray.length > 0 ? (
            <>
              <p className="fs-3 text-center pt-5 text-muted">
                Noch keine YouTube-Channels Hinzugefügt 😐
              </p>
              <div className="row ">
                <div className="col"></div>
                <div class="col-md-6">
                  <Add mutate={mutate} />
                </div>
                <div className="col"></div>
              </div>
            </>
          ) : (
            <>
              <div class="container mx-auto px-4 mt-4">
                <div className="flex flex-wrap justify-between">
                  <div>
                    <h1 className="h2">
                      <span style={{ color: " #E95556" }}>SafeTube</span> Feed
                    </h1>
                    <Settings />
                  </div>
                  <Add />
                </div>
                <div className="mt-4 mb-10 flex flex-wrap">
                  <Script
                    id="Adsense-id"
                    data-ad-client="ca-pub-4969831557424363"
                    async="true"
                    strategy="beforeInteractive"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                  />
                  {createVideosHTML(videoHTMLData, data.videoDisplayAmmount)}
                </div>
                <div className="flex">
                  <Delete />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
