export const Search = () => {
    return (
        <form action="/products-db" className="flex gap-2">
            <input type="text"
                name="query"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                placeholder="Search products"
            />
            <button type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600"
            >
                Search
            </button>
        </form>
    )
}