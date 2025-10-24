# Glamping Micmanice - Landing Page

Moderní landing page pro glamping projekt v Micmanicích na Jižní Moravě. Vytvořeno ve SvelteKit s Tailwind CSS.

## Funkce

- **Hero sekce** s velkým obrázkem a CTA tlačítky
- **Popup modal** s formulářem pro zájem a 20% slevou
- **Sekce o lokalitě** - vinařská oblast, bunkry, blízkost Rakouska
- **Galerie** s romantickými obrázky z fotobanky
- **Kontaktní formulář** pro dotazy
- **Responzivní design** pro mobily, tablety a desktop
- **Moderní UI/UX** s vinařskou barevnou paletou

## Spuštění

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev

# Build pro produkci
npm run build

# Preview produkční verze
npm run preview
```

## Struktura projektu

```
src/
├── lib/
│   ├── components/
│   │   ├── Hero.svelte          # Hero sekce s CTA
│   │   ├── About.svelte        # Sekce o lokalitě
│   │   ├── Gallery.svelte      # Galerie obrázků
│   │   ├── Contact.svelte      # Kontaktní formulář
│   │   ├── Footer.svelte       # Footer
│   │   └── InterestModal.svelte # Popup modal
│   └── assets/
├── routes/
│   ├── +layout.svelte          # Hlavní layout
│   └── +page.svelte           # Hlavní stránka
└── app.css                    # Tailwind CSS styly
```

## Technologie

- **SvelteKit** - Moderní framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Unsplash** - Vysokokvalitní obrázky z fotobanky

## Design

Landing page je navržena s důrazem na:
- Romantiku a magické momenty
- Vinařskou tematiku (červené/vínové barvy)
- Responzivní design
- Snadnou navigaci a CTA
- Profesionální vzhled

## Formuláře

Aplikace obsahuje dva formuláře:
1. **Interest Modal** - Pro zájem o ubytování s cenovou preferencí
2. **Contact Form** - Pro obecné dotazy

Oba formuláře jsou připraveny pro integraci s backend API.