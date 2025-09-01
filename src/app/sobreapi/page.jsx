import styles from "./sobreapi.module.css";
import Header from "../../components/Header/Header"

export default function SobreAPI() {
  return (
    <div>
        <Header />
        <div className={styles.container}>
            <h1>Dummy JSON API</h1>
            
      <p>
        A <strong>Dummy JSON API</strong> é uma API gratuita e pública usada para{" "}
        <strong>gerar dados fictícios (fake data)</strong> em formato{" "}
        <strong>JSON</strong>, muito útil para desenvolvedores que estão testando
        aplicações, prototipando interfaces ou aprendendo a consumir APIs sem
        precisar de um banco de dados real.
      </p>

      <h2>Principais características</h2>
      <ul className={styles.list}>
        <li><strong>Gratuita e aberta:</strong> não precisa de autenticação.</li>
        <li><strong>Formato JSON:</strong> fácil de integrar em aplicações web e mobile.</li>
        <li><strong>Paginação e filtros:</strong> suporta parâmetros como <code>?limit</code> e <code>?skip</code>.</li>
        <li><strong>Ideal para testes:</strong> permite simular requisições GET, POST, PUT e DELETE.</li>
      </ul>

      <h2>Exemplo de uso</h2>
      <pre className="code-block">
        https://dummyjson.com/products
      </pre>

      <p>Retorna um objeto JSON com lista de produtos fictícios:</p>

      <pre className="code-block">
{`{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "...",
      "images": ["...", "..."]
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}`}
      </pre>

      <h2>Exemplos de endpoints</h2>
      <ul>
        <li><code>https://dummyjson.com/products</code> → Produtos</li>
        <li><code>https://dummyjson.com/users</code> → Usuários</li>
        <li><code>https://dummyjson.com/posts</code> → Posts</li>
        <li><code>https://dummyjson.com/comments</code> → Comentários</li>
      </ul>

      <h2>Onde usar</h2>
      <ul>
        <li>Preencher componentes de <strong>frontend</strong> (React, Vue, Angular).</li>
        <li>Treinar <strong>consumo de API</strong> (fetch, axios, etc.).</li>
        <li>Exercícios de <strong>CRUD</strong> (suporta POST, PUT, DELETE).</li>
        <li>Uso em <strong>aulas e workshops</strong> para simular backends reais.</li>
      </ul>
        </div>
    </div>
  )
}
