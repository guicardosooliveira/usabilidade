import React, { useState } from 'react';

export default function PurchaseModal({ isOpen, onClose }:any) {
  const [step, setStep] = useState(1);
  const [selectedSector, setSelectedSector] = useState("");


  const handleSectorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSector(event.target.value);
    
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCloseModal = () => {
    onClose();
    setStep(1); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg w-1/2">

        {/* Etapa 1: Selecionar Ingressos */}

        {step === 1 && (
  <div className="flex flex-col gap-8 p-4">
    {/* Cabeçalho de etapas */}
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-black"></div>
        <span className="text-black">Escolha de assentos</span>
      </div>
      <div className="h-px w-full bg-gray-300"></div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-400"></div>
        <span className="text-gray-500">Checkout</span>
      </div>
      <div className="h-px w-full bg-gray-300"></div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-400"></div>
        <span className="text-gray-500">Confirmação de compra</span>
      </div>
    </div>

    {/* Conteúdo principal da Etapa 1 */}
    <div className="flex flex-col md:flex-row items-start gap-8">
      {/* Mapa de Assentos */}
      <div className="flex-grow bg-black text-white flex items-center justify-center md:h-auto rounded-md max-w-[50%]">
        <img src="https://www.livepass.com.br/obj/media/BR-eventim/galery/kuenstler/i/ironmaiden-mapaportoes-livepass.jpg" alt="mapa assento" />
      </div>

      {/* Seleção de Setores */}
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-4">Selecione o setor dos ingressos</h2>
        <form className="space-y-4">
          {[
            { label: "Arquibancada", key: "arquibancada", full: "R$ 59,90", half: "R$ 29,95" },
            { label: "Pista", key: "pista", full: "R$ 70,00", half: "R$ 35,00" },
            { label: "VIP", key: "vip", full: "R$ 59,90", half: "R$ 29,95" },
          ].map(({ label, key, full, half }) => (
            <label
              key={key}
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                selectedSector === key ? "border-green-500" : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sector"
                  value={key}
                  checked={selectedSector === key}
                  onChange={handleSectorChange}
                  className="form-radio text-green-500"
                />
                <span className="font-medium">{label}</span>
              </div>
              <div className="text-right">
                <p>Inteira {full}</p>
                <p>Meia {half}</p>
              </div>
            </label>
          ))}
        </form>

        {/* Botão Continuar */}
        <button
          className="bg-green-500 text-white px-6 py-2 mt-6 rounded-md hover:bg-green-600 transition-colors w-full"
          onClick={handleNextStep}
        >
          Continuar
        </button>
      </div>
    </div>
  </div>
)}


        {/* Etapa 2: Informações do Pedido */}
        {step === 2 && (
          <div className="flex flex-col gap-8 p-4 max-w-5xl mx-auto">
          {/* Cabeçalho de etapas */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              <span className="text-gray-500">Escolha de assentos</span>
            </div>
            <div className="h-px w-full bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-black"></div>
              <span className="text-black">Checkout</span>
            </div>
            <div className="h-px w-full bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              <span className="text-gray-500">Confirmação de compra</span>
            </div>
          </div>
    
          {/* Conteúdo principal */}
          <div className="flex flex-col md:flex-row gap-8">
  {/* Informações do comprador e detalhes do pedido */}
  <div className="flex flex-col gap-4 flex-grow">
    <div className="border rounded-md p-4">
      <h2 className="font-bold text-lg mb-2">1. Informações do comprador</h2>
      <p>Nome do comprador</p>
      <p>email@exemplo.com</p>
      <p>(48)99999-9999</p>
    </div>
    <div className="border rounded-md p-4">
      <h2 className="font-bold text-lg mb-2">2. Detalhes do pedido</h2>
      <p>Show teste - data/hora</p>
      <p>1x Arquibancada - Inteira - R$ 59,90</p>
      <p>1x Arquibancada - Meia - R$ 29,95</p>
    </div>
  </div>

  {/* Informações de pagamento */}
  <div className="border rounded-md p-4 w-full md:w-1/2">
    <h2 className="font-bold text-lg mb-2">Informações de pagamento</h2>
    <form className="flex flex-col gap-4">
      {/* Seleção do método de pagamento */}
      <div>
        <label className="block font-medium text-gray-700 mb-1 bg-white" >
          Método de pagamento
        </label>
        <select
          id="payment-method"
          className="border rounded-md p-2 w-full bg-white"
          defaultValue=""
        >
          <option value="" disabled >
            Selecione um método de pagamento
          </option>
          <option value="credit-card">Cartão de Crédito</option>
          <option value="pix">PIX</option>
          <option value="boleto">Boleto Bancário</option>
        </select>
      </div>

      {/* Campos para pagamento com cartão de crédito */}
      <div>
        <label className="block font-medium text-gray-700 mb-1" htmlFor="card-number">
          Número do cartão
        </label>
        <input
          id="card-number"
          type="text"
          className="border rounded-md p-2 w-full"
          placeholder="0000 0000 0000 0000"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-grow">
          <label className="block font-medium text-gray-700 mb-1" htmlFor="expiry-date">
            Data de validade
          </label>
          <input
            id="expiry-date"
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="MM/AA"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-1" htmlFor="cvv">
            CVV
          </label>
          <input
            id="cvv"
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="123"
          />
        </div>
      </div>

      {/* Nome do titular do cartão */}
      <div>
        <label className="block font-medium text-gray-700 mb-1" htmlFor="cardholder-name">
          Nome do titular
        </label>
        <input
          id="cardholder-name"
          type="text"
          className="border rounded-md p-2 w-full"
          placeholder="Nome como aparece no cartão"
        />
      </div>
    </form>
  </div>
</div>
    
          {/* Botão de confirmação */}
          <div className="flex justify-end gap-2">
            <button
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
              onClick={handlePreviousStep}
            >
              Voltar
            </button>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
              onClick={handleNextStep}
            >
              Confirmar compra
            </button>
          </div>
        </div>
        )}

        {/* Etapa 3: Confirmação */}

        {step === 3 && (
  <div className="flex flex-col items-center gap-8 p-4">
    {/* Cabeçalho de etapas */}
    <div className="flex justify-between items-center w-full mb-8">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-400"></div>
        <span className="text-gray-500">Escolha de assentos</span>
      </div>
      <div className="h-px w-full bg-gray-300"></div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-400"></div>
        <span className="text-gray-500">Checkout</span>
      </div>
      <div className="h-px w-full bg-gray-300"></div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-black"></div>
        <span className="text-black">Confirmação de compra</span>
      </div>
    </div>

    {/* Conteúdo principal */}
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">COMPRA CONFIRMADA</h2>
      <p className="mb-4">Obrigado por adquirir seu ingresso conosco!</p>
      <div className="text-left space-y-4 text-gray-700">
        <p>
          <span className="mr-2">📧</span>
          <b>E-mail de confirmação enviado:</b> Você receberá um e-mail em 
          <span className="font-mono"> [seuemail@exemplo.com]</span> com todos os detalhes da compra e o(s) ingresso(s) em anexo.
        </p>
        <p>
          <span className="mr-2">🎟️</span>
          <b>Acesso ao ingresso:</b> Seu ingresso está disponível em [PDF anexo no e-mail]. Basta apresentá-lo na entrada do evento, impresso ou na tela do celular.
        </p>
        <p>
          <span className="mr-2">🛠️</span>
          <b>Precisa de ajuda?</b> Caso não receba o e-mail em até 10 minutos, verifique sua caixa de spam ou entre em contato conosco pelo suporte.
        </p>
      </div>
    </div>

    {/* Botões */}
    <div className="flex justify-between gap-4 w-full">
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors w-full"
        onClick={handleCloseModal}
      >
        Voltar para página inicial
      </button>
      <button
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors w-full"
        onClick={handleCloseModal}
      >
        Minhas Compras
      </button>
    </div>
  </div>
)}

      </div>
    </div>
  );
}
