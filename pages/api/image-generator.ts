import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from '../../infra/getScreenshot';

const getHTML = ( username ) => `
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <style>
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      :root {
        --bg: #fff;
        --black: #0b1e24;
        --purple: #886dee;
        --green: #4be4cf;
        --shape: #f1fcff;
        --black-shape: #201758;
        --text: #9fadb0;
        --border: #50e3c9;
        --bar: #ebecee;
      }

      .container {
        width: 400px;
        height: 500px;
        background: #ffff;
        display: flex;
        flex-direction: column;
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
      }

      .card {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #0b1e24;
      }
      .card-title {
        background: var(--purple);
        display: block;
        position: relative;
        top: -10px;
        left: -100px;
        width: 200px;
        clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
      }
      .card-title h1 {
        color: var(--shape);
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        white-space: nowrap;
        padding: 5px 0 5px 15px;
      }
      .card h2 {
        color: var(--green);
        font-size: 20px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        padding: 5px;
        padding-top: 10px;
      }
      .card h3 {
        color: var(--text);
        font-family: "Ubuntu", sans-serif;
        font-weight: 300;
        font-size: 10px;
        padding: 5px;
      }
      .card p { 
        color: #fff;
        margin: 0 50px;
        font-family: "Ubuntu", sans-serif;
        margin-bottom: 10px;
      }
      .card img {
        border-radius: 50%;
        border: 5px solid var(--border);
        width: 25%;
        margin-top: 20px;
      }

      header {
        display: flex;
        justify-content: space-between;
      }

      header img {
        width: 150px;
        padding: 40px;
      }

      .forma1 {
        width: 100px;
        height: 100px;
        background: var(--bar);
        clip-path: polygon(56% 0, 100% 0, 54% 100%, 0% 100%);
        position: relative;
        left: -50px;
      }
      .forma2 {
        width: 100px;
        height: 100px;
        background: var(--green);
        clip-path: polygon(67% 0, 100% 0, 67% 100%, 34% 100%);
      }

      footer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px;
      }

      footer img {
        width: 300px;
      }
    </style>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Ubuntu&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="style.css" />
    <title>Teste</title>
  </head>

  <body>
    <div class="container">
      <header>
        <div class="forma1"></div>
        <img src="https://raw.githubusercontent.com/igorcesarcode/gerador-de-imagens/master/pages/api/ctd.png"/>
        <div class="forma2"></div>
      </header>

      <div class="card">
        <div class="card-title">
          <h1>Aluno Houser</h1>
        </div>
        <img src="${username.avatar_url}" alt="" srcset="" />
        <h2>${username.name}</h2>
        <h3><i class="fab fa-github"></i> @${username.login}</h3>
        <p>${username.bio === null ? '' : username.bio}</p>
      </div>
      <footer>
        <img src="https://raw.githubusercontent.com/igorcesarcode/gerador-de-imagens/master/pages/api/logo-DH.png" />
      </footer>
    </div>
  </body>
</html>
`;

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const response = await fetch(`https://api.github.com/users/${req.query.username}`);
  const data = await response.json();

  const isHTMLDebugMode = false;
  const html = getHTML(data)
  
  if (isHTMLDebugMode) {
    res.setHeader('Content-Type', 'text/html')
    return res.end(html)
  }


  const file = await getScreenshot(html, { width: 400, height: 500 });
  
  
  res.setHeader('Content-Type', 'image/png')
  res.end(file);
}