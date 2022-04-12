export interface Picture {
  id?: string;
  url: string;
  width?: number;
  height?: number;
}

export const fetchRandomPicture = async () => {
  console.log("fetch me");
  const result = await fetch(
    "https://api.thecatapi.com/v1/images/search?size=full&limit=1",
    {
      headers: {
        "x-api-key": "a5fe5390-3d57-49e2-85fd-324a8f05d77c",
      },
    }
  );

  const pictures = (await result.json()) as Picture[];
  return pictures[0];
};
