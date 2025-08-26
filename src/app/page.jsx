import Image from 'next/image'
import Isabella from '../../public/img/isabella.jpg'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-row gap-4 bg-red-900 rounded-lg shadow-lg p-10">
        <Image
          src={Isabella}
          alt="Foto de Isabella Borin"
          width={200}
          height={200}
          className="rounded-full mb-6"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-white">Bem-vindo ao Crystal Amour!</h1>
          <p className="text-white">Meu nome é Isabella Borin, sou estudante do SENAI de Valinhos e estou matriculada no curso Técnico de Desenvolvimento de Sistemas.</p>
          <p className="text-white">Este projeto é uma demonstração de uso dos elementos do Next.js para criar aplicações web modernas integrado com uma API Gratuita.</p>
          <p className="text-white">Selecionei uma API completa que simula um e-commerce e permite a interação com os produtos, como adicionar ao carrinho, visualizar detalhes e simular a realização de compras online.</p>
        </div>
      </div>
    </div>
  );
}
