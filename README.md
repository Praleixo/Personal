# Personal Autos Aleixo 

Website sofisticado para oficina de reparo de automóveis com design premium, responsivo e otimizado para conversão.

## 📁 Estrutura do Projeto

```
Personal/
├── index.html              # Página principal com todas as seções
├── style.css               # Design system e estilos responsivos
├── script.js               # Interatividade e animações
├── sitemap.xml             # Mapa do site para Google
├── robots.txt              # Instruções para crawlers
├── README.md               # Esta documentação
├── IMAGES-GUIDE.md         # Guia de integração de imagens
├── IMAGE-OPTIMIZATION.md   # Guia de otimização de imagens
├── CHANGELOG.md            # Histórico de mudanças
├── QUICK-START.md          # Início rápido
└── images/                 # Pasta para assets visuais
    ├── ricardo.png         # Foto do proprietário (NECESSÁRIO)
    ├── antes1.jpeg         # Galeria: antes do serviço
    ├── depois1.jpeg        # Galeria: depois do serviço
    ├── antes2.jpeg         # Galeria: antes do serviço
    └── depois2.jpeg        # Galeria: depois do serviço
```

## 🖼️ Arquivos de Imagem Necessários

### Obrigatórios para funcionamento completo:

| Arquivo | Dimensões Recomendadas | Descrição |
|---------|----------------------|-----------|
| `images/ricardo.png` | 500x500px | Foto circular do proprietário (headshot) |
| `images/antes1.jpeg` | 800x1000px | Foto do carro antes do serviço |
| `images/depois1.jpeg` | 800x1000px | Foto do carro após o serviço |
| `images/antes2.jpeg` | 800x1000px | Foto do carro antes do serviço |
| `images/depois2.jpeg` | 800x1000px | Foto do carro após o serviço |

## ✨ Recursos Implementados

### Design & UX
- ✅ **Design System Premium**: Variáveis CSS, paleta de cores dark mode, tipografia Inter
- ✅ **Glassmorphism**: Efeitos de vidro fosco com blur e transparência
- ✅ **Animações Suaves**: Fade-in ao scroll, hover transforms, transições CSS3
- ✅ **Responsividade Total**: Desktop (1024px+) → Tablet (850px) → Mobile (620px)

### Seções do Website

1. **Topbar Sticky** 
   - Logo "PA" com marca
   - Menu de navegação (Desktop)
   - Hamburger menu animado (Mobile)
   - Link Instagram
   - Botão WhatsApp

2. **Hero Section**
   - Vídeo background (simulado com overlay gradiente)
   - Título principal: "Precisão mecânica com atendimento exclusivo"
   - Dual CTA (Agendar atendimento + Ver serviços)

3. **Serviços** (7 cards)
   - ❄️ Arrefecimento
   - 🏎️ Suspensão
   - 🛑 Freios
   - ⚙️ Correia Dentada
   - 🛢️ Troca de Óleo
   - 🔧 Injeção Eletrônica
   - 🔋 **Troca de Bateria** (NEW)

4. **Galeria Antes/Depois**
   - 4 imagens em grid responsivo
   - Lazy loading habilitado
   - Hover zoom effect

5. **Sobre (NEW)**
   - Foto do proprietário (Aleixo)
   - Descrição profissional
   - 3 boxes de destaque:
     - 🎯 Profissional
     - ❤️ Dedicado
     - 🔍 Transparente

6. **Avaliações**
   - 4 depoimentos de clientes
   - Avatares com iniciais coloridas
   - Classificação 5 estrelas

7. **Localização**
   - Google Maps embed interativo
   - Endereço completo
   - Telefone clicável
   - Link Instagram

8. **CTA Final**
   - Chamada final para ação

9. **WhatsApp Flutuante**
   - Botão fixo com emoji 💬
   - Link direto para conversa WhatsApp

## 🎨 Design System

### Cores (Dark Mode)
- **Background Primário**: `#050507`
- **Surface**: `rgba(12, 14, 20, 0.88)`
- **Texto**: `#f5f6fb`
- **Accent (Destaque)**: `#ff364f` (Vermelho vibrante)
- **Muted (Secundário)**: `#b1b8c9` (Cinza)
- **Border**: `rgba(255, 255, 255, 0.08)` (Transparente)

### Tipografia
- **Font**: Inter (Google Fonts)
- **Pesos**: 400 (Regular) / 500 (Médio) / 600 (Semibold) / 700 (Bold) / 800 (Extra Bold)
- **Escala**: 12px → 48px

### Spacing & Radius
- **Raio de Borda Padrão**: 28px
- **Espaçamento Base**: 8px (múltiplos)
- **Max Width**: 1200px

## 💻 Funcionalidades JavaScript

### 1. Galeria Dinâmica
- Popula 4 imagens from array
- Lazy loading automático
- Captions customizadas

### 2. Menu Responsivo
- Hamburger menu animado (móvel)
- Fecha ao clicar em link
- Fecha ao clicar fora (click outside)
- Acessibilidade: `aria-expanded`

### 3. Smooth Scroll
- Scroll suave para âncoras (#)
- Suporta todos os navegadores modernos

### 4. Scroll Animations (NEW)
- Fade-in ao scroll com IntersectionObserver
- Anima: cards de serviço, depoimentos, highlights
- Performance otimizada com unobserve

## � SEO & Performance Otimizados

### SEO Implementado
- ✅ Meta description e keywords otimizadas
- ✅ Open Graph tags para Facebook
- ✅ Twitter Cards para compartilhamento
- ✅ Structured Data (Schema.org) para Local Business
- ✅ Canonical URL
- ✅ Sitemap.xml gerado
- ✅ Robots.txt configurado
- ✅ Alt texts em todas as imagens
- ✅ Title tag otimizado

### Performance
- ✅ Lazy loading em imagens da galeria
- ✅ Font preconnect para Google Fonts
- ✅ CSS minificado (variáveis eficientes)
- ✅ JavaScript otimizado com IntersectionObserver
- ✅ Imagens recomendadas: comprimir com TinyPNG

## 📱 Breakpoints Responsivos

```css
Desktop:  1024px+    /* Grid 3-4 colunas, nav horizontal */
Tablet:   850px-1024px /* Grid 2 colunas, nav adaptada */
Mobile:   <850px     /* Hamburger menu */
Small:    <620px     /* Font sizes reduzidas, padding menor */
```

## 🚀 Como Usar

1. **Clonar/Baixar** os arquivos do projeto
2. **Adicionar imagens** à pasta `images/`:
   - Coloque `aleixo.jpg` (foto do proprietário)
   - Coloque `antes1.jpg` e `depois1.jpg` (galeria 1)
   - Coloque `antes2.jpg` e `depois2.jpg` (galeria 2)
3. **Abrir** `index.html` no navegador
4. **Testar** em desktop, tablet e mobile
5. **Personalizar** links (Instagram, WhatsApp, maps)

## 🎯 Próximos Passos (Opcional)

- [ ] Otimizar imagens (WebP format)
- [ ] Adicionar FAQ com accordion
- [ ] Integrar formulário de agendamento
- [ ] Adicionar seção de blog/dicas de manutenção
- [ ] Video testimonials
- [ ] Schema.org structured data (SEO)
- [ ] Google Analytics
- [ ] Certificado SSL para produção

## 📊 Performance

- **Lazy Loading**: Imagens carregam sob demanda
- **CSS Variables**: Reduzem redundância
- **Optimized Animations**: Usar `transform` e `opacity`
- **Mobile-First**: Menor overhead em dispositivos pequenos

## ♿ Acessibilidade

- ✅ Semantic HTML5 (`<nav>`, `<section>`, `<figure>`, etc.)
- ✅ ARIA labels (`aria-label`, `aria-expanded`)
- ✅ Alt text em todas as imagens
- ✅ Contraste de cores WCAG AA
- ✅ Keyboard navigation completa
- ✅ Responsive design (sem scroll horizontal)

## 📝 Customização

### Mudar cores
Edite as variáveis CSS em `style.css`:
```css
:root {
  --accent: #ff364f;  /* Mudar cor principal */
  --bg: #050507;      /* Mudar fundo */
}
```

### Mudar textos
Edite direto em `index.html` nas seções desejadas

### Mudar links
- **Instagram**: Procure por `@personalautosaleixo`
- **WhatsApp**: Procure por `wa.me/`
- **Maps**: Atualize o iframe de localização

---

**Desenvolvido com ❤️ para Personal Autos Aleixo**
Versão 1.0 - 2026
# Personal
