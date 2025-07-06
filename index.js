let contador = 0;

function send() {
  let texto = document.getElementById("texto");
  contador += 1;
  const cssBody = `
    <style>
      html, body {
        height: 100%;
        margin: 0;
      }
      body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: Arial, sans-serif;
      }
      a { color: blue; text-decoration: underline; }
      table { border-collapse: collapse; margin: 0 auto; }
      th, td { padding: 5px; border: 1px solid black; }
    </style>
  `;

  switch (contador) {
    case 1:
      texto.innerHTML = `
        <!DOCTYPE html>
        <html><head>${cssBody}</head>
        <body>
          <h1>HTML 1.0 (1993) Básico, sem estilos nem tabelas</h1>
          <p>Essa é uma página HTML 1.0.</p>
          <a href="https://example.com">Visite o site</a>
        </body></html>
      `;
      break;

    case 2:
      texto.innerHTML = `
        <!DOCTYPE html>
        <html><head>${cssBody}</head>
        <body>
          <h1>HTML 2.0 (1995) Formulários simples</h1>
          <form method="post" action="envia.php">
            <div><label>Nome: <input type="text" name="nome"></label></div>
            <div><label>Email: <input type="text" name="email"></label></div>
            <div><input type="submit" value="Enviar"></div>
          </form>
        </body></html>
      `;
      break;

    case 3:
      texto.innerHTML = `
        <!DOCTYPE html>
        <html><head>${cssBody}</head>
        <body bgcolor="#f0f0f0">
          <h1 style="color:blue; margin:0">HTML 3.2 (1997)</h1>
          <table>
            <tr><th>Nome</th><th>Idade</th></tr>
            <tr><td>Ana</td><td>25</td></tr>
          </table>
          <script>alert("Bem‑vindo à página HTML 3.2!");</script>
        </body></html>
      `;
      break;

    case 4:
      texto.innerHTML = `
        <!DOCTYPE html>
        <html><head>${cssBody}
          <style>
            body { background-color: #e0f7fa; }
            .destaque { color: green; font-size: 18px; }
          </style>
        </head>
        <body>
          <h1 class="destaque">HTML 4.01 (1999) Separação de conteúdo e estilo</h1>
          <p>Agora usamos CSS para estilizar!</p>
        </body></html>
      `;
      break;

    case 5:
      texto.innerHTML = `
        <!DOCTYPE html>
        <html lang="pt-br"><head>${cssBody}
          <meta charset="UTF-8">
        </head>
        <body>
          <header>
            <h1>HTML5 (2014 atual) Semântico, multimídia</h1>
            <nav>
              <a href="#">Início</a> |
              <a href="#">Sobre</a>
            </nav>
          </header>
          <main>
            <article>
              <h2>Bem‑vindo!</h2>
              <p>Esta página usa HTML5 com tags semânticas e recursos modernos.</p>
              <video width="320" controls>
                <source src="video.mp4" type="video/mp4">
                Seu navegador não suporta vídeo.
              </video>
            </article>
          </main>
          <footer><p>&copy; 2025 Meu Site</p></footer>
        </body></html>
      `;
      break;

    default:
      texto.innerHTML = `
        <!DOCTYPE html>
        <html><head>${cssBody}</head>
        <body>
          <p>Acabaram as versões</p>
        </body></html>
      `;
      break;
  }
}
