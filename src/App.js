import './App.css';
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app-videos">
        
        <Video
        likes={111}
        messages={222}
        shares={333}
        name="Ana Carolina"
        description="Gato goleiro"
        music="musica épica"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
        likes={444}
        messages={555}
        shares={777}
        name="Ana Carolina"
        description="Gato goleiro"
        music="musica épica"
        />
        <Video
        likes={888}
        messages={1010}
        shares={1111}
        name="Ana Carolina"
        description="Gato goleiro"
        music="musica épica"
        />
        
      </div>
    </div>
  );
}

export default App;
