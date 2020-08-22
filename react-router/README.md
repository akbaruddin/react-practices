# [React Router](https://reactrouter.com/web/guides/quick-start)

React Router is the standard routing library for React.

React Router keeps your UI in sync with the URL

```
┌──────────────────┐                                   
│ www.example.com  │                                   
└──────────────────┘             ┌────────────────────┐
  ┌──────────────┐               │ Component - Render │
  │              │               ├────────────────────┤
  │              │               │                    │
  │              │──────────────▶│      <Home />      │
  │              │               │                    │
  └────┬────┬────┘               └────────────────────┘
    ┌──┴────┴──┐                                       
    └──────────┘                                       
                                                       
                                                       
                                                       
┌──────────────────────┐                               
│www.example.com/about │                               
└──────────────────────┘         ┌────────────────────┐
  ┌──────────────┐               │ Component - Render │
  │              │               ├────────────────────┤
  │              │               │                    │
  │              │──────────────▶│     <About />      │
  │              │               │                    │
  └────┬────┬────┘               └────────────────────┘
    ┌──┴────┴──┐                                       
    └──────────┘                                                                           
```

- Basic
- Nested
- Query Parameters and so on.
