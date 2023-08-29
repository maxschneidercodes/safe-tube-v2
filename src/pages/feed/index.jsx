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
import Spinner from "@/components/spinner";

export default function DashboardPage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(getFetchURL() + "/api/yt",
    fetcher
  );

  let videoHTMLData = [];

  if (error) {
    return <>
      <Header />
      <div className="mt-10 pt-10 text-center ">
        <p className="text-red-500">Es ist ein fehler aufgetreten bitte versuchen sie es erneut.</p>
      </div>
    </>
  }

  if (isLoading) {
    return <>
      <Header />
      <div className="mt-10 pt-10 text-center ">
        <Spinner />
        <p className="text-red-500">Feed wird geladen...</p>
      </div>
    </>
  }

  if (data) {
    let jsonArray = parseXMLArrayToJSONArray(data.xmlArray);
    videoHTMLData = jsonArray;
  }

  return (
    <>
      <Head>
        <title>Dein SafeTube Feed </title>
      </Head>
      <Header extraCSS="shadow-2xl " title="Feed" titleCSS="text-gray-600" >
        <li className="m-2 p-2">
          <Settings />
        </li>
        <li className="m-2 p-2">
          <Delete />
        </li>
        <li className="m-2 p-2">
          <Add welcome={false} />
        </li>
      </Header>
      <div className="container p-4 px-8 bg-gray-800 ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {!data || !data.xmlArray.length > 0 ? (
            <div className="h-auto max-w-full rounded-lg">
              <p className="text-white text-sm text-center pt-5 text-muted ">
                Noch keine YouTube-Channels Hinzugefügt 😐
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap mt-8 mb-12 rounded justify-items-center items-center ">
                <Script
                  id="Adsense-id"
                  data-ad-client="ca-pub-4969831557424363"
                  async="true"
                  strategy="beforeInteractive"
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                />
                {createVideosHTML(videoHTMLData, data.videoDisplayAmmount)}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
