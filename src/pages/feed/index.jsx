import { parseXMLArrayToJSONArray } from "../../../lib/xmlHelper";
import { createVideosHTML } from "../../../lib/videoHelper";
import Add from "../../../components/add";
import Head from "next/head";
import Settings from "../../../components/settings";
import useSWR from "swr";
import Delete from "../../../components/delete";
import Script from "next/script";
import getFetchURL from "../../../lib/fetchURL"
import Header from "@/components/ui/header";

export default function DashboardPage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(getFetchURL() + "/api/yt",
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
      <Header extraCSS="shadow-2xl" />
      <div className="container p-4 px-8  bg-gray-800 ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div></div>

          {!data || !data.xmlArray.length > 0 ? (
            <div className="h-auto max-w-full rounded-lg">
              <p className="text-white text-sm text-center pt-5 text-muted ">
                Noch keine YouTube-Channels Hinzugefügt 😐
              </p>
              <Add welcome={false} />
            </div>
          ) : (
            <>
              <div class="max-w-3xl mt-4">
                <div className="flex flex-wrap justify-between mb-8">
                  <div>
                    <h1 className="h3 text-white mb-4">Dein <span className="text-red-500">SafeTube</span> Feed</h1>
                    <Settings />
                  </div>
                  <Add welcome={false} />
                </div>
                <div className="flex flex-wrap mt-8 mb-10 rounded justify-items-center items-center ">
                  <Script
                    id="Adsense-id"
                    data-ad-client="ca-pub-4969831557424363"
                    async="true"
                    strategy="beforeInteractive"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                  />
                  {createVideosHTML(videoHTMLData, data.videoDisplayAmmount)}
                </div>

                <Delete />

              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
