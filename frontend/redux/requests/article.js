import req from '../req'
import { batch } from 'react-redux'
import { setObject, updateObject, deleteObject, setList, setFetch, alert } from '../actions'
import store from '../store'

export const createArticle = (body) => {
  return (dispatch) => {
    req(`/api/article`, {
      method: 'post',
      body
    })
    .then(article => {
      dispatch(alert('Article sauvegardé', 'success'))
    })
    .catch(e => null)
  }
}

export const updateArticle = (body) => {
  return (dispatch) => {
    req(`/api/article`, {
      method: 'put',
      body
    })
    .then(article => {
      delete article.user
      dispatch(alert('Article édité', 'success'))
      dispatch(updateObject('article', article))
    })
    .catch(e => null)
  }
}

export const deleteArticle = (body) => {
  return async (dispatch) => {
    const article = await req(`/api/article`, {
      method: 'delete',
      body,
      fetchName: 'deleteArticle'
    })
    if (article) {
      dispatch(deleteObject('article'))
      dispatch(alert('Article supprimé', 'success'))
    }
  }
}

export const getArticles = (query) => {
  return async (dispatch) => {
    const articles = await req(`/api/articles`, {
      query,
      fetchName: 'articles',
    })
    if (articles)
      dispatch(setList('articles', articles))
  }
}

export const getArticle = (query) => {
  return async (dispatch) => {
    const article = await req(`/api/article`, {
      query,
      fetchName: 'article',
    })
    if (article) {
      dispatch(setObject('article', article))
    }
  }
}