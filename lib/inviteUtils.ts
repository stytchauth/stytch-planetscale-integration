import { BASE_URL } from './constants';

const url = `${BASE_URL}/api/invite_user`;

export async function inviteUser(email: string) {
  const resp = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
    }),
  });

  console.log(resp.json())

  if (!resp.ok) {
    throw new Error('unable to invite user');
  }

  const data = await resp.json();
  return data;
}
