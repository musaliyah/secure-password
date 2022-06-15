# Password Generator Starter Code

https://musaliyah.github.io/secure-password/

## Password generator that allows users to select length and character types. A password is then andomly generated using special characters, letters and numbers.

In developing the script.js file, I was able to synthesize my understandings from class. In order to complete the assignment I demonstrated using a function, creating if and else if statements, variable creations, querySelectors, adding Event Listeners, and using the document method, getElementById.

Through completing this project, I initially struggled with figuring out the logic behind my if else statements. Through phyrically writing out different variable combinations, I was then able to organize my statements. 

In addition, I struggled to impact the password id element in the html. Through using the text.Content property I was able to return the contents of the password element. 

## Usage 

![Image of prompt pop up](../secure-password/popup.png)

When users press generate password, a series of prompts will pop up at the top of the screen. 

The first prompt allows users to select the character length of their password, between 8 and 128 characters. 

If the user does not put any amount or if the user puts an amount not within the expected range, an alert will pop up and prompt the user to chose a character length within 8-128 characters.

After the user selects the character amount, additional prompts pop up that allow the user to determine what type of characters they desire in their password. They must choose at least one of the following: special characters, uppercase letters, lowercase letters and numbers. 

If the user does not select any character type an alert will pop up stating that the user must select at least one of the types. The user then must restart the generation process by pressing the generate password button. 

Once the user selects the character length and types, a password is randomly generate and appears in the textbox! As seen below:

![Image of page with randomly generated password in textbox](../secure-password/generatepassword.png)

## Credits 

Use of GitHub user "Xandromus" https://github.com/Xandromus

friendly-parakeet files.


## License 

No License. 

