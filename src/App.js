import Comments from "./containers/Comments";
import Posts from "./containers/Posts";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Comments />
      <Posts />
    </div>
  );
}

export default App;
