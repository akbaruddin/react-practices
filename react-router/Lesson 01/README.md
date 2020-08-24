# Route Basic

Router create similar as Switch Condition - [Online Code](https://codesandbox.io/s/react-route-basic-f6fic)

```                                                     
<Router> ─────────────────────────────────────────────▶  function - wrapper          
                                                                                     
   <Switch> ────────────────────────────────────────────▶  Switch (Value) {          
                                                                                     
      <Route  ─────────────────────────────────────────────▶ case                    
                                                                                     
       path="/about" ────────────────────────────────────────▶ "about":              
        >                                                                            
                                                                                     
        <About />  ────────────────────────────────────────────▶  About()            
                                                                  break;             
      </Route>                                                                       
                                                                                     
      <Route                                                                         
                                                                                     
       path="/"  ─────────────────────────────────────────▶  default:                
        >                                                                            
                                                                                     
         <Home />  ─────────────────────────────────────────▶   Home()               
                                                                                     
      </Route>                                                                       
                                                                                     
   </Switch>                                               }                         
                                                                                     
</Router>
```
Simple Route
```jsx
function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/about"
        >
          <About />
        </Route>
        <Route
          path="/"
        >
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
```
