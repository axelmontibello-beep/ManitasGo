import { put, del, list } from "@vercel/blob";

export async function uploadFile(
  filename: string,
  file: File | Blob,
  folder: string = "general"
): Promise<string> {
  const { url } = await put(`${folder}/${Date.now()}-${filename}`, file, {
    access: "public",
  });
  return url;
}

export async function deleteFile(url: string): Promise<void> {
  await del(url);
}

export { list };
