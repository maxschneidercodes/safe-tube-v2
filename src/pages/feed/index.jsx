import { parseXMLArrayToJSONArray } from "../../../lib/xmlHelper";
import { createVideosHTML } from "../../../lib/videoHelper";
import Add from "../../../components/add";
import Head from "next/head";
import Settings from "../../../components/settings";
import useSWR from "swr";
import Delete from "../../../components/delete";
import getFetchURL from "../../../lib/fetchURL"
import Header from "@/components/ui/header";
import Spinner from "@/components/spinner";
import Donate from "@/components/donate";
import { useEffect } from "react";
import { checkIfFunctionalityCookiesAreAccepted } from "../../../lib/cookieconsent"
import { useState } from "react";

export default function DashboardPage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(getFetchURL() + "/api/yt", fetcher);

  const [cookiesAccepted, setCookiesAccepted] = useState()
  let videoHTMLData = [];

  useEffect(() => {
    if (window) {
      setCookiesAccepted(checkIfFunctionalityCookiesAreAccepted())
    }
  }, [])

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
      <Header extraCSS="shadow-2xl" title="SafeTube.eu" titleCSS="text-white" >
        <Settings />
        <Delete />
        <Add welcome={false} />
      </Header>
      <div className="container p-4 px-8 bg-slate-800 " style={{ overflowX: "hidden" }}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cookiesAccepted ? <>
            {!data || !data.xmlArray.length > 0 ?
              <div className="h-auto max-w-full rounded-lg mt-10 pt-10 pb-10 mb-10">
                <p className="mb-4 text-2xl text-white text-center pt-5 text-muted ">
                  Noch keine YouTube-Channels Hinzugefügt 😐
                </p>
                <div className="h-screen flex items-center justify-center">
                  <Add welcome={false} />
                </div>
              </div> :
              <>
                <div className="flex flex-wrap mt-8 mb-12 rounded justify-items-center items-center ">
                  {createVideosHTML(videoHTMLData, data.videoDisplayAmmount)}
                  <Donate />
                </div>
              </>
            }
          </> : <>
            <div className="h-auto max-w-full rounded-lg mt-10 pt-4 pb-10 mb-10 text-center">
              <h1 className="mb-4 text-xl text-white text-center pt-5 text-muted ">
                Bitte akzeptieren Sie unsere Cookies, um SafeTube zu nutzen. 🍪
              </h1>
              <a className="text-white mt-4 hover:text-blue-500 transition duration-150 ease-in-out" href="#" id="open_preferences_center">
                Cookie Einstellungen öffnen
              </a>
            </div>
          </>}
        </div>
      </div>
    </>
  );
}
