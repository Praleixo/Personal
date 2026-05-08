# 🖼️ Guia de Integração de Imagens

## Passos para Completar o Website

### Passo 1: Preparar as Imagens

Você recebeu 2 imagens:
1. **Foto do Proprietário** (Aleixo) - Circular, homem com óculos e boné
2. **Placa/Logo da Empresa** - Circular vermelha com "PERSONAL AUTOS ALEIXO"

### Passo 2: Salvar as Imagens

1. Navegue até: `Personal/images/`
2. Salve a **foto do proprietário** como: `aleixo.jpg`
   - Dimensão recomendada: 500x500px (quadrado)
   - Formatos aceitos: .jpg, .png, .webp
   
3. Salve a **placa/logo** como: `logo-placa.jpg`
   - Dimensão recomendada: 400x400px
   - Use no hero section opcionalmente

### Passo 3: Adicionar Imagens da Galeria

Se tiver fotos antes/depois dos serviços, coloque na pasta `images/`:

| Nome do Arquivo | Descrição | Dimensão Ideal |
|-----------------|-----------|-----------------|
| `antes1.jpg` | Carro antes do serviço 1 | 800x1000px |
| `depois1.jpg` | Carro depois do serviço 1 | 800x1000px |
| `antes2.jpg` | Carro antes do serviço 2 | 800x1000px |
| `depois2.jpg` | Carro depois do serviço 2 | 800x1000px |

> **Dica**: Se não tiver as 4 imagens de galeria, remova as linhas referentes no array `images` em `script.js`

### Passo 4: Testar no Navegador

1. Abra `index.html` no navegador (ou use Live Server no VS Code)
2. Verifique se:
   - ✅ Foto de Aleixo aparece na seção "Sobre"
   - ✅ Galeria mostra as imagens (se adicionadas)
   - ✅ Menu funciona em mobile (teste com F12 → Modo responsivo)
   - ✅ Links do Instagram e WhatsApp funcionam
   - ✅ Google Maps carrega corretamente

### Passo 5: Personalizações Finais

#### Atualizar Links
Procure no HTML pelos seguintes links e atualize:

1. **Instagram** (linha ~30):
   ```html
   <a href="https://instagram.com/personalautosaleixo" target="_blank">Instagram</a>
   ```

2. **WhatsApp** (linha ~50):
   ```html
   <a href="https://wa.me/5547999999999?text=Olá..." target="_blank">💬</a>
   ```
   Substitua `5547999999999` pelo seu número de telefone

3. **Google Maps** (linha ~180):
   ```html
   <iframe src="https://www.google.com/maps/embed?pb=..." ></iframe>
   ```
   [Gerar novo embed aqui](https://www.google.com/maps)

#### Atualizar Endereço
Procure por "São José, SC" e atualize com seu endereço real:
```html
<div class="location-info">
  <p>📍 Seu Endereço Real, São José, SC 88100-000</p>
  <p>📱 (47) 99999-9999</p>
</div>
```

## 📋 Checklist Final

- [ ] Pasta `images/` criada
- [ ] `images/aleixo.jpg` adicionado
- [ ] Links Instagram atualizados
- [ ] Link WhatsApp atualizado com seu número
- [ ] Endereço atualizado
- [ ] Google Maps atualizado
- [ ] Testado em desktop
- [ ] Testado em tablet
- [ ] Testado em mobile
- [ ] Todos os links funcionando

## 🎨 Melhorias Recentes

### JavaScript Enhanced (v1.1)
✨ **Novas funcionalidades adicionadas:**
- Smooth scroll automático para âncoras (#)
- Fade-in animations ao scroll (IntersectionObserver)
- Menu mobile melhorado com event.stopPropagation()
- Melhor performance com unobserve

### CSS Enhanced (v1.1)
✨ **Novas animações adicionadas:**
- `@keyframes fadeInUp` - Elementos aparecem suavemente ao scroll
- Cards, depoimentos e highlights agora animam

### HTML Enhanced (v1.1)
✨ **Menu atualizado:**
- Link "Sobre" adicionado ao menu principal
- Navegação completa para todas as seções

## ⚡ Performance Tips

1. **Otimizar Imagens**:
   ```bash
   # Reduzir tamanho mantendo qualidade
   # Use online: https://tinypng.com ou https://imageoptim.com
   ```

2. **WebP Format**:
   - Converta .jpg para .webp para melhor performance
   - [Converter aqui](https://cloudconvert.com/jpg-to-webp)

3. **Minify CSS/JS** (Opcional):
   - Use [CSS Minifier](https://cssminifier.com/)
   - Use [JS Minifier](https://javascript-minifier.com/)

## 🐛 Troubleshooting

### Imagens não aparecem?
- Verifique nomes exatos dos arquivos (case-sensitive)
- Confirme que estão em `images/` folder
- Abra Console (F12) para ver erros

### Menu não funciona?
- Limpe cache (Ctrl+Shift+Delete)
- Verifique JavaScript no Console (F12)

### Site lento?
- Comprima as imagens
- Use DevTools (F12) → Lighthouse para diagnóstico

## 📞 Suporte

Se precisar ajustar qualquer coisa, os arquivos são:
- **HTML**: `index.html`
- **CSS**: `style.css`
- **JavaScript**: `script.js`

Todos são bem comentados e fáceis de editar!

---

**Seu website está pronto! Agora é só adicionar as imagens e personalizar os links.** 🚀
