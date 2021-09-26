import { toast } from 'react-toastify';

export const post = async (url, payload) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).catch((error) => {
    return { error: true, ...error };
  });
  if (response.error) {
    toast('Server error', { type: 'error' });
    return { error: true };
  }
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    toast(data.message || response.status, { type: 'error' });
    return { error: true, data };
  }
};
