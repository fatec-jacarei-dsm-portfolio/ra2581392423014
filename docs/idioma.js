/* Alternador de idioma PT <-> EN para o portfólio.
   Uso: adicione <script src="idioma.js"></script> antes de </body>. */
(function () {
  const EN = {
    // Header / hero
    'Projetos': 'Projects',
    'Certificados': 'Certificates',
    'Contato': 'Contact',
    'Disponível para novos projetos': 'Available for new projects',
    'Sou Anderson Fontes, estudante de Desenvolvimento de Sistemas na Fatec Jacareí. Construo interfaces sofisticadas onde performance encontra beleza.':
      "I'm Anderson Fontes, a Systems Development student at Fatec Jacareí. I build sophisticated interfaces where performance meets beauty.",
    'Entrar em contato': 'Get in touch',
    'Ver projetos': 'View projects',
    'Jacareí, SP — Brasil': 'Jacareí, SP — Brazil',
    // Stats
    'Projetos entregues': 'Projects delivered',
    'Tecnologias dominadas': 'Technologies mastered',
    'Certificações oficiais': 'Official certifications',
    'Reconhecimento INPE': 'INPE recognition',
    // Skills
    'Habilidades': 'Skills',
    'Semântica & Acessibilidade': 'Semantics & Accessibility',
    'Estilização avançada': 'Advanced styling',
    'ES6+ & Interatividade': 'ES6+ & Interactivity',
    'Código tipado & escalável': 'Typed & scalable code',
    'UI declarativa & hooks': 'Declarative UI & hooks',
    'Backend & APIs REST': 'Backend & REST APIs',
    'Banco relacional': 'Relational database',
    'Sistemas Embarcados': 'Embedded Systems',
    'Prototipagem & Automação': 'Prototyping & Automation',
    'Conectividade Avançada': 'Advanced Connectivity',
    'Integração de Hardware': 'Hardware Integration',
    // Projects header / tabs
    'Trabalhos Selecionados': 'Selected Work',
    'em destaque': 'featured',
    'Acadêmico': 'Academic',
    'Profissional': 'Professional',
    'Pessoal': 'Personal',
    // ODIN
    'Reconhecido pelo INPE': 'Recognized by INPE',
    'ABP (Projeto Integrador) - 3º Semestre · Equipe CodeGators': 'PBL (Integrative Project) - 3rd Semester · CodeGators Team',
    'Plataforma de gestão e análise de dados ambientais desenvolvida em parceria com o INPE. O projeto foi reconhecido oficialmente pelo instituto como ferramenta de suporte à pesquisa científica, integrando dados de focos de calor.':
      'Environmental data management and analysis platform developed in partnership with INPE. The project was officially recognized by the institute as a support tool for scientific research, integrating wildfire hotspot data.',
    'Minhas contribuições:': 'My contributions:',
    'Atuei como UI/UX Designer e Full Stack. Projetei a interface no Figma aplicando Heurísticas de Nielsen e desenvolvi o sistema integrando React.js, Node.js e banco de dados PostgreSQL para renderização dos dados geolocalizados do INPE.':
      "I worked as UI/UX Designer and Full Stack developer. I designed the interface in Figma applying Nielsen's Heuristics and built the system integrating React.js, Node.js and a PostgreSQL database to render INPE's geolocated data.",
    'Ver Repositório': 'View Repository',
    'Documentação': 'Documentation',
    // Academic cards
    'ABP - 3º Semestre': 'PBL - 3rd Semester',
    'ABP - 4º Semestre (Atual)': 'PBL - 4th Semester (Current)',
    'ABP - 1º Semestre': 'PBL - 1st Semester',
    'Disciplina - Web II': 'Course - Web II',
    'Disciplina - Mat. Computacional (2º Sem)': 'Course - Computational Math (2nd Sem.)',
    'Contribuição:': 'Contribution:',
    'Ver no GitHub': 'View on GitHub',
    'Em Desenvolvimento': 'In Development',
    'Painel avançado para monitoramento de incêndios florestais em tempo real. Interface limpa com processamento de dados geográficos.':
      'Advanced dashboard for real-time wildfire monitoring. Clean interface with geographic data processing.',
    'Estruturação do Front-End Server em React com TypeScript e arquitetura do banco PostgreSQL.':
      'Structured the Front-End Server in React with TypeScript and designed the PostgreSQL database architecture.',
    'Gaveteiro de medicamentos inteligente automatizado com ESP32, utilizando sensor de movimento, servomotores e buzzers.':
      'Smart automated medication drawer built with ESP32, using a motion sensor, servo motors and buzzers.',
    'Programação da placa ESP32, montagem do circuito de hardware, e integração do ecossistema de sensores e atuadores da gaveta.':
      "ESP32 board programming, hardware circuit assembly, and integration of the drawer's sensor and actuator ecosystem.",
    'Plataforma educacional para ensinar metodologia ágil Scrum a novos desenvolvedores.':
      'Educational platform that teaches the Scrum agile methodology to new developers.',
    'Responsável pela prototipação da UI e desenvolvimento semântico Front-End (HTML/CSS e Vanilla JS) focado em acessibilidade.':
      'Responsible for UI prototyping and semantic Front-End development (HTML/CSS and Vanilla JS) focused on accessibility.',
    'Aplicação Full Stack para busca, auditoria e armazenamento de sorteios da loteria. Foco em resposta rápida e UX intuitiva.':
      'Full Stack application for searching, auditing and storing lottery draws. Focus on fast responses and intuitive UX.',
    'Sistema analítico para mapear dados de irradiação solar em regiões do Brasil. Arquitetura relacional otimizada.':
      'Analytics system that maps solar irradiation data across regions of Brazil. Optimized relational architecture.',
    'Ferramenta web leve para análise de pixels e validação algorítmica de imagens diretamente no browser.':
      'Lightweight web tool for pixel analysis and algorithmic image validation right in the browser.',
    // Professional
    'Projeto Corporativo · Centriar': 'Corporate Project · Centriar',
    'Sistema de': 'Warehouse',
    'Almoxarifado': 'Management System',
    'Sistema completo de gestão de estoque e almoxarifado desenvolvido para a': 'Complete inventory and warehouse management system built for',
    '. Controle de entradas e saídas, rastreamento de itens, relatórios gerenciais e painel administrativo — tudo em uma plataforma robusta e de alta disponibilidade, implantada em ambiente de produção real.':
      '. Inbound/outbound control, item tracking, management reports and an admin dashboard — all on a robust, highly available platform deployed in a real production environment.',
    'Ver repositório': 'View repository',
    'Calculadora de Materiais': 'Materials Calculator',
    'Ferramenta web profissional para cálculo e estimativa de materiais de construção/produção. Permite ao usuário inserir dimensões, selecionar materiais e receber automaticamente quantidades, perdas percentuais e custo estimado.':
      'Professional web tool for calculating and estimating construction/production materials. Users enter dimensions, select materials and automatically get quantities, waste percentages and estimated cost.',
    // Personal
    'Projeto Pessoal · Em Desenvolvimento': 'Personal Project · In Development',
    'Tradutor': 'PDF',
    'de PDFs': 'Translator',
    'Aplicação web que automatiza a tradução de documentos PDF, preservando a formatação original — layouts, tabelas, colunas e hierarquia tipográfica intactas. Utiliza processamento inteligente de texto para evitar a desconfiguração comum em ferramentas genéricas.':
      'Web application that automates PDF document translation while preserving the original formatting — layouts, tables, columns and typographic hierarchy stay intact. It uses smart text processing to avoid the layout breakage common in generic tools.',
    'Upload e processamento de PDFs de qualquer tamanho': 'Upload and processing of PDFs of any size',
    'Preservação de layout, tabelas e colunas originais': 'Preservation of original layout, tables and columns',
    'Suporte a múltiplos idiomas de origem e destino': 'Support for multiple source and target languages',
    'Download do PDF traduzido com formatação mantida': 'Download the translated PDF with formatting preserved',
    // Certificates
    'Reconhecimentos': 'Recognition',
    'cações': 'cations',
    'Certificação oficial em padrões de projeto e boas práticas de arquitetura de software.':
      'Official certification in design patterns and software architecture best practices.',
    'Front-End Básico': 'Front-End Basics',
    'Fundamentos sólidos de desenvolvimento front-end, estrutura e estilização web moderna.':
      'Solid fundamentals of front-end development, structure and modern web styling.',
    'Desenvolvimento avançado de interfaces, interatividade e experiências de usuário completas.':
      'Advanced interface development, interactivity and complete user experiences.',
    'Validar credencial': 'Validate credential',
    // Contact / footer
    'Vamos trabalhar juntos': "Let's work together",
    'Pronto para': 'Ready to',
    'começar?': 'start?',
    'Disponível para desafios técnicos, posições e parcerias. Transformo código complexo em soluções elegantes e eficientes.':
      'Available for technical challenges, positions and partnerships. I turn complex code into elegant, efficient solutions.',
    'Localização': 'Location',
    'Jacareí, São Paulo — Brasil': 'Jacareí, São Paulo — Brazil',
    'Voltar ao topo ↑': 'Back to top ↑'
  };

  const ALT_EN = {
    'Circuito e Hardware do PillGator com ESP32': 'PillGator circuit and hardware with ESP32',
    'Sistema de Almoxarifado Centriar': 'Centriar warehouse management system'
  };

  const norm = s => s.replace(/\s+/g, ' ').trim();

  // Estilo e botão
  const style = document.createElement('style');
  style.textContent = `
    .lang-toggle{position:relative;z-index:1;display:inline-flex;align-items:center;gap:2px;padding:4px;
      background:var(--bg-2);border:1px solid var(--border);border-radius:100px;cursor:none;
      font-family:var(--sans);transition:border-color .3s}
    .lang-toggle:hover{border-color:var(--border-hover)}
    .lang-toggle span{padding:6px 12px;border-radius:100px;font-size:.72rem;font-weight:700;
      letter-spacing:.08em;color:var(--text-300);transition:all .3s var(--ease-out)}
    .lang-toggle span.on{background:var(--accent);color:#fff;box-shadow:0 2px 12px var(--accent-glow)}`;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.className = 'lang-toggle';
  btn.type = 'button';
  btn.innerHTML = '<span data-l="pt">PT</span><span data-l="en">EN</span>';
  const host = document.querySelector('header .wrap') || document.querySelector('header') || document.body;
  if (host === document.body) {
    btn.style.cssText += ';position:fixed;top:16px;right:16px;z-index:200';
  }
  host.appendChild(btn);

  // Coleta nós de texto e atributos alt traduzíveis
  const items = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: n => /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  while (walker.nextNode()) {
    const n = walker.currentNode, key = norm(n.nodeValue);
    if (key && EN[key] !== undefined) items.push({ node: n, pt: n.nodeValue, en: EN[key] });
  }
  const imgs = [...document.querySelectorAll('img[alt]')].filter(i => ALT_EN[i.alt]).map(i => ({ el: i, pt: i.alt, en: ALT_EN[i.alt] }));

  function apply(lang) {
    items.forEach(it => {
      const lead = it.pt.match(/^\s*/)[0], trail = it.pt.match(/\s*$/)[0];
      it.node.nodeValue = lang === 'en' ? lead + it.en + trail : it.pt;
    });
    imgs.forEach(i => { i.el.alt = lang === 'en' ? i.en : i.pt; });
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-br';
    btn.querySelectorAll('span').forEach(s => s.classList.toggle('on', s.dataset.l === lang));
    btn.setAttribute('aria-label', lang === 'en' ? 'Switch language to Portuguese' : 'Mudar idioma para inglês');
    try { localStorage.setItem('portfolio-lang', lang); } catch (e) {}
  }

  let current = 'pt';
  try { current = localStorage.getItem('portfolio-lang') || 'pt'; } catch (e) {}
  btn.addEventListener('click', () => { current = current === 'pt' ? 'en' : 'pt'; apply(current); });
  apply(current);
})();
