declare module 'file-saver' {
    export function saveAs(blob: Blob | string, filename?: string): void;
  }