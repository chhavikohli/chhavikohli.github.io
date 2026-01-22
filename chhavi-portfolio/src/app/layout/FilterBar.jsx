import { categories } from "../../shared/constant";
const FilterBar = ({ activeCategory, onSelect }) => {
 
  return (
    <div className="flex gap-3 flex-wrap items-center">
      {categories.map((category) => (
        <div 
          key={category.name}
          onClick={() => onSelect(category)}
          className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 cursor-pointer transition-all border ${
            activeCategory === category.name 
              ? 'bg-blue-500 text-white border-primary shadow-md shadow-primary/20' 
              : 'bg-white dark:bg-gray-800 text-[#111318] dark:text-white border-gray-200 dark:border-gray-700 hover:border-primary'
          }`}
        >
          <p className="text-sm font-semibold leading-normal">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterBar;