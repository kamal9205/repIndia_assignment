import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -10, scale: 1.03 }}
    >
      <Link
        to={`/product/${product.id}`}
        className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            overflow-hidden
            flex
            flex-col
            hover:-translate-y-2
            hover:border-violet-500
            hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)]
            transition-all
            duration-300
        "
      >
        <div
          className="
                  h-72
                  p-6
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-slate-100
                  to-white
                "
        >
          <img
            src={product.image}
            alt={product.title}
            className="
                    h-full
                    w-full
                    object-contain
                    transition-all
                    duration-500
                    group-hover:scale-110
                    "
          />
        </div>

        <div className="p-4 flex flex-col gap-3">
          <h2
            className="
                text-white
                text-lg
                font-bold
                line-clamp-2
                min-h-[56px]
            "
          >
            {product.title}
          </h2>

          <span
            className="
            inline-block
            w-fit
            px-3
            py-1
            rounded-full
            text-xs
            bg-violet-500/20
            text-violet-300
            border
            border-violet-500/30
        "
          >
            {product.category}
          </span>

          <div className="flex justify-between items-center">
            <span
              className="
                text-3xl
                font-extrabold
                text-emerald-400
                group-hover:text-emerald-300
                transition-colors
                duration-300
              "
            >
              ${product.price}
            </span>

            <span
              className="
                bg-yellow-500/20
                text-yellow-300
                px-3
                py-1
                rounded-xl
                text-sm
                font-semibold
            "
            >
              ⭐ {product.rating.rate}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}