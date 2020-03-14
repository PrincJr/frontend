export function setLoading({ load }) {
  return { type: '@general/setLoading', payload: { load } };


}

export function setPost({ data }) {
  return { type: '@general/setPosts', payload: { data } };
}
