export default function About() {
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-2">About NoteStack</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Managing Your Notes with Ease
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            In NoteStack, the ability to create, read, update, and delete (CRUD) notes forms the cornerstone of its functionality. Built using Next.js, our app provides a seamless experience for organizing your thoughts, ideas, and reminders.
                            <br />
                            <b>Create: Effortlessly Capture Ideas</b>
                            With NoteStack, jotting down your ideas is a breeze. The intuitive interface allows you to swiftly create new notes with just a few clicks or taps. Whether you're brainstorming for a project, making a to-do list, or simply jotting down a quick thought, creating a new note is quick and convenient.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Read: Access Your Notes Anywhere, Anytime
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Your notes are always at your fingertips with NoteStack. Whether you're on your desktop, tablet, or smartphone, you can easily access all your notes with a simple login. The app's responsive design ensures a seamless reading experience across devices, so you can pick up right where you left off, no matter where you are.
                            <br />
                            <b>Edit and Refine Your Thoughts: </b>
                            Need to make changes to a note? No problem. NoteStack allows you to effortlessly update your notes whenever inspiration strikes. Whether you need to correct a typo, add more details, or reorganize your thoughts, the app's intuitive editing tools make it easy to refine your notes to perfection.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Delete: Streamline Your Workspace
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Keeping your workspace clutter-free is essential for staying organized and focused. With NoteStack, you can easily delete any notes you no longer need with just a few clicks. Whether it's a completed task, an outdated idea, or simply something you no longer want to keep, removing notes from your workspace is quick, easy, and hassle-free.
                            <br />
                            <b>Stay Organized and Productive: </b>
                            With its powerful CRUD functionality, NoteStack empowers you to stay organized, boost productivity, and unleash your creativity like never before. Whether you're a student, professional, or creative thinker, NoteStack is your go-to solution for capturing, organizing, and managing your ideas with ease.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}