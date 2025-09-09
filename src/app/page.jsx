import Image from 'next/image'
import Isabella from '../../public/img/isabella.jpg'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 py-10">
      <div className="w-full max-w-4xl bg-blue-900 rounded-3xl shadow-lg flex flex-row items-center gap-0 p-15 shadow-gray-400">
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
          <h1 className="font-bold text-xl">Bem-vindo ao Cosmic Blend!</h1>
          <p>
            Meu nome é Isabella Borin de Moraes Rosa, sou estudante do SENAI de Valinhos e estou matriculada no curso Técnico de Desenvolvimento de Sistemas (2TDS1).
          </p>
          <div className="flex flex-col items-end gap-2">
          <p className="text-end italic">
          "Liberdade é pouco. O que desejo ainda não tem nome."
          </p>
          <p className="italic">- Clarice Lispector.</p>
          </div>
        </div>
      </div>
    </div>
  )
}