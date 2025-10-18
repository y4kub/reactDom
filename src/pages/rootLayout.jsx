import Home from "./home";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React ROuter contacts</h1>
        <nav>
          <ul>
            <li>
              <Home />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
