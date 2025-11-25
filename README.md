# 🚀 Landing Page Moderna

Uma landing page moderna, responsiva e de alto padrão desenvolvida com HTML5, CSS3 e JavaScript puro.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Características

### 🎨 Design Moderno
- **Gradientes Vibrantes** - Paleta de cores moderna com gradientes suaves
- **Glassmorphism** - Efeitos de vidro fosco para cards e elementos
- **Dark Mode** - Tema escuro/claro com transição suave
- **Animações Suaves** - Micro-interações e animações on-scroll
- **Efeitos 3D** - Tilt effect nos cards para profundidade

### 📱 Responsividade Total
- **Mobile First** - Desenvolvida com abordagem mobile-first
- **Design Adaptativo** - Funciona perfeitamente em todos os dispositivos
- **Menu Hamburguer** - Navegação otimizada para mobile
- **Breakpoints Estratégicos** - 480px, 768px, 1024px

### ⚡ Performance
- **CSS Otimizado** - Variáveis CSS e código organizado
- **Lazy Loading** - Carregamento preguiçoso de imagens
- **Debounced Scroll** - Eventos de scroll otimizados
- **AOS Library** - Animações on-scroll performáticas

### 🔧 Funcionalidades

#### Navegação
- Menu fixo com efeito de blur no scroll
- Links ativos baseados na seção visível
- Scroll suave entre seções
- Menu mobile com overlay

#### Seções Incluídas
1. **Hero Section** - Seção de destaque com CTA, estatísticas e floating cards
2. **Features** - 6 cards de recursos com ícones e hover effects
3. **Testimonials** - Depoimentos de clientes com avatares
4. **Pricing** - 3 planos com tabela comparativa
5. **FAQ** - Accordion com perguntas frequentes
6. **CTA Section** - Call-to-action final com gradiente
7. **Footer** - Completo com links, redes sociais e informações

#### Interatividade
- Contador animado nas estatísticas
- FAQ com accordion funcional
- Efeito parallax nos floating cards
- Validação de formulários
- Botão de scroll to top
- Theme toggle (dark/light mode)

## 📂 Estrutura do Projeto

```
Landing Page Moderna/
│
├── index.html           # Estrutura HTML principal
├── css/
│   └── style.css       # Estilos CSS organizados
├── js/
│   └── main.js         # JavaScript com todas as funcionalidades
├── assets/             # Pasta para imagens e recursos (criar conforme necessidade)
│   ├── images/
│   └── icons/
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Direto no Navegador
1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` diretamente no navegador

### Opção 2: Usar Live Server (Recomendado)
1. Instale a extensão **Live Server** no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### Opção 3: Servidor Local Python
```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000
```

### Opção 4: Node.js com http-server
```bash
# Instalar globalmente
npm install -g http-server

# Executar na pasta do projeto
http-server

# Acesse: http://localhost:8080
```

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `css/style.css`:

```css
:root {
  --primary-color: #6366f1;      /* Cor principal */
  --secondary-color: #8b5cf6;    /* Cor secundária */
  --accent-color: #ec4899;       /* Cor de destaque */
  /* ... outras cores */
}
```

### Tipografia
Fontes utilizadas (Google Fonts):
- **Inter** - Texto principal
- **Poppins** - Títulos e headings

Para alterar:
```css
:root {
  --font-primary: 'SuaFonte', sans-serif;
  --font-heading: 'SuaFonte', sans-serif;
}
```

### Conteúdo
Todo o conteúdo está em `index.html`. Edite:
- Textos dos títulos e descrições
- Links das redes sociais
- Informações dos cards
- Preços e features
- Depoimentos

### Imagens
Para adicionar imagens personalizadas:
1. Coloque as imagens na pasta `assets/images/`
2. Substitua os SVG placeholders no HTML
3. Use caminhos relativos: `assets/images/sua-imagem.jpg`

## 🛠️ Tecnologias Utilizadas

### Core
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna
- **JavaScript ES6+** - Interatividade

### Bibliotecas Externas
- **AOS (Animate On Scroll)** - Animações on-scroll
- **Google Fonts** - Inter & Poppins

### Recursos
- **UI Avatars API** - Avatares para depoimentos
- **SVG Inline** - Ícones e ilustrações

## 📋 Checklist de Melhores Práticas

- ✅ HTML semântico
- ✅ CSS organizado com variáveis
- ✅ JavaScript modular e comentado
- ✅ Responsivo em todos os dispositivos
- ✅ Acessibilidade (ARIA labels)
- ✅ SEO otimizado (meta tags)
- ✅ Performance otimizada
- ✅ Cross-browser compatível
- ✅ Dark mode implementado
- ✅ Animações suaves e modernas


## 🌟 Dicas de Otimização

### 1. Imagens
```html
<!-- Use atributos loading e srcset -->
<img 
  src="imagem.jpg" 
  srcset="imagem-320w.jpg 320w, imagem-640w.jpg 640w"
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
  alt="Descrição"
>
```

### 2. Fonts
```css
/* Preconnect para Google Fonts */
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### 3. JavaScript
- Use `defer` ou `async` nos scripts
- Minimize o uso de jQuery (não necessário aqui)
- Use event delegation quando possível

### 4. CSS
- Evite `!important`
- Use CSS Grid e Flexbox
- Implemente variáveis CSS
- Minimize especificidade excessiva

## 📱 Compatibilidade

### Navegadores Suportados
- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)
- ✅ Opera (últimas 2 versões)

### Dispositivos Testados
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@VenturaMatheus](https://github.com/VenturaMatheus)
- LinkedIn: [Seu Perfil](https://www.linkedin.com/in/matheus-ventura-2a9933196/)
- Email: seu@email.com

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fork o projeto
2. Criar uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 💡 Inspirações

Este projeto foi inspirado nas melhores práticas de:
- Tailwind CSS
- Stripe.com
- Linear.app
- Vercel.com
- Framer.com

## 📞 Suporte

Se tiver dúvidas ou precisar de ajuda:
- Abra uma **Issue** no GitHub
- Entre em contato por email
- Consulte a documentação das bibliotecas utilizadas

---

**Desenvolvido por Matheus com muito ☕**

*Transforme sua presença digital com design moderno e performance otimizada!* 🚀
