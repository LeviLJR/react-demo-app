const BASE_URL = "https://jsonplaceholder.typicode.com/"

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {'Content-Type': 'application/json'},
    ...options,
  })

  if(!res.ok){
    let message =res.statusText || 'Request Failed'
    try{
      const maybeJson = await res.json()
      if(maybeJson?.message) message = maybeJson.message
    } catch(_){}
    throw new Error(`${res.status} ${message}`)
  }
  return res.json()
}

export const getPosts = () => request('/posts')
export const getPostById = (id) => request(`/posts/${id}`)
export const getCommentsByPostId = (id) => request(`/posts/${id}/comments`)