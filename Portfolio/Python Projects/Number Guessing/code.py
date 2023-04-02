# Imports needed for the number guesses to work
from random import randint
import math

# WE need to give the users a place to input their wanted range
lowerRange = int(input("Enter your lower bound: "))
upperRange = int(input("Enter your upper bound: "))

# Next we will store this range and find the random number associated to the finder
x = randint(lowerRange, upperRange)

# We will also print out the number of guesses the user is given
guesses = round(math.log(upperRange - lowerRange + 1))
print(f"You have {guesses} guesses to find this number!")

# We will declare the count of guesses as 0. This will allow us to use the count as a starting point for while loop
count = 0

# Using a while loop will give us the option of subtracting from guesses based on the count of loops they have done where the number is not guessed correctly 
while count < guesses:
    count += 1
    
    userGuess = int(input("Please enter your guess here: "))
    
    if userGuess == x:
        print("CONGRATS! You used", count, " guesses to find the random number.")
        # We use break to exit the loop once the number is found
        break
    
    # If not we continue
    elif userGuess > x:
        print("Try again! You guessed too high")
    elif userGuess < x:
        print("Try again! You guessed too low.")

# If the number of guesses is now lower than or equal to the current count, the user has failed
if count > guesses:
    print(f"Seeing the number {x} means you failed. Please restart!")
