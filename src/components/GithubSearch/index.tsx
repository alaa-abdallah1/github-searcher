import _ from "lodash"
import styles from "./index.module.css"
import {SearchSelectType} from "@/types"
import {RootState, AppDispatch} from "@/store"
import {useDispatch, useSelector} from "react-redux"
import {ChangeEvent, useCallback, useEffect} from "react"
import {fetchItems, resetItems, setEntity, setQuery} from "@/store/githubSlice"

export const GithubSearch = () => {
  const dispatch: AppDispatch = useDispatch()
  const {query, entity} = useSelector((state: RootState) => state.github)

  const debouncedSearch = useCallback(
    _.debounce((searchQuery, searchEntity) => {
      if (searchQuery.length >= 3) {
        dispatch(fetchItems({query: searchQuery, entity: searchEntity}))
      } else {
        dispatch(resetItems())
      }
    }, 500),
    []
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value
    dispatch(setQuery(searchQuery))
  }

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const searchEntity = e.target.value as SearchSelectType
    dispatch(setEntity(searchEntity))
  }

  useEffect(() => {
    debouncedSearch(query, entity)
  }, [query, entity, debouncedSearch])

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        className={styles.inputType}
        placeholder="Start typing to search ..."
        onChange={handleSearch}
      />
      <select
        value={entity}
        className={styles.selectType}
        onChange={handleTypeChange}
      >
        <option value="users">Users</option>
        <option value="repositories">Repositories</option>
      </select>
    </div>
  )
}

export default GithubSearch
