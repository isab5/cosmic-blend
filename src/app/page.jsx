import Image from 'next/image'
import Link from 'next/link'
import Isabella from '../../public/img/isabella.jpg'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 py-10">
      <div className="w-full max-w-4xl bg-red-900 rounded-3xl shadow-lg flex flex-row items-center gap-0 p-15">
        <div className="flex-shrink-0 pr-8 flex items-center h-full">
          <Image
            src={Isabella}
            alt="Foto de Isabella Borin"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4 text-white">
          <h1 className="font-bold text-xl">Bem-vindo ao Crystal Amour!</h1>
          <p>
            Meu nome é Isabella Borin, sou estudante do SENAI de Valinhos e estou matriculada no curso Técnico de Desenvolvimento de Sistemas.
          </p>
          <p>
            Este projeto é uma demonstração de uso dos elementos do Next.js para criar aplicações web modernas integrado com uma API Gratuita.
          </p>
          <p>
            Selecionei uma API completa que simula um e-commerce e permite a interação com os produtos, como adicionar ao carrinho, visualizar detalhes e simular a realização de compras online.
          </p>
          <Link href="/sobreapi">
            <button className="mt-4 bg-white text-red-900 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition ">
              Acessar mais informações sobre a API
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}