import { articles } from '../constant'

export default function Article() {
    return (
        <div className="flex flex-col w-full p-12 justify-center items-center">
            <div className="w-full text-center gap-5 mb-10">
                <p className="uppercase text-xl font-normal text-yellow-400">latest article</p>
                <h1 className="text-2xl font-semibold">Learn more about us from our latest article</h1>
            </div>
            <div className="flex flex-row justify-center gap-10">
                {articles.map((article, index) => {
                    return (
                        <div key={index} className="flex flex-col items-start">
                            <img className="w-[300px] max-h-[200px]" src={article.list} alt="" />
                            <div className="flex flex-row gap-4">
                                <div className="">
                                    <h3 className="">{article.date}</h3>
                                </div>
                                <div className="">
                                    <h3 className="">|</h3>
                                </div>
                                <div className="">
                                    <h3 className="">{article.class}</h3>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="">{article.name}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
