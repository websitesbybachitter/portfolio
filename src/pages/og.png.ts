import type { APIRoute } from 'astro';
import { fontData, experimental_getFontFileURL, type FontData } from 'astro:assets';
import satori from 'satori';
import { html } from 'satori-html';
import sharp from 'sharp';

import { siteConfig } from '@/config';

interface FontFace {
  data: ArrayBuffer;
  name: string;
  weight: number;
  style: 'normal' | 'italic';
}

const getFont = async (
  entries: FontData[],
  name: string,
  weight: string,
  style: 'normal' | 'italic',
  requestUrl: URL,
): Promise<FontFace> => {
  const entry = entries.find(
    (candidate) => candidate.weight === weight && (candidate.style ?? 'normal') === style,
  );
  if (entry === undefined) {
    throw new Error(`No ${style} ${weight} font face found.`);
  }

  const src = entry.src.find((source) => source.format === 'woff') ?? entry.src[0];
  if (src === undefined) {
    throw new Error(`No font file found for ${weight} ${style}.`);
  }

  const url = experimental_getFontFileURL(src.url, requestUrl);
  const response = await fetch(url);
  const data = await response.arrayBuffer();

  return { data, name, weight: Number(weight), style };
};

export const GET: APIRoute = async (context) => {
  const fraunces = fontData['--font-fraunces'];
  const instrument = fontData['--font-instrument-sans'];

  const [fraunces600, instrument400] = await Promise.all([
    getFont(fraunces, 'Fraunces', '600', 'normal', context.url),
    getFont(instrument, 'Instrument Sans', '400', 'normal', context.url),
  ]);

  const markup = html`
    <div
      style="width: 100%; height: 100%; display: flex; flexDirection: column; justifyContent: space-between; backgroundColor: #fbfbfa; padding: 80px 96px; fontFamily: Instrument Sans;"
    >
      <div style="display: flex; height: 5px; width: 68px; background: #0ea5e9;"></div>
      <div style="display: flex; flexDirection: column; gap: 20px;">
        <div
          style="display: flex; fontSize: 92px; fontWeight: 600; fontFamily: Fraunces; color: #111111;"
        >
          Bachitter Chahal<span style="color: #0ea5e9;">.</span>
        </div>
        <div
          style="display: flex; flexDirection: column; gap: 4px; fontSize: 30px; color: #737373; lineHeight: 1.4;"
        >
          <div>Web designer and developer.</div>
          <div>${siteConfig.ogTagline}</div>
        </div>
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [fraunces600, instrument400],
  });

  const png = await sharp(Buffer.from(svg)).resize(1200, 630).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
