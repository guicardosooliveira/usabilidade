"use client"
import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState(''); 
  const router = useRouter(); 

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?query=${searchTerm}`); // Redireciona para a página de busca com o termo como parâmetro
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-md">
        <div className="text-green-600 text-xl font-bold">viagogo</div>
        <div className="flex items-center w-96 border p-2">
            <button onClick={handleSearch}>
              <FaMagnifyingGlass />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="border-none rounded-md p-2 w-80"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div>
        <IoPersonCircleOutline size={40}/>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 space-y-8">
        {/* Carousel */}
        <div className="relative h-64 bg-gray-300 rounded-lg flex items-center justify-between">
          <button className="absolute left-2 bg-black text-white rounded-full p-2">{"<"}</button>
          <div className="w-full text-center">
          <Image
            src="/images/banner.jpg" // Caminho relativo ao diretório public
            alt="Banner do Carrossel"
            layout="fill" // Faz a imagem preencher o container
            objectFit="cover" // Garante que a imagem mantenha as proporções
            priority // Carrega a imagem com alta prioridade
          />
          </div>
          <button className="absolute right-2 bg-black text-white rounded-full p-2">{">"}</button>
        </div>

        {/* Sections */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Categorias</h2>
          <div className="flex justify-between space-x-4 overflow-x-auto">
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Com base em sua localização</h2>
          <div className="flex justify-between space-x-4 overflow-x-auto">
          <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Nossas recomendações</h2>
          <div className="flex justify-between space-x-4 overflow-x-auto">
          <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
            <div className="w-44 h-44 bg-gray-300 rounded-md"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center bg-gray-100">
        Footer
      </footer>
    </div>
  );
}
