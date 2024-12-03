"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { useState } from 'react';

const getFakeEvents = (searchTerm: any) => {
  const events = [
    {
      name: `${searchTerm} - Live Concert`,
      date: "10/12/2024",
      location: "New York, USA",
    },
    {
      name: `${searchTerm} - Acoustic Night`,
      date: "15/01/2025",
      location: "London, UK",
    },
    {
      name: `${searchTerm} - World Tour`,
      date: "20/03/2025",
      location: "São Paulo, Brazil",
    },
    {
      name: `${searchTerm} - Music Festival`,
      date: "05/04/2025",
      location: "Tokyo, Japan",
    },
    {
      name: `${searchTerm} - Charity Gala`,
      date: "12/06/2025",
      location: "Paris, France",
    },
    {
      name: `${searchTerm} - Summer Jam`,
      date: "18/08/2025",
      location: "Los Angeles, USA",
    },
    {
      name: `${searchTerm} - Holiday Special`,
      date: "24/12/2025",
      location: "Berlin, Germany",
    },
    {
      name: `${searchTerm} - Exclusive VIP Night`,
      date: "30/01/2026",
      location: "Dubai, UAE",
    },
    {
      name: `${searchTerm} - Anniversary Show`,
      date: "14/02/2026",
      location: "Florianópolis, Brazil",
    },
  ];
  return events;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [events, setEvents] = useState(getFakeEvents(query))
  const router = useRouter(); 

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    date: "",
    priceRange: [0, 100], 
    category: "",
    eventType: "",
    organizer: "",
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = parseInt(e.target.value) || 0;
    setFilters({ ...filters, priceRange: newPriceRange });
  };
  const applyFilters = () => {
    toggleFilterModal();
    setEvents([{
      name: `${query} - Anniversary Show`,
      date: "14/02/2026",
      location: "Florianópolis, Brazil",
    }])
  };

  const toggleFilterModal = () => setIsFilterModalOpen(!isFilterModalOpen);

  const redirectToEvent = () => {
      router.push(`/event`)
  }

  return (
    <div className="p-4">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-md">
        <div className="text-green-600 text-xl font-bold">viagogo</div>
        <div className="flex items-center w-96 border p-2">
          <button onClick={() => {}}>
            <FaMagnifyingGlass />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="border-none rounded-md p-2 w-80"
            onChange={(e) => {}}
          />
          <button onClick={() => toggleFilterModal()}>
            <FaFilter />
          </button>
        </div>
        <div>
          <IoPersonCircleOutline size={40} />
        </div>
      </header>

      {/* Resultados da Busca */}
      <h1 className="text-2xl font-bold mb-4">Resultados da Busca</h1>
      {query ? (
        <div>
          <p>
            Você buscou por: <strong>{query}</strong>
          </p>

          {/* Lista de Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {events.map((event, index) => (
              <button className='border-none' onClick={redirectToEvent}>
                <div
                  key={index}
                  className="border rounded-lg p-4 shadow-md bg-white"
                >
                  <h2 className="text-xl font-bold mb-2">{event.name}</h2>
                  <p className="text-gray-600">📍 {event.location}</p>
                  <p className="text-gray-600">📅 {event.date}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Modal de Filtros */}
          {isFilterModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Filtrar Eventos</h2>

            {/* Localização */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Localização</label>
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="border rounded-md p-2 w-full"
              />
            </div>

            {/* Data */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Data</label>
              <input
                type="date"
                name="date"
                value={filters.date}
                onChange={handleFilterChange}
                className="border rounded-md p-2 w-full"
              />
            </div>

            {/* Preço */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Faixa de Preço</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="border rounded-md p-2 w-1/2"
                />
                <span>-</span>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="border rounded-md p-2 w-1/2"
                />
              </div>
            </div>

            {/* Categoria */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Categoria</label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">Selecione...</option>
                <option value="Music">Música</option>
                <option value="Theater">Teatro</option>
                <option value="Festival">Festival</option>
              </select>
            </div>

            {/* Tipo de Evento */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Tipo de Evento</label>
              <select
                name="eventType"
                value={filters.eventType}
                onChange={handleFilterChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">Selecione...</option>
                <option value="Online">Online</option>
                <option value="Presencial">Presencial</option>
              </select>
            </div>

            {/* Organizador */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Organizador</label>
              <input
                type="text"
                name="organizer"
                value={filters.organizer}
                onChange={handleFilterChange} className="border rounded-md p-2 w-full" /> </div>

        {/* Botões */}
        <div className="flex justify-end gap-2">
          <button
            onClick={toggleFilterModal}
            className="bg-gray-500 text-white rounded-md px-4 py-2"
          >
            Cancelar
          </button>
          <button
            onClick={applyFilters}
            className="bg-green-500 text-white rounded-md px-4 py-2"
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  )}
        </div>
      ) : (
        <p className="text-gray-600">Nenhum termo de busca fornecido.</p>
      )}
    </div>
  )
}
