export default function Donate() {
    return <div className="shadow-2xl mr-4 ml-4 mt-4 mb-4 p-4 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700"
        style={{ width: "380px" }}
        data-aos="fade-up"
        data-aos-delay={`100`}>
        <div className="flex">
            <svg className="w-7 mr-2 h-7 text-red-500 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white "><span className="text-red-500">SafeTube</span> unterstützen</h5>
            </a>
        </div>

        <p className="mb-6 mt-2 font-normal text-gray-500 dark:text-gray-400">Machen Sie es möglich, dass SafeTube kostenlos und ohne Werbung bleibt.</p>

        <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"

        >
            <input
                type="hidden"
                name="hosted_button_id"
                value="DVJ228DZDZJEA"
            />
            <input
                type="image"
                src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Spenden mit dem PayPal-Button"
            />
            <img
                alt=""
                src="https://www.paypal.com/de_DE/i/scr/pixel.gif"
                width="1"
                height="1"
            />
        </form>

    </div>
}
