# toolfyra-widgets

Free embeddable calculator widgets for any website — one `div`, one `script` tag, done.
Powered by [toolfyra.com](https://toolfyra.com), a collection of 700+ free online
calculators and tools that run entirely in your browser (no signup, no data upload).

## Why

- **Zero maintenance**: the calculators update on our side; your embed always works.
- **Private by design**: every tool computes client-side — nothing is sent to a server.
- **Fast**: widgets lazy-load below the fold and render inside a sandboxed iframe.
- **Free**: MIT-licensed helper; the tools themselves are free to embed.

## Quick start

```html
<div data-toolfyra="mortgage-calculator" data-height="780"></div>
<script src="https://cdn.jsdelivr.net/gh/Martas-a11y/toolfyra-widgets@main/embed.js" defer></script>
```

That's it. The helper turns every `[data-toolfyra]` div into a live calculator iframe.

## Popular widgets

| Widget | Slug |
| --- | --- |
| Mortgage (taxes, insurance, PMI) | `mortgage-calculator` |
| Paycheck — Texas | `paycheck-calculator-texas` |
| Paycheck — California | `paycheck-calculator-california` |
| Paycheck — Florida | `paycheck-calculator-florida` |
| BMI | `bmi-calculator` |
| Tip | `tip-calculator` |
| Percentage | `percentage-calculator` |
| Age | `age-calculator` |
| Compound interest | `compound-interest-calculator` |
| Loan payment | `loan-calculator` |

Browse the full catalog at [toolfyra.com](https://toolfyra.com/sitemap) — any URL slug works
as a `data-toolfyra` value.

## Options

| Attribute | Default | Description |
| --- | --- | --- |
| `data-toolfyra` | — | Tool slug from the toolfyra.com URL (required) |
| `data-height` | `720` | iframe height in pixels |

## Examples

- [`examples/mortgage-embed.html`](examples/mortgage-embed.html) — single widget
- [`examples/paycheck-embed.html`](examples/paycheck-embed.html) — two widgets on one page

Open either file directly in a browser to see the embed live.

## Attribution

Widgets are free with no attribution required. If you want to credit the project,
a link to `https://toolfyra.com` is always appreciated.

## License

[MIT](LICENSE) — the helper script. The calculators themselves are served from
toolfyra.com and remain the property of their authors.
