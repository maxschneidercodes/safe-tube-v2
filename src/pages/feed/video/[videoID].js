import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../../components/ui/header";
import Link from "next/link";
import Donate from "@/components/donate";

export default function VideoDetail() {
  const router = useRouter();
  const { videoID } = router.query;

  return (
    <>
      <Header extraCSS="shadow-2xl" title="SafeTube.eu">
        <li>
          <Link
            className="btn-sm text-sm inline-flex items-center text-white bg-red-500 hover:bg-red-600 group shadow-sm"
            href="/feed"
          >
            zurück
          </Link>
        </li>
      </Header>

      <div className="bg-slate-100">
        <Head>
          <title> Viel Spaß beim Video! 😄 - SafeTube</title>
        </Head>

        <div
          className="container p-4"
          style={{ maxWidth: "1250px", margin: "0 auto" }}
        >
          <iframe
            className="w-full aspect-video"
            style={{ height: "620px" }}
            src={`https://www.youtube.com/embed/${videoID}?rel=0`}
            frameborder="0"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </>
  );
}
