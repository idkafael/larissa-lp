/**
 * Fotos em public/images/depoimentos.
 * Ao incluir novos arquivos na pasta, adicione o nome aqui (exclua temporários tipo ~tmp*).
 */
export const DEPOIMENTOS_FILENAMES = [
  '20250118_004549000_iOS.jpg',
  '20250118_004636000_iOS.jpg',
  '20250118_004734000_iOS.jpg',
  '20250801_124554000_iOS.jpg',
  '20250801_124642000_iOS.jpg',
  '20250801_124713000_iOS.jpg',
  '20250806_235512000_iOS 1.jpg',
  '20250806_235512000_iOS.jpg',
  '20250806_235515000_iOS.jpg',
  '20250808_155022000_iOS.jpg',
  '20250808_155104000_iOS.jpg',
  '20250808_155205000_iOS.jpg',
  'PHOTO-2026-01-18-12-08-02 1.jpg',
  'PHOTO-2026-01-18-12-08-02 2.jpg',
  'PHOTO-2026-01-18-12-08-02.jpg',
  'PHOTO-2026-01-18-12-12-14 1.jpg',
  'PHOTO-2026-01-18-12-12-14 2.jpg',
  'PHOTO-2026-01-18-12-12-14 3.jpg',
  'PHOTO-2026-01-18-12-12-14.jpg',
  'PHOTO-2026-01-18-12-27-04 1.jpg',
  'PHOTO-2026-01-18-12-27-04 2.jpg',
  'PHOTO-2026-01-18-12-27-04 3.jpg',
  'PHOTO-2026-01-18-12-27-04.jpg',
  'PHOTO-2026-03-13-13-18-09.jpg',
  'PHOTO-2026-04-08-17-24-24 1 1.jpg',
  'PHOTO-2026-04-08-17-24-24 1.jpg',
  'PHOTO-2026-04-08-17-24-24 2.jpg',
  'PHOTO-2026-04-08-17-24-24.jpg',
]

export function depoimentoSrc(filename) {
  return `/images/depoimentos/${encodeURIComponent(filename)}`
}
