## Instructions for using this git

### Rules

Funktioner och Variabler: camelCase \
Klasser: PascalCase \
CSS: camelCase \
FilNamn och MappNamn: camelCase \
HTML och Typescript: 4 spaces

### Vad används?

Next => React => Typescript \
CSS

### Commits

✨ Introduce new features. \
📝 Add or update documentation. \
💄 Add or update the UI and style files. \
✅ Add, update, or pass tests. \
🐛 Fix a bug.

### Hur kodning ska struktureras

```
function test() {
  console.log("notice the blank line before this function?")
}
```

### Uppsätning av filer och mappar

```
src(
  app(
    api(
      api koppling
    )
    components(
      navbar och andra komponenter
    )
    lib(
      databas saker
    )
    pages(
      mapp för olika sidor
    )
    styleguide(
      sida för style instruktioner
    )
    pages.tsx : landing page
    layout.tsx : global layout för alla sidor
  )
)
```
