import Link from "next/link";

function createVideosHTML(data, videoDisplayAmmount) {
  let htmlArray = [];
  if (data) {
    data.forEach((item) => {
      if (item.feed) {
        // htmlArray.push(<h2>asd</h2>);
        const entrys = item.feed.entry;
        if (entrys) {
          if (entrys.length > 0) {
            let item = entrys
              .slice(0, videoDisplayAmmount)
              .map((value, index) => {
                return (
                  <div className="" key={index}>
                    <Link href={`/feed/video/${value["yt:videoId"]}`}>
                      <img
                        alt="YouTube Thumpnail"
                        className="aspect-video mr-2 ml-2 mt-2 mb-4 p-6 bg-gray-900 rounded   "
                        width="380"
                        height="350"
                        src={`https://img.youtube.com/vi/${value["yt:videoId"]}/0.jpg`}
                      />
                    </Link>
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
