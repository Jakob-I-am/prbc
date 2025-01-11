import axios from 'axios';

const postComment = async (obj: any) => {
  const result = await axios.post('/api/comments', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result;
};

export default postComment;
