import { addChannel } from "../lib/store";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import Spinner from "./spinner";
import toast from "react-hot-toast";

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
            fetch(process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL : "http://localhost:3000" + "/api/yt", {
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

    return <>

        <form onSubmit={handleAdd}>
            <div class="mt-8 text-sm flex p-4 shadow-2xl bg-gray-600 rounded" >
                {getSpinner && <Spinner />}
                <input
                    type="name"
                    {...register("channelInput")}
                    placeholder="YT-Channel"
                    className="rounded text-lg bg-gray-100 text-dark p-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                />
                <button type="submit" className="ml-4 btn-sm text-white bg-blue-500">
                    Hinzufügen
                </button>
            </div>
        </form>
    </>
}