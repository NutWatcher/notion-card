import { YouTubeEmbed } from "@next/third-parties/google";
export default function Home() {
    return (
        <main className="">
            <div className="pt-16 mx-auto mb-32 flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 md:flex-row">
                <div className="text-center sm:pr-8 sm:text-left ">
                    <h1 className="mb-4 mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-slate-400 sm:mt-5 sm:text-6xl xl:text-6xl">
                        Craft
                        <span className="inline-block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            Beautiful
                        </span>
                        Content{" "}
                        <span className="inline-block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                            Instantly.
                        </span>
                    </h1>
                    <p className="text-base text-slate-300 sm:text-xl lg:text-lg xl:text-xl">
                        No design skills? No problem. Just Card → shot → Share!
                    </p>

                    <div className="mx-auto mt-8 inline-flex flex-col items-center justify-center">
                        <a
                            href="https://chromewebstore.google.com/detail/notion-card/ppladdpeooemnmmgdddboefecdkmgjnb"
                            className="inline-flex items-center justify-center rounded-full border border-purple-100 bg-purple-500 px-6 py-2 text-center text-lg font-bold text-white shadow-lg transition hover:border-white hover:bg-purple-400 lg:px-20"
                        >
                            Free Download
                        </a>
                    </div>
                </div>
                <div className="my-10 w-full md:my-0">
                    {/* <YouTubeEmbed
                        videoid="uIhDWFafoA4"
                        height={400}
                        params="controls=1&autoplay=1&mute=1&loop=1&playlist=uIhDWFafoA4"
                    /> */}
                    <iframe
                        className="aspect-video self-stretch md:min-h-96 mx-auto w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                        src="https://www.youtube.com/embed/uIhDWFafoA4?controls=0&autoplay=1&mute=1&loop=1&playlist=uIhDWFafoA4"
                        allow="autoplay"
                        title="Notion Card started"
                        aria-hidden="true"
                    />
                </div>
                {/* <div className="my-10 w-full md:my-0">
                    <Image
                        className="mx-auto w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                        src="/demo.png"
                        alt="Notion Card demo"
                        width={1238}
                        height={792}
                    />
                </div> */}
            </div>
        </main>
    );
}
