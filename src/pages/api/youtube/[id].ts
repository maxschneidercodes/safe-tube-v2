
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.setHeader("Allow", "GET"); 
    const { id } = req.query
    let channelObjcArray = [id]
    try {
      let xmlArray = await Promise.all(
        channelObjcArray.map(async (objc: any) => {
          return fetch(
            `https://www.youtube.com/feeds/videos.xml?channel_id=${id}`
          )
            .then((res) => res.text())

        })
      );
      res.status(200).json({data:xmlArray})
    } catch (err) {
      res.status(500).json({msg:"Error" +err})
    }
  }
}