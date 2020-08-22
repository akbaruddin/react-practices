Query parameters are a defined set of parameters attached to the end of a url. [Code](https://codesandbox.io/s/react-route-query-parameter-zn4bp)

Simple `key`=`value` query strings.

```                                
      Parameter Name       Parameter Value 
             ▲                    ▲        
             │                    │        
             │                    │        
             └─────┐     ┌────────┘        
                   │     │                 
                   │     │                 
                   │     │                 
                   │     │                 
 www.example.com/?state=delhi              
────────────────  ─────┬─────              
       │               │                   
       │               │                   
       ▼               │                   
    Base URL           │                   
                       │                   
                       ▼                   
                  Query Parameter          
```
