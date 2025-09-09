import Link from "next/link";
import styles from "./abouapi.module.css";

export default function AboutAPI() {
  return (
    <div>
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

        <h2>Documentação oficial da API</h2>        <Link href="https://dummyjson.com" target="blank" className={styles.codeBlock}>          <span className={styles.link}><strong>https://dummyjson.com</strong> </span>        </Link>

        <h2>Exemplo de URL para uso:</h2>
        <Link href="https://dummyjson.com/products" target="blank" className={styles.codeBlock}>
          <span className={styles.link}><strong>https://dummyjson.com/products</strong> </span>
        </Link>

        <p>Retorna os objetos o JSON com a lista de produtos fictícios, por exemplo:</p>

        <pre className={styles.codeBlock}>
          {`{
  "products": [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 10.48,
      "rating": 2.56,
      "stock": 99,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "BEA-ESS-ESS-001",
      "weight": 4,
      "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
      },
      "warrantyInformation": "1 week warranty",
      "shippingInformation": "Ships in 3-5 business days",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 3,
          "comment": "Would not recommend!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
          "rating": 4,
          "comment": "Very satisfied!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Lucas Gordon",
          "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Eleanor Collins",
          "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 48,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },`}
        </pre>

        <h2>Exemplos de endpoints</h2>
        <ul className={styles.list}>
          <li>
            <Link href="https://dummyjson.com/products" target="_blank" rel="noopener noreferrer">
              <code>https://dummyjson.com/products</code>
            </Link> → Produtos
          </li>
          <li>
            <Link href="https://dummyjson.com/users" target="_blank" rel="noopener noreferrer">
              <code>https://dummyjson.com/users</code>
            </Link> → Usuários
          </li>
          <li>
            <Link href="https://dummyjson.com/posts" target="_blank" rel="noopener noreferrer">
              <code>https://dummyjson.com/posts</code>
            </Link> → Posts
          </li>
          <li>
            <Link href="https://dummyjson.com/comments" target="_blank" rel="noopener noreferrer">
              <code>https://dummyjson.com/comments</code>
            </Link> → Comentários
          </li>
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
  );
}