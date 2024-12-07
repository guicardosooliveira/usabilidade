'use client';
import { FaFilter, FaMagnifyingGlass } from 'react-icons/fa6';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { useState } from 'react';
import PurchaseModal from '../components/modal';

type TicketsType = {
  full: any,
  student: any,
  senior: any
}

type TicketOption = {
  label: string;
  key: string;
};

export default function Event() {
    const [isModalOpen, setIsModalOpen] = useState(false)

  const [tickets, setTickets] = useState<TicketsType>({
    full: 0,
    student: 0,
    senior: 0,
  })

  const ticketOptions:TicketOption[] =  [
    { label: 'Inteira', key: 'full' },
    { label: 'Meia estudante', key: 'student' },
    { label: 'Meia idoso', key: 'senior' },
]

  const handleIncrease = (type: any) => {
    setTickets((prev: any) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleDecrease = (type: any) => {
    setTickets((prev: any) => ({ ...prev, [type]: Math.max(prev[type] - 1, 0) }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-md bg-white">
        <div className="text-green-600 text-2xl font-bold">viagogo</div>
        <div className="flex items-center border rounded-md p-2 w-96">
          <button className="text-gray-600">
            <FaMagnifyingGlass />
          </button>
          <input
            type="text"
            placeholder="Buscar eventos"
            className="border-none rounded-md p-2 w-full focus:outline-none"
          />
          <button className="text-gray-600">
            <FaFilter />
          </button>
        </div>
        <div>
          <IoPersonCircleOutline size={40} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {/* Event Information */}
        <div className="flex gap-8 justify-evenly h-40">
          <div className="w-1/3">
            <img
              src="https://img.freepik.com/fotos-gratis/visao-traseira-da-multidao-de-fas-assistindo-performance-ao-vivo-no-concerto-de-musica-a-noite-copiar-espaco_637285-544.jpg?t=st=1733583255~exp=1733586855~hmac=b4bd4013e4484cf3a9990e57fd46b514faad9e9a80474066bf57d2238b75a1ce&w=1380"
              alt="Event"
              className="rounded-md shadow-md w-72"
            />
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-3xl font-bold">Nome do evento</h1>
            <p className="text-gray-600">📍 Localização: Florianópolis</p>
            <p className="text-gray-600">📅 Data e hora: 22/10/2025 às 18:00 hrs</p>
          </div>
        </div>

        {/* Description and Details */}
        <div className='flex justify-around'>
            <div className="mt-6 flex flex-col gap-8 w-1/2">
            <div>
                <h2 className="text-xl font-bold mb-2">Descrição do evento</h2>
                <p className="text-gray-700">
                Este evento é a oportunidade perfeita para você viver uma experiência inesquecível! 
                Com atrações de renome internacional e uma estrutura planejada para oferecer o máximo de conforto e segurança, 
                o evento contará com apresentações musicais ao vivo, performances artísticas e diversas surpresas exclusivas. 
                O ambiente será ideal tanto para grupos de amigos quanto para famílias que buscam diversão e entretenimento 
                de alta qualidade. Prepare-se para desfrutar de momentos únicos que ficarão na memória para sempre!
                </p>
            </div>
            <div>
            <div>
                <h2 className="text-xl font-bold mb-2">Informações gerais</h2>
                <p className="text-gray-700">
                    A abertura dos portões está prevista para as 18h, e recomendamos que os participantes cheguem com, pelo menos, 30 minutos de antecedência para evitar filas e aproveitar as atrações que estarão disponíveis antes do início do evento principal. Os ingressos podem ser apresentados tanto em formato digital (no celular) quanto impresso, sendo necessário um documento de identificação com foto para validação.
                </p>
                <p className="text-gray-700 mt-2">
                    O local contará com estacionamento próprio, sujeito à disponibilidade de vagas, e também será servido por linhas de transporte público que terão horários especiais no dia do evento. Caso prefira, serviços de transporte por aplicativo também estarão disponíveis com pontos de embarque e desembarque sinalizados próximos ao local.
                </p>
                <p className="text-gray-700 mt-2">
                    Pensando no conforto de todos, o evento terá uma ampla praça de alimentação com opções variadas, incluindo comidas tradicionais, fast food, pratos vegetarianos e veganos. Para os amantes de sobremesas, haverá uma seleção de doces e sorvetes. Além disso, bebidas alcoólicas serão comercializadas exclusivamente para maiores de 18 anos, mediante apresentação de documento válido.
                </p>
                <p className="text-gray-700 mt-2">
                    Para garantir a segurança, o evento contará com equipes de atendimento médico e bombeiros disponíveis durante todo o período. Além disso, haverá seguranças circulando pelo local para auxiliar os participantes e evitar qualquer imprevisto. Caso você precise de ajuda, os pontos de apoio estarão bem sinalizados.
                </p>
                <p className="text-gray-700 mt-2">
                    Um espaço especial será dedicado às crianças, com monitores treinados para coordenar atividades recreativas e educativas enquanto os responsáveis aproveitam o evento. Para os pais de bebês, haverá trocadores disponíveis nos banheiros.
                </p>
                <p className="text-gray-700 mt-2">
                    Também será possível adquirir produtos oficiais do evento, como camisetas, bonés, chaveiros e outros itens personalizados, em estandes localizados nas entradas e na área principal. Os pagamentos poderão ser feitos em dinheiro, cartão de crédito ou por meio de carteiras digitais.
                </p>
                <p className="text-gray-700 mt-2">
                    Em caso de perda de objetos pessoais, será possível dirigir-se ao balcão de achados e perdidos, que estará funcionando até uma hora após o término do evento. Recomendamos que mantenha seus pertences sempre próximos e utilize bolsas ou mochilas fechadas para evitar contratempos.
                </p>
                <p className="text-gray-700 mt-2">
                    Estamos comprometidos em oferecer uma experiência memorável para todos os participantes. Caso você tenha dúvidas ou precise de informações adicionais, nossa equipe estará à disposição para ajudá-lo durante todo o evento. Aproveite ao máximo e prepare-se para viver momentos inesquecíveis!
                </p>
                </div>
            </div>
            </div>

            {/* Ticket Types */}
            <div className="mt-8 p-4 border rounded-md shadow-md bg-white max-w-2xl w-full h-96">
            <h2 className="text-xl font-bold mb-4">Tipos de Ingressos</h2>
            {ticketOptions.map(({ label, key }) => (
                <div key={key} className="flex items-center justify-between mb-4">
                <span className="text-gray-700">{label}</span>
                <div className="flex items-center gap-2">
                    <button
                    onClick={() => handleDecrease(key)}
                    className="bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-gray-300"
                    >
                    -
                    </button>
                    <span className="text-gray-700 font-semibold">{tickets[key]}</span>
                    <button
                    onClick={() => handleIncrease(key)}
                    className="bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-gray-300"
                    >
                    +
                    </button>
                </div>
                </div>
            ))}
            <button className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700" onClick={() => setIsModalOpen(true)}>
                Comprar
            </button>
            </div>
            <PurchaseModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-white text-center text-gray-600">
        Footer © 2024 Viagogo
      </footer>
    </div>
  );
}
