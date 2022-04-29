import { useEffect } from 'react'
import NewNote from './components/NewNote.js'
import Notes from './components/Notes.js'
import VisibilityFilter from './components/VisibilityFilter.js'
import noteService from './services/notes.js'
import {setNotes} from './reducers/noteReducer.js'
import {useDispatch} from 'react-redux'
const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        noteService
            .getAll().then(notes => dispatch(setNotes(notes)))
    }, [dispatch])
    
    return(
        <div>
        <NewNote />
        <VisibilityFilter />
        <Notes />
        </div>
    )
}
export default App;
