import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../lib/cookies";

export default function Settings() {
    const router = useRouter()
    const [getValue, setValue] = useState();

    useEffect(() => {
        setValue(getCookie("videoDisplayAmmount"))
    }, [])

    return <>
        <select aria-label="Select"
            value={getValue}
            onChange={(e) => {
                e.preventDefault()
                const selectedValue = e.target.value
                setCookie("videoDisplayAmmount", selectedValue);
                router.reload()
            }}
            className="text-white d-inline text-sm flex rounded bg-slate-700 "
        >
            <option value={getValue}>Zeige die Letzten {getValue} videos an</option>
            <option value="1">Letztes video </option>
            <option value="3">Letzten drei videos </option>
            <option value="5">Letzten fünf videos </option>
            <option value="7">Letzten sieben videos </option>
            <option value="10">Letztes 10 videos </option>
            <option value="13">Letztes 13 videos </option>
            <option value="15">Letztes 15 videos </option>
        </select>
    </>
}