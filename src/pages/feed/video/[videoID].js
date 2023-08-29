import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../../components/ui/header";
export default function VideoDetail() {
  const router = useRouter();
  const { videoID } = router.query;

  return (
    <>
      <Header />
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
