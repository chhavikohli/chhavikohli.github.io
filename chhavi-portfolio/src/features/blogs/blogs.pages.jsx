import { useEffect, useState } from "react";
import FilterBar from "../../app/layout/FilterBar";
import BlogsList from "./blogs.list.jsx";
import { categories } from "../../shared/constants/dev.collection.constant.js";
import { fetchDevtoArticles } from "./blogs.service.js";
import { MdSearchOff } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Blogs() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [status, setStatus] = useState("idle");
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                setStatus("loading");
                let data = await fetchDevtoArticles({
                    collectionId: activeCategory.collectionId,
                    signal: controller.signal
                });

                data = data.filter(i => i.collection_id)

                setStatus("success");
                setPosts(data);
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
                    {renderStatus(status, posts)}
                </div>
            </div>
        </section>
    )

}


function renderStatus(status, posts) {
    switch (status) {
        case 'loading': return <p>Loading…</p>;
        case 'success': return <BlogsList posts={posts} />;
        case 'error': return <p>Error</p>;
        default: return null;
    }
}






