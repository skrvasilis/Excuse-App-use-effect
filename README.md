# Excuse-App-use-effect

## Create a find excuses App
 
- Create a react app
 
- You must use this Api https://excuser.herokuapp.com/
 
- You should have at least 2 components Form.js and Excuses.js
 
### Task 1
- On the first render make an API call to https://excuser.herokuapp.com/v1/excuse and get a random excuse. Display it In the Excuses component
 
###  Task 2
- In the Form component, make a drop down menu. The user can choose from 5 categories for excuses
 
- After the user choose the category, inside a useEffect() make an api call to get an excuse based on the chosen category
 
- Display the new excuse
 
### Task 3
- The user might need more than one excuse. Make an input in order to get the number of the excuses the user wants to see
 
- Add a new dependency "number" inside your useEffect. Whenever the user is changing the numbers of the excuses make a new API call in order to get the right amount
 
- Display the excuses
 
 
### Task 4
- Depends on the category the user is choosing change the background color of the excuses
 

