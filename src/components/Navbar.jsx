export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg
        after:absolute
        after:bottom-0
        after:left-0
        after:h-[2px]
        after:w-0
        after:bg-gradient-to-r
        after:from-violet-500
        after:to-pink-500
        hover:after:w-full
        after:transition-all
        after:duration-500
        relative
        ">
            <div className="max-w-7xl mx-auto px-4 py-5">
                <h1
                    className="
                    text-4xl
                    font-extrabold
                    text-center
                    bg-gradient-to-r
                    from-violet-400
                    to-pink-400
                    bg-clip-text
                    text-transparent
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:tracking-wider
                "
                >
                    🛍 Product Store
                </h1>
            </div>
        </nav>
    );
}