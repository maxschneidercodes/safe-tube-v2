import { addChannel } from "../lib/store";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import Spinner from "./spinner";
import toast from "react-hot-toast";
import getFetchURL from "@/lib/fetchURL";

export default function Add(props) {
    const router = useRouter();
    const { register, getValues } = useForm();
    const [getSpinner, setSpinner] = useState(false)

    async function handleAdd(e) {
        e.preventDefault();

        setSpinner(true)

        const values = getValues();
        const channel = values.channelInput

        if (channel.length === 24) {
            addChannel({ title: channel, id: channel });
            toast.success(`Channel ${channel} Erfolgreich Hinzugefügt`)
            setSpinner(false)
        } else {

            fetch(getFetchURL() + "/api/yt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(channel),
            }).then(data => data.json()).then((data) => {
                if (data.success) {
                    addChannel({ title: channel, id: data.id });
                    setSpinner(false)
                    toast.success(`Channel ${channel} Erfolgreich Hinzugefügt`)
                    handleRout()
                } else {
                    setSpinner(false)
                    toast.error(`Es ist ein Fehler aufgetreten, bitte versuchen Sie es erneut.`);
                }
            })
        }
    }

    function handleRout() {
        if (props.welcome) {
            router.push("/feed")
        } else {
            router.reload()
        }
    }

    return <form onSubmit={handleAdd}>
        <div class="mt-8 text-sm flex p-4 rounded bg-gray-900" >
            {getSpinner && <Spinner />}
            <input
                type="name"
                {...register("channelInput")}
                placeholder="YouTube-Channel"
                className="rounded text-lg bg-gray-200 text-dark p-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                style={{ width: "300px" }}
            />
            <button type="submit" className="ml-4 btn-sm text-white bg-red-500">
                Hinzufügen
            </button>
        </div>
    </form>
}