import connectToMongoDB from '@/libs/mongodb';
import AddNote from './Components/AddNote'
import NotesList from './Components/NotesList';
export default function Home() {
  return (
    <>
      <AddNote />
      <NotesList />
    </>
  );
}
