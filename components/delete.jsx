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
                return <button onClick={() => {
                    removeChannelClicked(item.id)
                }} type="button" class="m-1 text-white btn-sm bg-red-500" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {item.title}
                    <svg onClick={() => {
                        removeChannelClicked(item.id)
                    }} class="ml-2 text-dark w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            });
        }
    }

    return (<div className="rounded bg-gray-900 p-8 shadow-lg p-2 mt-4" style={{ margin: "2rem auto", maxWidth: "650px" }}>
        <p className="text-white text-lg mb-4 ">Channel Löschen</p>
        <div className="flex flex-wrap">
            {getHTML}
        </div>
    </div >
    );
}
