import random
import requests

response = requests.get('https://www.mit.edu/~ecprice/wordlist.10000')
words = response.text.splitlines()
word = random.choice(words).lower()

correct = word
changeUp = ''

while word: 
    position = random.randrange(len(word))
    changeUp += word[position]
    word = word[:position] + word[(position + 1):]

turns = 5
    
print("Look at the changed around word and guess what it is.")
print ("The word change is: ", changeUp)

while turns > 0:
    guess = input(f"Enter the guess: ")
    turns -= 1
    if guess != correct and guess != '':
        print(f"Your guess is wrong. You have {turns} left.")
    elif guess == '':
        print("It looks like you haven't put anything as your guess.")
    else:
        print(f"{guess} was correct! Congrats! You solved the problem with a total of", 5 - turns,"turns.")
        break
    
    
    