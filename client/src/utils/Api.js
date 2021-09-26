const post = async (url, payload) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).catch((error) => {
    alert(error);
    return { error: true, ...error };
  });
  if (response.ok) {
    return await response.json();
  } else {
    alert(response.status);
    return { error: true, ...response };
  }
};

module.exports = {
  post,
};
