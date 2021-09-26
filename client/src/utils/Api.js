const post = async (url, payload) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).catch((error) => {
    alert(JSON.stringify(error));
    return { error: true, ...error };
  });
  if (response.ok) {
    return await response.json();
  } else {
    alert(JSON.stringify(response));
    return { error: true, ...response };
  }
};

module.exports = {
  post,
};
