export default async function handler(req, res) {
  const baseApi = process.env.NEXT_PUBLIC_BASE_API;
  const { id } = req.query;
  const data = await fetch(`${baseApi}/${id}.json`).then((response) =>
    response.json().then((result) => result)
  );
  res.status(200).json(data);
}
