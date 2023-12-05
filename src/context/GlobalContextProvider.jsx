import React, { useContext, createContext, useState, useEffect } from 'react'
import { API_ENDPOINTS } from '../apiConfig';
import { getCookie } from '../coreMethods';

const GlobalContext = createContext()
const GlobalContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [person, setPerson] = useState()
    const [posts, setPostToShow] = useState([])
    const [blog, setBlog] = useState([])
    const [error, setError] = useState()
    const [filterFields, setFilterFields] = useState([])
    const [categories, setCategories] = useState([])
    const csrfToken = getCookie('csrftoken');
    
    const handleFilterFields = (filter) => {
        filterFields.includes(filter) ? setFilterFields(filterFields.filter((f) => f!== filter)) : setFilterFields([...filterFields, filter])
    }

    const postMustBeDisplayed = (post) => {
        return filterFields.map(f => post[f.split('-')[0]].includes(f.split('-')[1])).filter(v => v).length
    }

    const filterBySearchInputBox = (evento) => {
        let normalizedString = evento.target.value.toLowerCase()
        if(normalizedString) {
            setPostToShow(posts.filter(p => p.name.toLowerCase().includes(normalizedString) || p.summary.toLowerCase().includes(normalizedString) || p.description.toLowerCase().includes(normalizedString)))
        }else{
            filterFields.length ? setPostToShow(blog.filter(p => postMustBeDisplayed(p))) : setPostToShow(blog)
        }
    }

    useEffect(() => {
        filterFields.length ? setPostToShow(blog.filter(p => postMustBeDisplayed(p))) : setPostToShow(blog)
    },[filterFields])

    useEffect(() => {
        let aux = []
        blog.map((b) => aux.push(...b.skill.map(s => s)))
        setCategories([...new Set(aux)])
    },[blog])

    useEffect(() => {
        fetch(API_ENDPOINTS.getPerson, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
              },
            }
        )
        .then( res => {
            if(!res.ok){
                throw new Error('X');
            }
            const loaderElement = document.querySelector(".loader-container");
            if (loaderElement) {
                loaderElement.remove();
                setLoading(!loading);
            }
            return res.json()
        })
        .then( data => {
            setPerson(data)
            setBlog(data.post)
            setPostToShow(data.post)
        })
        .catch( err => {
            console.log(err)
            return
        })
        .finally(() => {
            setLoading(!loading)
        })
    },[])

    if(loading) { //
        return null;
    }
    
    return (
        <GlobalContext.Provider value={{ posts, categories, filterFields, person, filterBySearchInputBox, handleFilterFields }}>
            {children}
        </GlobalContext.Provider>
    )
}

/*cremos un custom Hook para utilizar el contexto */
export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalContextProvider