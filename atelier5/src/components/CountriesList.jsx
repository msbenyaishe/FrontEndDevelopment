import { useEffect, useState } from "react";
import axios from "axios";

export default function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [minPopulation, setMinPopulation] = useState(0);
  const [sortBy, setSortBy] = useState("name");

  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchCountries() {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,cca3,population,area"
        );
        const filtered = response.data.filter(
          (country) => country.name.common.toLowerCase() !== "israel"
        );
        const sorted = filtered.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
      } catch (error) {
        console.error("Erreur API:", error);
      }
      setLoading(false);
    }
    fetchCountries();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search, region, minPopulation, sortBy]);

  const filteredCountries = !loading
    ? countries
        .filter((c) =>
          c.name.common.toLowerCase().includes(search.toLowerCase())
        )
        .filter((c) => (region === "All" ? true : c.region === region))
        .filter((c) => c.population >= minPopulation)
        .sort((a, b) => {
          if (sortBy === "name") return a.name.common.localeCompare(b.name.common);
          if (sortBy === "population") return b.population - a.population;
          if (sortBy === "area") return b.area - a.area;
          return 0;
        })
    : [];

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedCountries = filteredCountries.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container py-4">
      {loading ? (
        <h2 className="text-center mt-5">⏳ Loading countries...</h2>
      ) : (
        <>
          <div className="row g-3 mb-4">
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="search" className="form-label">Search Country</label>
                <input
                  type="text"
                  id="search"
                  className="form-control"
                  placeholder="Search country..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="region" className="form-label">Region</label>
                <select
                  id="region"
                  className="form-select"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="All">All Regions</option>
                  <option value="Africa">Africa</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia">Asia</option>
                  <option value="Americas">Americas</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="minPopulation" className="form-label">Minimum Population</label>
                <input
                  type="number"
                  id="minPopulation"
                  className="form-control"
                  placeholder="Min population"
                  value={minPopulation}
                  onChange={(e) => setMinPopulation(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="sortBy" className="form-label">Sort By</label>
                <select
                  id="sortBy"
                  className="form-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="population">Population</option>
                  <option value="area">Area</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {displayedCountries.map((c) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={c.cca3}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={c.flags?.png}
                    alt={c.name.common}
                    className="card-img-top"
                    style={{ height: "140px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{c.name.common}</h5>
                    <p className="mb-1"><strong>Capital:</strong> {c.capital ? c.capital[0] : "No capital"}</p>
                    <p className="mb-1"><strong>Region:</strong> {c.region}</p>
                    <p className="mb-1"><strong>Population:</strong> {c.population?.toLocaleString()}</p>
                    <p className="mb-0"><strong>Area:</strong> {c.area?.toLocaleString()} m²</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
            <button
              className="btn btn-primary"
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 1}
            >
              Previous
            </button>

            <span className="fw-bold">Page {page} / {totalPages}</span>

            <button
              className="btn btn-primary"
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
