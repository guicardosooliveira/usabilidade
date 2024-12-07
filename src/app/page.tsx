"use client"
import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaMusic, FaCalendarAlt, FaHeadphonesAlt, FaTheaterMasks, FaMicrophone } from 'react-icons/fa';

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
        <div className=" h-64 bg-gray-300 rounded-lg flex items-center justify-around">
          <button className=" left-2 bg-black text-white rounded-full p-2">{"<"}</button>
          <div className="">
            <img
              src="https://img.freepik.com/vetores-gratis/banner-de-junina-de-festa-colorido-abstrato_1017-18279.jpg?t=st=1733597032~exp=1733600632~hmac=844840f5d79fe4a22fd0ba06ee45208463a634d39da2a89b7cd71378ade5d155&w=1380" // Caminho relativo ao diretório public
              alt="Banner do Carrossel"
              className="w-[700px]"
            />
          </div>
          <button className=" right-2 bg-black text-white rounded-full p-2">{">"}</button>
        </div>

        {/* Sections */}
        <section>
      <h2 className="text-lg font-semibold mb-2">Categorias</h2>
      <div className="flex space-x-10 overflow-x-auto">
        {/* Categoria: Música */}
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-white rounded-md text-center border">
          <FaMusic className="text-3xl text-blue-600" />
          <p className="text-sm mt-2">Música</p>
        </div>

        {/* Categoria: Eventos */}
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-white border rounded-md text-center">
          <FaCalendarAlt className="text-3xl text-green-600" />
          <p className="text-sm mt-2">Eventos</p>
        </div>

        {/* Categoria: DJ */}
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-white border rounded-md text-center">
          <FaHeadphonesAlt className="text-3xl text-purple-600" />
          <p className="text-sm mt-2">DJ</p>
        </div>

        {/* Categoria: Teatro */}
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-white border rounded-md text-center">
          <FaTheaterMasks className="text-3xl text-red-600" />
          <p className="text-sm mt-2">Teatro</p>
        </div>

        {/* Categoria: Stand-up */}
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-white border rounded-md text-center">
          <FaMicrophone className="text-3xl text-yellow-600" />
          <p className="text-sm mt-2">Stand-up</p>
        </div>
      </div>
    </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Com base em sua localização</h2>
            <div className="flex justify-between space-x-4 overflow-x-auto">
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-gratis/dj-com-barba-usando-fones-de-ouvido-e-apontando-para-o-lado-direito_144627-57741.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-gratis/jovem-emotiva-cantando-expressivamente-no-microfone-isolado-sobre-fundo-rosa-na-luz-neon_155003-45800.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-gratis/cantora-pop-com-barba-felpuda-gesticulando-emocionalmente-enquanto-se-apresenta-usando-o-microfone-jovem-artista-de-barba-atraente-usando-chapeu-preto-e-camisa-branca-segurando-um-microfone-anunciando-algo_343059-2933.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-premium/artista-barbudo-com-microfone-canta-uma-musica_266732-7894.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-premium/artista-barbudo-com-microfone-canta-uma-musica_266732-7891.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-gratis/dj-com-barba-usando-fones-de-ouvido-e-cantando-no-karaoke_144627-57750.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64  bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-gratis/mulher-encaracolada-posando-com-fones-de-ouvido_114579-26933.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-premium/artista-barbudo-brutal-com-microfone-canta-uma-musica-no-palco-com-a-decoracao-de-luzes_266732-7895.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Nossas recomendações</h2>
          <div className="flex justify-between space-x-4 overflow-x-auto">
            <div className="w-64  bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-gratis/mulher-encaracolada-posando-com-fones-de-ouvido_114579-26933.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-premium/artista-barbudo-com-microfone-canta-uma-musica_266732-7894.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-gratis/dj-com-barba-usando-fones-de-ouvido-e-apontando-para-o-lado-direito_144627-57741.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-premium/artista-barbudo-com-microfone-canta-uma-musica_266732-7891.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-gratis/cantora-pop-com-barba-felpuda-gesticulando-emocionalmente-enquanto-se-apresenta-usando-o-microfone-jovem-artista-de-barba-atraente-usando-chapeu-preto-e-camisa-branca-segurando-um-microfone-anunciando-algo_343059-2933.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-gratis/dj-com-barba-usando-fones-de-ouvido-e-cantando-no-karaoke_144627-57750.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-gratis/jovem-emotiva-cantando-expressivamente-no-microfone-isolado-sobre-fundo-rosa-na-luz-neon_155003-45800.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
            <div className="w-64 bg-gray-300 rounded-md"><img src="https://img.freepik.com/fotos-premium/artista-barbudo-brutal-com-microfone-canta-uma-musica-no-palco-com-a-decoracao-de-luzes_266732-7895.jpg?ga=GA1.1.1057839442.1733583217&semt=ais_hybrid"></img></div>
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
