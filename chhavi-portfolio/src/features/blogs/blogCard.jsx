
const BlogCard = ({ article }) => {
    return (
        <div
            className="group flex flex-col gap-4 bg-white dark:bg-gray-900 rounded-xl overflow-hidden p-3 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
            <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noreferrer"
            >
                {/* <div 
        className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500"
        style={{ backgroundImage: `url("${article.imageUrl}")` }}
      /> */}
                <div className="flex flex-col gap-2 px-1 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">{article.tags}</span>
                    </div>
                    <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                    </h3>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-relaxed line-clamp-2">
                        {article.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                        <p className="text-[#616f89] dark:text-gray-500 text-xs font-medium uppercase tracking-tighter">
                            {article.readable_publish_date} • {article.reading_time_minutes}
                        </p>
                    </div>
                </div>
            </a>

        </div>
    );
};

export default BlogCard;
