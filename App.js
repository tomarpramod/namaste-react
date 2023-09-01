/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h1> I am h2 child tag </h1>
 *      </div>
 * </div>
 * 
 * 
 * <div class="demo">
 *     <div class="demochild">
 *        <h1>Hello I am Div Class</h1>
 *     </div>
 *  *  <div class="demochild2">
 *        <h1>Hello I am Div Class</h1>
 *     </div>
 * </div>
 */



const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I am h1 Tag"),
        React.createElement("h2", {}, "I am h2 Tag"),
]),
React.createElement("div", {id:"child2"}, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
]),
]);




// const heading = React.createElement("h1", {id:'heading'}, "Hello word from React!");
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent);
// root.render(parent);
root.render(parent);