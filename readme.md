<img src="./.github/asset/illustration/wave_header.svg" width="100%" align="center"/>

<h1 id="top" align="center">
  <img src="./.github/asset/icon/typescript.svg" alt="icon" width="32px" align="center" />
  Structured data types
</h1>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<pre align="center">
  <a href="#installation">📦 SETUP</a> • <a href="#usage">⚡ USAGE</a>
</pre>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<img src="./.github/asset/illustration/structured_data_cover.svg" width="100%" align="center" />

<br />

<div align="center">
  <img src="./.github/asset/illustration/bun_badget.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/github_badget.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/typescript_badget.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/node_badget.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/npm_badget.svg" height="34px" />&nbsp;&nbsp;&nbsp;
  <img src="./.github/asset/illustration/git_badget.svg" height="34px" />
</div>

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="about">
  <img src="./.github/asset/icon/information.svg" width="24px" align="center"/>
  About
</h2>

<table border="0">
<tr>
<td>
📦️ Ultra-lightweight and strict TypeScript definitions for Schema.org and Google Rich Results.
</td>
</tr>
</table>

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="table-of-content">
  <img src="./.github/asset/icon/book.svg" width="20px" align="center"/>
  Table of content
</h2>

- [<img src="./.github/asset/icon/information.svg" width="16px" align="center" /> About](#about)
- [<img src="./.github/asset/icon/thunder.svg" width="16px" align="center" /> Requirements](#requirements)
- [<img src="./.github/asset/icon/package.svg" width="16px" align="center" /> Installation](#installation)
- [<img src="./.github/asset/icon/rocket.svg" width="16px" align="center" /> Usage](#usage)

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="requirements">
  <img src="./.github/asset/icon/thunder.svg" width="20px" align="center"/>
  Requirements
</h2>

- <img src="./.github/asset/icon/node.svg" width="20px" align="center" /> node >= **22.17.0**
- <img src="./.github/asset/icon/bun.svg" width="20px" align="center" /> bun >= **1.1.0**

<br />

<img src="./.github/asset/illustration/divider.svg" alt="divider" width="100%" align="center" />

<h2 id="installation">
  <img src="./.github/asset/icon/package.svg" width="24px" align="center" />
  Installation
</h2>

<h3><img src="./.github/asset/icon/bun.svg" width="24px" align="center" /> Bun</h3>

```bash
bun i -D structured-data-types
```

<h3><img src="./.github/asset/icon/npm.svg" width="24px" align="center" /> Npm</h3>

```bash
npm i -D open-graph-types
```

<h3><img src="./.github/asset/icon/pnpm.svg" width="24px" align="center" /> Pnpm</h3>

```bash
pnpm i -D open-graph-types
```

<h3><img src="./.github/asset/icon/yarn.svg" width="24px" align="center" /> Yarn</h3>

```bash
yarn i -D open-graph-types
```

<br />

<img
  src="./.github/asset/illustration/divider.svg"
  alt="divider"
  width="100%"
  align="center"
/>

<h2 id="usage">
  <img src="./.github/asset/icon/rocket.svg" width="20px" align="center" />
  Usage
</h2>

```ts
import type { SchemaArticle, SchemaOrganization } from "structured-data-types";

const publisher: SchemaOrganization = {
  "@type": "Organization",
  name: "LuisdaByte",
  logo: "https://example.com/logo.png",
  url: "https://example.com",
  description: "Software and Web Development",
};

const article: SchemaArticle = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Mastering Structured Data",
  description: "How to implement type-safe JSON-LD in your projects.",
  image: "https://example.com/cover.png",
  datePublished: "2026-04-18",
  author: {
    "@type": "Person",
    name: "LuisdaByte",
  },
  publisher,
};
```


Here is a complete list of all the available types:

<details>
<summary>👇 Click to expand the full list of types</summary>
<br />

- `SchemaAddress`
- `SchemaAggregateOffer`
- `SchemaAggregateRating`
- `SchemaAnswer`
- `SchemaArticle`
- `SchemaAuthor`
- `SchemaBrand`
- `SchemaContactPoint`
- `SchemaContext`
- `SchemaFAQPage`
- `SchemaGeoCoordinates`
- `SchemaImage`
- `SchemaItemAvailability`
- `SchemaItemList`
- `SchemaListItem`
- `SchemaLocalBusiness`
- `SchemaOffer`
- `SchemaOpeningHoursSpecification`
- `SchemaOrganization`
- `SchemaPerson`
- `SchemaProduct`
- `SchemaQuantitativeValue`
- `SchemaQuestion`
- `SchemaRating`
- `SchemaReview`
- `SchemaSearchAction`
- `SchemaService`
- `SchemaSoftwareApplication`
- `SchemaVideoObject`
- `SchemaWebSite`

</details>


<br />

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
  align="center"
/>

<pre align="center">
  <a href="#top">BACK TO TOP</a>
</pre>

<img 
  src="./.github/asset/illustration/divider.svg" 
  alt="divider" 
  width="100%" 
  align="center"
/>

<pre align="center">
  Copyright © All rights reserved,
  developed by LuisdaByte and
</pre>
<div align="center">
  <img src="./.github/asset/illustration/astralys_logo.svg" width="120px" align="center" />
</div>

<img src="./.github/asset/illustration/wave_footer.svg" width="100%" align="center" />