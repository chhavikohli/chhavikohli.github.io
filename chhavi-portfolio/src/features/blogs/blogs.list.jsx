import { MdSearchOff } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md";
import BlogCard from "./blogCard.jsx";



export default function BlogsList({ posts }) {

    return (

        <div className="w-full px-6 lg:px-10 flex flex-col gap-10">
            <div className="flex flex-col gap-8">
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

    )

}





