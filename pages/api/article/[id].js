export default async function handler(req, res) {
  const baseApi = process.env.NEXT_PUBLIC_BASE_API;
  const { id } = req.query;
  try {
    const response = await fetch(`${baseApi}/${id}.json`);
    const result = await response.json();
    return res.status(response.status).json(result);
  } catch (error) {
    return res.status(400).json({
      message: `Could not fetch article with id: ${id}`,
    });
  }
}
