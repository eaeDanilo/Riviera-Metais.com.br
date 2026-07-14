/* ============================================================
   RIVIERA METAIS — CONTEÚDO DO SITE
   ------------------------------------------------------------
   TODO O TEXTO DO SITE ESTÁ NESTE ARQUIVO.
   Para alterar qualquer texto, edite aqui e salve.
   Não precisa mexer em mais nenhum arquivo.

   Dica: mantenha as aspas. Para usar aspas dentro do texto,
   use aspas simples ou escape: \"assim\".
   ============================================================ */

const CONTENT = {

  /* ---------- DADOS GERAIS ---------- */
  empresa: {
    nome: "Riviera Metais",
    slogan: "Excelência em metais preciosos para o seu negócio",
    // Contato (FICTÍCIO — trocar pelos dados reais depois)
    whatsapp: "(11) 99999-9999",
    whatsappLink: "5511999999999", // só números, com DDI 55
    email: "contato@rivierametais.com.br",
    matriz: "Rua Exemplo, 123 — 2º andar, sala 201 — Bauru/SP",
    filiais: "Ourinhos — SP · Curitiba — PR",
    regiao: "Entrega em mãos em São Paulo capital · Envio para todo o Brasil",
    horario: "Segunda a Sexta — 8h às 18h",
  },

  /* ---------- MENU ---------- */
  menu: [
    { texto: "Metais", link: "#metais" },
    { texto: "Entrega", link: "#entrega" },
    { texto: "Setores", link: "#setores" },
    { texto: "Comprar", link: "#processo" },
    { texto: "Vender", link: "#vender" },
    { texto: "Contato", link: "#contato" },
  ],

  /* ---------- HERO (topo do site) ---------- */
  hero: {
    selo: "Ouro fino 24K 999,9 · Prata pura 999",
    titulo: "Referência em metais preciosos para o seu negócio.",
    subtitulo:
      "Fornecemos ouro e prata com procedência, qualidade certificada e o melhor " +
      "valor do mercado. Atendemos joalheiros, indústrias, galvânicas, " +
      "investidores e diversos segmentos.",
    botaoPrincipal: "Falar com especialista",
    botaoSecundario: "Conhecer os metais",
  },

  /* ---------- SEÇÃO: NOSSOS METAIS ---------- */
  metais: {
    etiqueta: "Nossos metais",
    titulo: "Ouro e prata em grau de investimento",
    itens: [
      {
        nome: "Ouro Fino 24K",
        selo: "999,9",
        caracteristicas: [
          "Pureza mínima de 99,99%",
          "Barras e lingotes de diversos pesos",
          "Padrão de qualidade internacional",
          "Ideal para joalheiros, indústrias e investidores",
        ],
      },
      {
        nome: "Prata Pura",
        selo: "999",
        caracteristicas: [
          "Pureza mínima de 99,9%",
          "Barras, lingotes e granalha de diversos pesos",
          "Ideal para indústrias, galvânicas e colecionadores",
          "Alta qualidade e confiabilidade",
        ],
      },
    ],
  },

  /* ---------- SEÇÃO: O QUE É METAL 999 ---------- */
  metal: {
    etiqueta: "O metal",
    titulo: "O que significa teor 999",
    paragrafos: [
      "O número indica o teor de pureza em milésimos: a cada 1.000 partes do " +
      "metal, 999 são metal puro. É o padrão internacional para metal de " +
      "investimento e aplicação industrial de alta exigência.",
      "Esse grau de pureza só é alcançado por refino controlado, que elimina " +
      "impurezas e outros metais da liga. O resultado é um material homogêneo, " +
      "com peso e teor verificáveis em laudo técnico.",
      "Diferente de peças e ligas comuns (10K, 14K, 18K no ouro; 925 e 950 na " +
      "prata), o metal fino tem valor direto de mercado: o preço acompanha a " +
      "cotação internacional do dia, com liquidez imediata.",
    ],
    // Números que aparecem em destaque ao lado do texto
    destaques: [
      { numero: "99,99", sufixo: "%", legenda: "pureza do ouro fino 24K" },
      { numero: "99,9", sufixo: "%", legenda: "pureza da prata 999" },
      { numero: "100", sufixo: "%", legenda: "com laudo e procedência" },
    ],
  },

  /* ---------- SEÇÃO: GARANTIAS ---------- */
  pureza: {
    etiqueta: "Por que a Riviera",
    titulo: "Qualidade que você pode confiar.",
    subtitulo:
      "Todo metal enviado acompanha laudo técnico de qualidade com teor do " +
      "metal fino, garantindo total transparência e segurança na negociação.",
    cartoes: [
      {
        titulo: "Melhor preço",
        texto:
          "Pagamos os melhores valores do mercado e cobrimos todas as " +
          "ofertas, na compra e na venda.",
      },
      {
        titulo: "Laudo de qualidade",
        texto:
          "Laudo técnico incluso com teor do metal fino, peso líquido e " +
          "cálculo detalhado em toda operação.",
      },
      {
        titulo: "Procedência",
        texto:
          "Metais com origem legal, processos certificados e transparência " +
          "em todas as etapas da negociação.",
      },
      {
        titulo: "Segurança e sigilo",
        texto:
          "Processo seguro e discreto, do primeiro contato à entrega, com " +
          "sigilo absoluto da sua negociação.",
      },
      {
        titulo: "Agilidade",
        texto:
          "Prazos reduzidos e logística otimizada em São Paulo e para todo " +
          "o Brasil.",
      },
      {
        titulo: "Atendimento especializado",
        texto:
          "Fale diretamente com nossos especialistas e receba a cotação do " +
          "dia e soluções sob medida para o seu negócio.",
      },
    ],
  },

  /* ---------- SEÇÃO: ONDE ENTREGAMOS ---------- */
  entrega: {
    etiqueta: "Onde entregamos",
    titulo: "Logística segura, discreta e ágil",
    colunas: [
      {
        titulo: "Entrega em mãos",
        destaque: "em São Paulo capital",
        texto:
          "Entregamos seu metal em mãos em São Paulo capital em até 24 a 48 " +
          "horas após a confirmação do pagamento. Mais segurança e discrição.",
      },
      {
        titulo: "Enviamos para",
        destaque: "todo o Brasil",
        texto:
          "Envios imediatos e seguros para qualquer estado, com empresas " +
          "especializadas, seguro e rastreamento total da carga.",
      },
    ],
  },

  /* ---------- SEÇÃO: SETORES ATENDIDOS ---------- */
  setores: {
    etiqueta: "Setores",
    titulo: "Atendemos diversos segmentos",
    itens: [
      { nome: "Joalheiros", texto: "Matéria-prima de qualidade para suas criações." },
      { nome: "Fábricas", texto: "Atendemos a demanda industrial com eficiência." },
      { nome: "Galvânicas", texto: "Fornecimento seguro para banhos e processos." },
      { nome: "Investidores", texto: "Ouro e prata físico com procedência." },
      { nome: "E muito mais", texto: "Outros segmentos e parceiros." },
    ],
  },

  /* ---------- SEÇÃO: PROCESSO DE COMPRA (cliente comprando da Riviera) ---------- */
  processo: {
    etiqueta: "Como comprar",
    titulo: "Da cotação à entrega, em quatro passos",
    passos: [
      {
        titulo: "Contato",
        texto: "Você chama no WhatsApp e informa o metal e a quantidade desejada.",
      },
      {
        titulo: "Cotação do dia",
        texto: "Fechamos o preço com base na cotação internacional do momento.",
      },
      {
        titulo: "Conferência",
        texto: "Peso e teor verificados, com laudo técnico de qualidade incluso.",
      },
      {
        titulo: "Entrega",
        texto:
          "Em mãos em São Paulo capital em 24–48h, ou envio rastreado para " +
          "todo o Brasil.",
      },
    ],
    // Faixa de contato no fim da seção
    chamada: "Tem interesse em comprar nossos metais?",
    chamadaTexto:
      "Fale agora com um de nossos especialistas e garanta o melhor valor do mercado.",
    botao: "Falar no WhatsApp",
  },

  /* ---------- SEÇÃO: VENDER SEU METAL (compra de metais pela Riviera) ---------- */
  vender: {
    etiqueta: "Compra de metais",
    titulo: "Tem ouro ou prata para vender?",
    texto:
      "Compramos ouro e prata em qualquer estado, com segurança, transparência " +
      "e o melhor valor do mercado. Processo simples, rápido e sigiloso.",
    // Informações rápidas (os 4 blocos)
    infos: [
      {
        titulo: "Prazo de purificação",
        texto: "De 4 a 5 dias úteis após o recebimento do material.",
      },
      {
        titulo: "Percentual cobrado",
        texto: "Ouro: 3% · Prata: 12%. Dependendo da quantidade, percentuais menores.",
      },
      {
        titulo: "Pagamento",
        texto: "Consultar no dia. Cobrimos todos os preços do mercado.",
      },
      {
        titulo: "Laudo incluso",
        texto: "Laudo técnico com teor do metal fino, peso líquido e cálculo detalhado.",
      },
    ],
    // Etapas do processo de venda
    passos: [
      { titulo: "Você envia seu metal", texto: "Recebemos seu material com segurança e sigilo." },
      { titulo: "Purificação", texto: "Seu metal passa pelo processo de purificação." },
      { titulo: "Laudo e cálculo", texto: "Emitimos o laudo técnico com teor e peso do metal fino." },
      { titulo: "Pagamento", texto: "Pagamento rápido e seguro, conforme combinado." },
    ],
    /* ----- Tabela de simulação — OURO -----
       Exemplo com 100 g de material (peso bruto).
       EDITE valores e pagador do dia aqui. */
    simulacao: {
      titulo: "Exemplo de simulação — Ouro",
      subtitulo: "Você envia 100 g de material (peso bruto). Pagador do dia: R$ 405,00/g.",
      linhas: [
        { quilate: "Ouro 10K", teor: "40%", puro: "40 g",  calculo: "40 g × R$ 405,00", percentual: "3%", liquido: "R$ 15.714,00" },
        { quilate: "Ouro 14K", teor: "50%", puro: "50 g",  calculo: "50 g × R$ 405,00", percentual: "3%", liquido: "R$ 19.642,50" },
        { quilate: "Ouro 16K", teor: "65%", puro: "65 g",  calculo: "65 g × R$ 405,00", percentual: "3%", liquido: "R$ 25.535,25" },
        { quilate: "Ouro 18K", teor: "73%", puro: "73 g",  calculo: "73 g × R$ 405,00", percentual: "3%", liquido: "R$ 28.678,05" },
        { quilate: "Prata 999", teor: "99,9%", puro: "—", calculo: "Consultar no dia", percentual: "12%", liquido: "Consultar no dia" },
      ],
      avisos: [
        "Valores de simulação com base no pagador do dia. Resultados podem variar conforme análise, perda no processo e cotação do dia.",
        "Percentual pode ser menor dependendo da quantidade enviada.",
      ],
    },
    // Faixa de contato no fim da seção
    chamada: "Pronto para vender seu ouro ou prata?",
    chamadaTexto:
      "Entre em contato agora mesmo e receba nossa cotação do dia.",
    botao: "Falar no WhatsApp",
  },

  /* ---------- SEÇÃO: CONTATO ---------- */
  contato: {
    etiqueta: "Contato",
    titulo: "Fale com a Riviera.",
    texto:
      "Fale agora com um de nossos especialistas e garanta o melhor valor do " +
      "mercado. Atendimento direto, sigiloso e sem compromisso.",
    botaoWhats: "Falar no WhatsApp",
  },

  /* ---------- RODAPÉ ---------- */
  rodape: {
    texto: "Excelência em metais preciosos para o seu negócio.",
    avisoLegal:
      "As imagens, endereços, contatos e valores exibidos neste site são " +
      "ilustrativos. Cotações e condições são confirmadas no momento da negociação.",
  },
};
