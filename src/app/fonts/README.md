# Fonts

All faces are self-hosted: the build needs no network and the bytes are served
from our own origin.

| File | Face | Licence |
|---|---|---|
| `InstrumentSerif-Regular.woff2` | Instrument Serif, roman | SIL Open Font License 1.1 |
| `GeistVF.woff2` | Geist Sans, variable 100–900 | SIL Open Font License 1.1 |
| `GeistMonoVF.woff2` | Geist Mono, variable 100–900 | SIL Open Font License 1.1 |

The SIL OFL permits redistribution of modified copies, which is what subsetting
produces. It requires that the licence travel with the files — that is what this
note is for — and that a modified version not be distributed under the original
reserved font name where one is declared.

## Modifications

- **Instrument Serif** — Google Fonts' `latin` subset, roman only. Nothing in
  the design is set in italic, so the italic file is not shipped.
- **Geist Sans / Geist Mono** — re-compressed from `.woff` to `.woff2` and
  subset to Latin with `fonttools`. They arrived as full-Unicode `.woff` at
  66 kB and 68 kB, which made them the heaviest assets on the page — heavier
  than all the JavaScript. The variable weight axis (100–900) is preserved.

Reproduce the Geist subsetting with:

```bash
pip install fonttools brotli
LATIN="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,\
U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
python3 -m fontTools.subset GeistVF.woff --output-file=GeistVF.woff2 \
  --flavor=woff2 --unicodes="$LATIN" \
  --layout-features='kern,liga,calt,ccmp,locl' --name-IDs='*'
```

If the copy ever moves beyond Latin, re-subset before assuming the glyphs are
there. `src/lib/site.ts` is the only place content lives, so it is the only file
that needs checking.
