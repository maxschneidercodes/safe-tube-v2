import * as cheerio from "cheerio";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "POST") {
    const channelName = req.body;
    await fetch(`https://www.youtube.com/c/${channelName}`)
      .then((res) => res.text())
      .then((data) => {
        const $ = cheerio.load(data);

        const id = $('meta[itemprop="identifier"]').attr("content");

        if (id) {
          res.status(200).json({ success: true, id: id });
        } else {
          res.status(404).json({ success: false, id: id });
        }
      })
      .catch((err) => {
        res.status(200).json({ success: false, error: err });
      });
  } else if (req.method === "GET") {
    let xmlArray = [];
    let channelObjcArr = [];
    let videoDisplayAmmount = 3;
    let errorObjc = { hasError: false, msg: "" };

    const channelObjcArrayCookie = req.cookies["channelIDsArray"];
    const videoDisplayAmmountCookie = req.cookies["videoDisplayAmmount"];

    try {
      if (channelObjcArrayCookie) {
        channelObjcArr = JSON.parse(channelObjcArrayCookie);
      } else {
        channelObjcArr = []
      }
    } catch (err) {
      channelObjcArr = [];
    }

    try {
      if (videoDisplayAmmountCookie) {
        videoDisplayAmmount = JSON.parse(videoDisplayAmmountCookie);
      } else {
        channelObjcArr = []
      }
    } catch (err) {
      videoDisplayAmmount = 3;
    }

    try {
      xmlArray = await Promise.all(
        channelObjcArr.map(async (objc: any) => {
          return fetch(
            `https://www.youtube.com/feeds/videos.xml?channel_id=${objc.id}`
          )
            .then((res) => res.text())
            .catch((err) => {
              errorObjc = {
                hasError: true,
                msg: "Error in Promis All" + JSON.stringify(err),
              };
            });
        })
      );
    } catch (err) {
      errorObjc = {
        hasError: true,
        msg: "Error in Promis All",
      };
    }

    res.status(200).json({
      errorObjc: errorObjc,
      xmlArray: xmlArray,
      videoDisplayAmmount: videoDisplayAmmount,
    });
  } else {
    res.status(501).json({ error: "Api not Found" });
  }
}
