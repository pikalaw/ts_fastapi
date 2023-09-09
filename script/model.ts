const apiUrl = 'http://localhost:8001';

export async function getWelcome(): Promise<string> {
  const response = await fetch(apiUrl);
  if (!response.ok) throw response;
  const body = await response.json();
  return body['message'];
}
