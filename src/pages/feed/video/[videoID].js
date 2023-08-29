import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../../components/ui/header";
import Link from "next/link";

export default function VideoDetail() {
  const router = useRouter();
  const { videoID } = router.query;

  return (
    <>
      <Header
        extraCSS="shadow-2xl "
        title="Viel Spaß beim Video! 😄"
        titleCSS="text-gray-600"
      >
        <li>
          <Link
            className="btn-sm text-sm inline-flex items-center text-white bg-red-500 hover:bg-red-600 group shadow-sm"
            href="/feed"
          >
            zurück
          </Link>
        </li>
      </Header>

      <div className=" p-8">
        <Head>
          <title> Viel Spaß beim Video! 😄 - SafeTube</title>
        </Head>

        <div class="video-container">
          <iframe
            className="w-full aspect-video"
            style={{ height: "720px" }}
            src={`https://www.youtube.com/embed/${videoID}?rel=0`}
            frameborder="0"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </>
  );
}
