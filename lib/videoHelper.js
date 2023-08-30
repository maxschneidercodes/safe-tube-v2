import Link from "next/link";

function createVideosHTML(data, videoDisplayAmmount) {
  let htmlArray = [];
  if (data) {
    data.forEach((item) => {
      if (item.feed) {
        const entrys = item.feed.entry;
        if (entrys) {
          if (entrys.length > 0) {
            let item = entrys
              .slice(0, videoDisplayAmmount)
              .map((value, index) => {
                return (
                  <div
                    className="bg-slate-600 mr-4 ml-4 mt-4 mb-4 p-4 rounded shadow-2xl"
                    key={index}
                    style={{ maxWidth: "380px" }}
                    data-aos="fade-up"
                    data-aos-delay={`${index}00`}
                  >
                    <p className="text-sm mb-4 text-slate-900 ">
                      {new Date(value.published).toDateString()}
                    </p>
                    <Link href={`/feed/video/${value["yt:videoId"]}`}>
                      <img
                        alt="YouTube Thumpnail"
                        className="aspect-video rounded"
                        width="380"
                        height="350"
                        src={`https://img.youtube.com/vi/${value["yt:videoId"]}/0.jpg`}
                      />
                    </Link>
                    <p className="text-md mt-4 text-gray-200">{value.title}</p>
                  </div>
                );
              });
            htmlArray.push(item);
          }
        }
      }
    });
  }
  return htmlArray;
}

module.exports = {
  createVideosHTML: createVideosHTML,
};
