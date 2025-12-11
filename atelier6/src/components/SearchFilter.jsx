import React from "react";

export default function SearchFilter({ query, setQuery, filter, setFilter }) {
    return (
        <section className="card search-filter">
            <div className="row">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search tasks..."
                    aria-label="Search tasks"
                />

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    aria-label="Filter by starus"
                >
                    <option value="all">All</option>
                    <option value="planned">Planned</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
        </section>
    );
}