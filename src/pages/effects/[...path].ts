import type { APIContext } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

const effectsRoot = path.join(process.cwd(), 'effectsTipsTricks');

const getContentType = (ext: string) => {
  switch (ext) {
    case '.css':
      return 'text/css; charset=utf-8';
    case '.js':
      return 'text/javascript; charset=utf-8';
    case '.html':
      return 'text/html; charset=utf-8';
    case '.json':
      return 'application/json; charset=utf-8';
    case '.svg':
      return 'image/svg+xml';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.gif':
      return 'image/gif';
    case '.webp':
      return 'image/webp';
    case '.ico':
      return 'image/x-icon';
    default:
      return 'application/octet-stream';
  }
};

export async function GET({ params }: APIContext) {
  const parts = Array.isArray(params.path) ? params.path : [params.path].filter(Boolean);
  if (parts.length === 0) return new Response('Not found', { status: 404 });

  const requestedPath = path.join(effectsRoot, ...parts);
  const resolved = path.resolve(requestedPath);
  const rootResolved = path.resolve(effectsRoot);

  if (!resolved.startsWith(rootResolved)) {
    return new Response('Not found', { status: 404 });
  }

  try {
    const file = await fs.readFile(resolved);
    const ext = path.extname(resolved).toLowerCase();
    return new Response(file, {
      status: 200,
      headers: {
        'Content-Type': getContentType(ext)
      }
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
