export interface ImageInfo {
  width: number;
  height: number;
  type: string;
  sizeKB: number;
}

export function loadImageInfo(url: string): Promise<ImageInfo> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      fetch(url)
        .then(response => {
          const type = response.headers.get('Content-Type') || 'unknown';
          const size = Number(response.headers.get('Content-Length')) || 0;
          resolve({
            width: img.naturalWidth,
            height: img.naturalHeight,
            type,
            sizeKB: +(size / 1024).toFixed(2)
          });
        })
        .catch(() => {
          // Se falhar o fetch, ainda retorna width e height
          resolve({
            width: img.naturalWidth,
            height: img.naturalHeight,
            type: 'unknown',
            sizeKB: 0
          });
        });
    };
    img.onerror = () => reject(new Error('Erro ao carregar a imagem'));
    img.src = url;
  });
}
