import { useEffect, useState } from "react";
import { removeChannel } from "../lib/store"
import { getChannels } from "../lib/store"
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function Delete(props) {
    const [getHTML, setHTML] = useState();
    const router = useRouter()

    useEffect(() => {
        fetchChannels()
    }, [props.channelData])

    function removeChannelClicked(id) {
        removeChannel(id);
        fetchChannels()
        toast.success(`Channel Erfolgreich Entfernt`)
        router.reload()
    }

    function fetchChannels() {
        const channelsIDsArr = getChannels();
        setHTML(createChannelIDsHtml(channelsIDsArr));
    }

    function createChannelIDsHtml(channelIDs) {
        if (channelIDs) {
            return channelIDs.map((item) => {
                return <option value={item.id}>{item.title} Löschen</option>
            });
        }
    }

    return (<div className="rounded">
        <div className="flex flex-wrap">
            <select aria-label="Select"
                onChange={(e) => {
                    e.preventDefault()
                    const selectedValue = e.target.value
                    removeChannelClicked(selectedValue)
                    router.reload()
                }}
                className="text-white d-inline text-sm flex  rounded bg-slate-800 "
            >
                <option selected>YouTube-Channel Löschen</option>
                {getHTML}
            </select>
        </div>
    </div >
    );
}
