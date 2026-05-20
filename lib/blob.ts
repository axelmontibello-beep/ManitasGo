import { put, del } from "@vercel/blob";

const blobReady =
  !!process.env.BLOB_READ_WRITE_TOKEN &&
  !process.env.BLOB_READ_WRITE_TOKEN.includes("placeholder");

export async function uploadFile(
  filename: string,
  file: File | Blob,
  folder = "general"
): Promise<string> {
  if (!blobReady) {
    // Fase 1 (mock): devuelve imagen de placeholder
    return `https://placehold.co/400x300/E6F9F4/13C296?text=Foto`;
  }
  const { url } = await put(`${folder}/${Date.now()}-${filename}`, file, {
    access: "public",
  });
  return url;
}

export async function deleteFile(url: string): Promise<void> {
  if (!blobReady) return;
  await del(url);
}
