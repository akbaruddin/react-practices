
![image](assets/url_parameter.png)

#### [Code](https://codesandbox.io/s/react-route-url-parameter-bm0v4)

```jsx
{/* define */}
<Route path="/:userID" >
  <Component />
</Route>
  
  
{/* exract param using `useParams` from 'react-router-dom' */}
function <Component> {
  const { userID } = useParams();

  return (
    <div>
      { userID }
    </div>
  )
}
```
