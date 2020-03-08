# Password_Generator-

To begin, I created a function called init in order to run the seperate function needed to generate a random password. 

Inside of init I have two functions. The first one asks the user the desired length of their password and what type of characters they would like to use. Once that data is collected it is then used to generate a single array to run theough the randomizer. Depending on the choices made by the user, my function will select their desired characters by running the bolean values through a series of if/else statements. 

Once the function tests the if/else statements we create a string of all the possible characters they can have in their desired password. 

The single string is then passed through my second function. The second function uses the Math.random in order to generate a random password. The function ends at the length of the desired password, which is information collected from the user in the beginning. 

Once the random password is generated it is the printed onto the input field on the screen. 

The function init is ran by selecting the "generate password" button. We then gave it onclick properties. 

Finally there was a "copy to clipboard" button added. This button first focuses on the action you want to take and then selects it using .focus() and .select(). Once those items are executed, I used execCommand('copy') in order to copy the generated password onto my clipboard.

<img width="939" alt="password_gen" src="https://user-images.githubusercontent.com/42880531/76157575-5fc53080-60bf-11ea-858d-a6cd4a8000a0.png">

https://anabee.github.io/Password_Generator/