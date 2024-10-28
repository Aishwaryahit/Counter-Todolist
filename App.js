import Counter from './counter/Counter';
import './App.css';
import Tolist from './to-do-list/Tolist';

function App() {
  return (
    <div>
      < Counter />
      <Tolist />
      <div className='content'>
        <h1> 1 What is the purpose of useState in React?</h1>
        <h2>The useState hook in React is used to add and manage state in functional components. Before hooks, only class components could have state, but useState allows functional components to also manage their own state.

          <ul>Purpose of useState</ul>
          <li>Holding Data: useState allows a component to hold data that may change over time, such as user input, toggles, counters, fetched data, etc.</li>

          <li>Rerendering the Component: When the state changes, React automatically re-renders the component, ensuring that the UI reflects the latest state.</li>

          <li>Managing Local State: useState enables components to have local, isolated state that only that component (and any of its children) needs to access.</li></h2>


        <h1>2 How do you initialize state in a functional component using useState?</h1>
        <h2>To initialize state in a functional component using useState, you simply pass the initial state value as an argument to useState when you call it. This initial state can be any data type, such as a number, string, array, object, or boolean.<br></br><br></br>
          syntax:<br></br>
          const [state, setState] = useState(initialValue);<br></br>
          state: Holds the current value of the state.<br></br>
          setState: A function to update state.<br></br>
          initialValue: The value you want state to start with.
        </h2>

        <h1>3 Difference between using useState in Functional Components vs. this.setState in Class Components</h1>

        <table border="1">
          <thead>
            <tr>
              <th>Feature</th>
              <th>useState in Functional Components</th>
              <th>this.setState in Class Components</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Syntax</td>
              <td>const [state, setState] = useState(initialValue);</td>
              <td>this.state = object key: value; (in constructor)</td>
            </tr>
            <tr>
              <td>State Merging</td>
              <td>Requires manual merging</td>
              <td>Automatic merging</td>
            </tr>
            <tr>
              <td>Multiple State Variables</td>
              <td>Yes, multiple useState hooks</td>
              <td>Single this.state object</td>
            </tr>
            <tr>
              <td>Lifecycle Management</td>
              <td>Uses useEffect</td>
              <td>Built-in lifecycle methods</td>
            </tr>
            <tr>
              <td>Updates Based on Previous State</td>
              <td>Pass function to setState</td>
              <td>Pass function to this.setState</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
