import { useEffect, useState } from "react";
import FilterBar from "../../app/layout/FilterBar";
import { categories } from "../../shared/constant";
import { fetchDevtoArticles } from "./blogs.service.js";
import { MdSearchOff } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md";
import BlogCard from "./blogCard.jsx";



export default function Blogs() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [status, setStatus] = useState("idle");
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                setStatus("loading");
                const data = await fetchDevtoArticles({
                    collectionId:activeCategory.collectionId,
                    signal: controller.signal
                });
                setPosts(data);
                setStatus("idle");
            } catch (e) {
                if (e.name !== "AbortError") {
                    console.error(e);
                    setStatus("error");
                }
            }
        }

        load();
        return () => controller.abort();
    }, [activeCategory]);

    if (status === "loading") return <p>Loading…</p>;
    if (status === "error") return <p>Couldn’t load posts.</p>;

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xl text-blue-500 tracking-widest font-medium title-font mb-1">TECHNICAL BLOG</h2>
                    <h2 className="text-lg font-medium title-font text-gray-900">Documenting my learning journey through code, concepts, and real‑world discoveries.</h2>
                </div>
            </div>
            <div className="w-full px-6 lg:px-10 flex flex-col gap-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
                        <FilterBar
                            activeCategory={activeCategory.name}
                            onSelect={setActiveCategory}
                        />
                    </div>
                    {/* Grid */}
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((article) => (
                                <BlogCard
                                    key={article.id}
                                    article={article}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800">
                            <MdSearchOff size={48} color="#666" />
                            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                        </div>
                    )}


                    {/* Pagination */}
                    {posts.length > 10 && (
                        <div className="flex items-center justify-center p-8 mt-4">
                            <div className="flex items-center gap-1">
                                <button className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-500 dark:hover:bg-gray-800 text-blue-400 transition-colors">
                                    <MdKeyboardArrowLeft size={28} />
                                </button>
                                <button className="text-sm font-bold leading-normal flex size-10 items-center justify-center text-white rounded-lg bg-primary shadow-sm shadow-primary/20">
                                    1
                                </button>
                                <button className="text-sm font-medium leading-normal flex size-10 items-center justify-center text-[#111318] dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                                    2
                                </button>
                                <button className="text-sm font-medium leading-normal flex size-10 items-center justify-center text-[#111318] dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                                    3
                                </button>
                                <span className="flex size-10 items-center justify-center text-[#616f89]">...</span>
                                <button className="text-sm font-medium leading-normal flex size-10 items-center justify-center text-[#111318] dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                                    12
                                </button>
                                <button className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-500 dark:hover:bg-gray-800 text-blue-400 transition-colors">
                                     <MdKeyboardArrowRight size={28} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )

}





