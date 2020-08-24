# Nested Route

[Code](https://codesandbox.io/s/react-route-nested-6shin)

Routes implement into another Route is called Nested Route.

```                        
www.example.com/             
            
www.example.com/post         
         
www.example.com/post/create  
    
www.example.com/post/edit  

                                                                      
            www.example.com                                           
                                                                      
                    │                                                 
                    │                                                 
     ┌──────────────┴─────────────┐                                   
     │                            │                                   
     ▼                            ▼                                   
                                                                      
 /(root)                       /post                                  
                                                                      
                                  │                                   
                                  │                                   
                     ┌────────────┴───────────────────────┐           
                     │                                    │           
                     │                                    │           
                     ▼                                    ▼           
         /create                              /edit                   
         (full url: /post/create)             (full url: /post/edit)  

```
