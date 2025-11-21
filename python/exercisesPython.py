# --- ARCHITECTURE & EXECUTION NOTES ---
# 1. Input Handling: To ensure robust execution in the terminal environment, 
#    all algorithms accept inputs as function parameters rather than using input().
# 2. Language: All code, comments, and outputs are in English for international standards.
# 3. Type Hinting: Standard Python type hinting is used for clarity and documentation.
# ------------------------------------------------------------------------------

import random
from typing import Union, Any
from datetime import date

# Define a generic type for numbers (int or float)
Number = Union[int, float]

# --- EXERCISE 1 ---
# 1 - Write an algorithm that reads the values of A, B, and C, and then prints the sum of A and B, and shows whether the sum is less than C.

def exercise1(a: Number, b: Number, c: Number) -> None:
    """
    Calculates the sum of A and B and determines if the sum is less than C.
    """
    # 1. Rigorous Input Validation
    if not all(isinstance(val, (int, float)) for val in [a, b, c]):
        print("Error: All inputs must be valid numbers.")
        return

    sum_ab = a + b
    
    # 2. Output Sum
    print(f"The result of the sum of A ({a}) and B ({b}) is: {sum_ab}")

    # 3. Conditional Check
    if sum_ab < c:
        print(f"The sum ({sum_ab}) is LESS THAN C ({c}).")
    else:
        print(f"The sum ({sum_ab}) is NOT LESS THAN C ({c}).")

# --- EXERCISE 2 ---
# 2 - Write an algorithm to receive any number and print whether the number is even or odd, positive or negative.

def exercise2(num: Number) -> None:
    """
    Checks a given number and prints if it is even/odd and positive/negative/zero.
    """
    # 1. Rigorous Input Validation
    if not isinstance(num, (int, float)):
        print(f"Error: Input '{num}' is not a valid number.")
        return

    # Determine parity (Even or Odd)
    if int(num) % 2 == 0:
        even_odd = "EVEN"
    else:
        even_odd = "ODD"

    # Determine sign
    if num > 0:
        pos_neg = "POSITIVE"
    elif num < 0:
        pos_neg = "NEGATIVE"
    else:
        pos_neg = "ZERO"
        
    print(f"The number {num} is {even_odd} and {pos_neg}.")

# --- EXERCISE 3 ---
# 3 - Write an algorithm that reads two integer values, A and B. If the values of A and B are equal, the algorithm must sum both values; otherwise, it must multiply A by B.

def exercise3(a: Number, b: Number) -> None:
    """
    Performs sum if A equals B, or multiplication if A is different from B.
    """
    # 1. Rigorous Input Validation
    if not all(isinstance(val, (int, float)) for val in [a, b]):
        print("Error: All inputs must be valid numbers.")
        return

    C: Number 

    if a == b:
        C = a + b
        print(f"A ({a}) and B ({b}) are EQUAL. Operation: SUM ({a} + {b})")
    else:
        C = a * b
        print(f"A ({a}) and B ({b}) are DIFFERENT. Operation: MULTIPLY ({a} * {b})")
        
    print(f"The final value of C is: {C}")

# --- EXERCISE 4 ---
# 4 - Write an algorithm that receives an integer and prints its predecessor and successor to the screen.

def exercise4(num: int) -> None:
    """
    Reads an integer and prints its predecessor and successor.
    """
    # 1. Rigorous Input Validation
    if not isinstance(num, int):
        print(f"Error: Input '{num}' must be a valid integer.")
        return
    
    predecessor = num - 1
    successor = num + 1

    print(f"The number received is: {num}")
    print(f"Predecessor: {predecessor}")
    print(f"Successor: {successor}")

# --- EXERCISE 5 ---
# 5 - Write an algorithm that reads the minimum wage value and a user's salary value, calculates how many minimum wages that user earns.

MINIMUM_WAGE = 1518.00

def exercise5(user_salary: Number) -> None:
    """
    Calculates how many minimum wages a user earns based on a fixed base value.
    """
    # 1. Rigorous Input Validation
    if not isinstance(user_salary, (int, float)) or user_salary < 0:
        print(f"Error: Input '{user_salary}' must be a valid non-negative number.")
        return
    
    proportion = user_salary / MINIMUM_WAGE

    print("--- Minimum Wage Calculation ---")
    print(f"Minimum Wage: R$ {MINIMUM_WAGE:.2f}")
    print(f"User's Salary: R$ {user_salary:.2f}")
    print(f"The user earns approximately {proportion:.2f} minimum wages.")

# --- EXERCISE 6 ---
# 6 - Write an algorithm that reads any value and prints it to the screen with a 5% adjustment (increase).

def exercise6(original_value: Number) -> None:
    """
    Calculates a 5% increase on a given value.
    """
    # 1. Rigorous Input Validation
    if not isinstance(original_value, (int, float)):
        print(f"Error: Input '{original_value}' must be a valid number.")
        return

    adjusted_value = original_value * 1.05

    print("--- 5% Adjustment Calculation ---")
    print(f"Original Value: {original_value:.2f}")
    print(f"Adjusted Value (5% increase): {adjusted_value:.2f}")

# --- EXERCISE 7 ---
# 7 - Write an algorithm that reads two boolean (logical) values and determines if both are TRUE or FALSE.

def exercise7(x: bool, y: bool) -> None:
    """
    Reads two boolean values and determines their relationship.
    """
    # 1. Rigorous Input Validation
    if not all(isinstance(val, bool) for val in [x, y]):
        print("Error: Both inputs must be valid boolean values (True or False).")
        return

    if x == y:
        if x: 
            print("Result: Both values are TRUE.")
        else: 
            print("Result: Both values are FALSE.")
    else:
        print("Result: The values are DIFFERENT (one is True, one is False).")

# --- EXERCISE 8 ---
# 8 - Write an algorithm that reads three different integer values and prints the values to the screen in descending order.

def exercise8(a: Number, b: Number, c: Number) -> None:
    """
    Reads three different integer values and prints them in descending order.
    """
    # 1. Rigorous Input Validation
    if not all(isinstance(val, int) for val in [a, b, c]):
        print("Error: All inputs must be valid integers.")
        return
    
    if a == b or a == c or b == c:
        print("Error: All three input values must be different.")
        return

    values = [a, b, c]
    values.sort(reverse=True)

    print(f"Original inputs: A={a}, B={b}, C={c}")
    print(f"Descending order: {values}")

# --- EXERCISE 9 ---
# 9 - Write an algorithm that calculates a person's BMI (Body Mass Index) and prints their condition.

def exercise9(weight: Number, height: Number) -> None:
    """
    Calculates a person's BMI and determines their condition based on classification.
    """
    # 1. Rigorous Input Validation
    if not all(isinstance(val, (int, float)) for val in [weight, height]):
        print("Error: All inputs must be valid numbers.")
        return
    
    if height <= 0 or weight <= 0:
        print("Error: Height and weight must be positive values.")
        return

    bmi = weight / (height * height)
    condition = ""
    
    if bmi < 18.5:
        condition = "Underweight"
    elif bmi <= 24.9:
        condition = "Normal Weight (Congratulations!)"
    elif bmi <= 29.9:
        condition = "Slightly Overweight"
    elif bmi <= 34.9:
        condition = "Obesity Grade I"
    elif bmi <= 39.9:
        condition = "Obesity Grade II (Severe)"
    else:
        condition = "Obesity Grade III (Morbid)"

    print("--- BMI Result ---")
    print(f"Height: {height:.2f}m, Weight: {weight:.2f}kg")
    print(f"Your calculated BMI is: {bmi:.1f}")
    print(f"Condition: {condition}")

# --- EXERCISE 10 ---
# 10 - Write an algorithm that reads three grades obtained by a student and prints the average of the grades to the screen.

def exercise10(grade1: Number, grade2: Number, grade3: Number) -> None:
    """
    Calculates the average of three student grades.
    """
    grades = [grade1, grade2, grade3]
    if not all(isinstance(val, (int, float)) for val in grades):
        print("Error: All inputs must be valid numbers.")
        return
    
    if any(grade < 0 for grade in grades):
        print("Error: Grades cannot be negative.")
        return

    average = sum(grades) / 3

    print("--- Grade Average Calculation ---")
    print(f"Grades: {grade1:.2f}, {grade2:.2f}, {grade3:.2f}")
    print(f"The final average is: {average:.2f}")

# --- EXERCISE 11 ---
# 11 - Write an algorithm that reads four grades, calculates the average, and prints if the student was approved or failed.

APPROVAL_THRESHOLD = 7.0

def exercise11(student_name: str, grade1: Number, grade2: Number, grade3: Number, grade4: Number) -> None:
    """
    Calculates a student's final average from four grades and determines approval status.
    """
    if not isinstance(student_name, str) or not student_name.strip():
        print(f"Error: Student name must be a valid non-empty string.")
        return

    grades = [grade1, grade2, grade3, grade4]
    if not all(isinstance(val, (int, float)) for val in grades):
        print("Error: All grades must be valid numbers.")
        return
    
    if any(grade < 0 for grade in grades):
        print("Error: Grades cannot be negative.")
        return

    average = sum(grades) / 4
    status = "Approved" if average >= APPROVAL_THRESHOLD else "Failed"

    print("--- Student Grade Report ---")
    print(f"Student: {student_name}")
    print(f"Grades: {grade1:.1f}, {grade2:.1f}, {grade3:.1f}, {grade4:.1f}")
    print(f"Final Average: {average:.2f}")
    print(f"Status: {status}")

# --- EXERCISE 12 ---
# 12 - Calculate product value based on payment method.

DISCOUNT_CASH = 0.15
DISCOUNT_CARD_SINGLE = 0.10
INTEREST_INSTALLMENTS = 0.10

def exercise12(product_price: Number, payment_code: int) -> None:
    """
    Calculates the final price of a product based on the payment method code using match/case.
    """
    if not isinstance(product_price, (int, float)) or not isinstance(payment_code, int):
        print("Error: Inputs must be valid numbers.")
        return
    
    if product_price <= 0 or payment_code <= 0:
        print("Error: Inputs must be positive values.")
        return
    
    final_price = 0.0
    condition_desc = ""

    match payment_code:
        case 1:
            final_price = product_price * (1 - DISCOUNT_CASH)
            condition_desc = "Cash/Pix (15% Discount)"
        case 2:
            final_price = product_price * (1 - DISCOUNT_CARD_SINGLE)
            condition_desc = "Single Card Payment (10% Discount)"
        case 3:
            final_price = product_price
            condition_desc = "Two Installments (Normal Price)"
        case 4:
            final_price = product_price * (1 + INTEREST_INSTALLMENTS)
            condition_desc = "Three+ Installments (10% Interest)"
        case _:
            print(f"Error: Invalid payment code ({payment_code}).")
            return

    print("--- Payment Calculation Report ---")
    print(f"Original Price: ${product_price:.2f}")
    print(f"Payment Method: {condition_desc}")
    print(f"Final Price to be paid: ${final_price:.2f}")

# --- EXERCISE 13 ---
# 13 - Read name and age, determine if minor or legal age.

LEGAL_AGE_THRESHOLD = 18

def exercise13(name: str, age: Number) -> None:
    """
    Reads a person's name and age, and determines if they are a minor or of legal age.
    """
    if not isinstance(name, str) or not name.strip():
        print(f"Error: Name must be a valid non-empty string.")
        return

    if not isinstance(age, (int, float)) or age < 0:
        print("Error: Age must be a valid non-negative number.")
        return

    status = "of legal age" if age >= LEGAL_AGE_THRESHOLD else "a minor"

    print("--- Age Verification Report ---")
    print(f"Name: {name}")
    print(f"Age: {age}")
    print(f"Status: {name} is {status}.")

# --- EXERCISE 14 ---
# 14 - Swap values A and B.

def exercise14(a: Any, b: Any) -> None:
    """
    Swaps the values of two variables using Tuple Unpacking.
    """
    print(f"Initial values: A={a} | B={b}")
    a, b = b, a
    print(f"Swapped values: A={a} | B={b}")

# --- EXERCISE 15 ---
# 15 - Calculate age in years, months, days.

DAYS_IN_YEAR = 365
DAYS_IN_MONTH = 30

def exercise15(birth_year: int) -> None:
    """
    Calculates a person's approximate age in years, months, and days based on their birth year.
    """
    current_year = date.today().year
    
    if not isinstance(birth_year, int) or birth_year < 0 or birth_year > current_year:
        print(f"Error: Birth year must be a valid integer between 0 and {current_year}.")
        return
    
    age_in_years = current_year - birth_year
    total_days = age_in_years * DAYS_IN_YEAR

    years_lived = total_days // DAYS_IN_YEAR
    days_after_years = total_days % DAYS_IN_YEAR
    months_lived = days_after_years // DAYS_IN_MONTH
    final_days_lived = days_after_years % DAYS_IN_MONTH

    print("--- Life Duration Report ---")
    print(f"Birth Year: {birth_year}")
    print(f"Total life duration (Approximate): {years_lived} years, {months_lived} months, and {final_days_lived} days.")

# --- EXERCISE 16 ---
# 16 - Triangle validation and classification.

def exercise16(a: Number, b: Number, c: Number) -> None:
    """
    Reads three side lengths, checks if they form a valid triangle, and classifies it.
    """
    sides = [a, b, c]
    if not all(isinstance(val, (int, float)) for val in sides) or any(side <= 0 for side in sides):
        print("Error: Inputs must be positive numbers.")
        return
    
    is_valid = (a + b > c) and (a + c > b) and (b + c > a)

    if not is_valid:
        print(f"The values ({a}, {b}, {c}) DO NOT form a valid triangle.")
        return
    
    if a == b == c:
        triangle_type = "Equilateral"
    elif a == b or a == c or b == c:
        triangle_type = "Isosceles"
    else:
        triangle_type = "Scalene"
    
    print(f"The values ({a}, {b}, {c}) form a VALID triangle.")
    print(f"The triangle is classified as: {triangle_type}")

# --- EXERCISE 17 ---
# 17 - Fahrenheit to Celsius conversion.

def exercise17(fahrenheit: Number) -> None:
    """
    Reads a temperature in Fahrenheit and calculates the corresponding value in Celsius.
    """
    if not isinstance(fahrenheit, (int, float)):
        print(f"Error: Input '{fahrenheit}' is not a valid number.")
        return

    celsius = (5 * (fahrenheit - 32)) / 9

    print("--- Temperature Conversion ---")
    print(f"Fahrenheit: {fahrenheit:.1f}°F")
    print(f"Celsius: {celsius:.1f}°C")

# --- EXERCISE 18 ---
# 18 - Growth simulation (Francisco vs Sara).

CM_PER_METER = 100

def exercise18() -> None:
    """
    Calculates how many years it takes for the shorter person (Sara) to surpass the taller person (Francisco).
    """
    francisco_height_cm = 1.50 * CM_PER_METER
    sara_height_cm = 1.10 * CM_PER_METER
    francisco_growth = 2
    sara_growth = 3
    years = 0

    if francisco_height_cm >= sara_height_cm and francisco_growth >= sara_growth:
        print("Result: The overtaking is impossible.")
        return

    while francisco_height_cm >= sara_height_cm:
        francisco_height_cm += francisco_growth
        sara_height_cm += sara_growth
        years += 1

    print("--- Growth Simulation Result ---")
    print(f"It took {years} years for Sara to become taller than Francisco.")
    print(f"At year {years}: Francisco ({francisco_height_cm:.2f} cm) | Sara ({sara_height_cm:.2f} cm)")

# --- EXERCISE 19 ---
# 19 - Multiplication table 1 to 10.

def exercise19() -> None:
    """
    Generates and prints the multiplication tables from 1 to 10 using nested loops.
    """
    for i in range(1, 11):
        print(f"\n--- Multiplication Table for {i} ---")
        for j in range(1, 11):
            print(f"{i} x {j} = {i * j}")

# --- EXERCISE 20 ---
# 20 - Multiplication table for input integer.

def exercise20(num: int) -> None:
    """
    Generates and prints the multiplication table (from 1 to 10) for a given integer.
    """
    if not isinstance(num, int):
        print(f"Error: Input '{num}' must be a valid integer.")
        return

    print(f"\n--- Multiplication Table for {num} ---")
    for i in range(1, 11):
        print(f"{num} x {i} = {num * i}")

# --- EXERCISE 21 ---
# 21 - Random number 0-100.

def exercise21() -> None:
    """
    Generates and prints a random integer value between 0 and 100.
    """
    random_number = random.randint(0, 100)
    print(f"Generated random value: {random_number}")

# --- EXERCISE 22 ---
# 22 - Division quotient and remainder.

def exercise22(a: int, b: int) -> None:
    """
    Calculates and prints the integer quotient and the remainder.
    """
    if not isinstance(a, int) or not isinstance(b, int):
        print("Error: Both inputs must be valid integers.")
        return

    if b == 0:
        print("Error: Division by zero is not allowed.")
        return

    print(f"\n--- Division of {a} by {b} ---")
    print(f"Integer Quotient: {a // b}")
    print(f"Remainder (Modulo): {a % b}")

# --- EXERCISE 23 ---
# 23 - Teacher's Net Salary.

def exercise23(hourly_rate: Number, classes_taught: Number, inss_discount: Number) -> None:
    """
    Calculates a teacher's net salary based on class hours, teaching volume, and INSS discount.
    """
    inputs = [hourly_rate, classes_taught, inss_discount]
    if not all(isinstance(val, (int, float)) for val in inputs) or any(val < 0 for val in inputs):
        print("Error: Inputs must be positive numbers.")
        return
    
    gross_salary = hourly_rate * classes_taught
    discount_amount = (gross_salary * inss_discount) / 100
    net_salary = gross_salary - discount_amount

    print("\n--- Teacher Salary Calculation ---")
    print(f"Gross Salary: ${gross_salary:.2f}")
    print(f"INSS Discount ({inss_discount}%): ${discount_amount:.2f}")
    print(f"Final Net Salary: ${net_salary:.2f}")

# --- EXERCISE 24 ---
# 24 - Fuel Calculation.

KM_PER_LITER = 12

def exercise24(travel_time: Number, average_speed: Number) -> None:
    """
    Calculates the distance traveled and fuel consumption based on travel time and average speed.
    """
    inputs = [travel_time, average_speed]
    if not all(isinstance(val, (int, float)) for val in inputs) or any(val < 0 for val in inputs):
        print("Error: Inputs must be non-negative.")
        return

    distance_traveled = travel_time * average_speed
    liters_used = distance_traveled / KM_PER_LITER

    print("\n--- Trip Calculation Results ---")
    print(f"Input Time Spent: {travel_time:.1f} hours")
    print(f"Input Average Speed: {average_speed:.1f} km/h")
    print(f"Calculated Distance Traveled: {distance_traveled:.2f} km")
    print(f"Calculated Fuel Liters Used: {liters_used:.2f} liters")


# =============================================================================
# === MAIN EXECUTION BLOCK (Runs all examples) ================================
# =============================================================================

if __name__ == '__main__':
    print("=======================================================================")
    print("=============== RUNNING ALL 24 ALGORITHMS (PYTHON PORTFOLIO) ==========")
    print("=======================================================================")

    print("\n[EXERCISE 1]")
    exercise1(10, 5, 20)
    exercise1(50, 60, 100)

    print("\n[EXERCISE 2]")
    exercise2(18)
    exercise2(-7)
    exercise2(0)

    print("\n[EXERCISE 3]")
    exercise3(5, 5)
    exercise3(8, 3)

    print("\n[EXERCISE 4]")
    exercise4(100)
    exercise4(-5)

    print("\n[EXERCISE 5]")
    exercise5(3036.00)
    exercise5(759.00)

    print("\n[EXERCISE 6]")
    exercise6(100)
    exercise6(5000)

    print("\n[EXERCISE 7]")
    exercise7(True, True)
    exercise7(False, False)
    exercise7(True, False)

    print("\n[EXERCISE 8]")
    exercise8(5, 1, 10)
    exercise8(-10, 0, -5)

    print("\n[EXERCISE 9]")
    exercise9(70, 1.75)
    exercise9(55, 1.80)
    exercise9(105, 1.60)

    print("\n[EXERCISE 10]")
    exercise10(7.5, 6.5, 7.0)
    exercise10(5, 6, 5)

    print("\n[EXERCISE 11]")
    exercise11("Alice Johnson", 8.0, 7.5, 7.0, 7.5)
    exercise11("Bob Williams", 7.0, 6.0, 7.5, 7.0)

    print("\n[EXERCISE 12]")
    exercise12(100, 1)
    exercise12(100, 4)

    print("\n[EXERCISE 13]")
    exercise13("Sarah Connor", 17)
    exercise13("Jane Doe", 50)

    print("\n[EXERCISE 14]")
    exercise14(10, 20)
    exercise14("Hello", "World")

    print("\n[EXERCISE 15]")
    exercise15(1990)
    exercise15(2020)

    print("\n[EXERCISE 16]")
    exercise16(5, 5, 5)
    exercise16(3, 4, 10) # Invalid

    print("\n[EXERCISE 17]")
    exercise17(212)
    exercise17(32)

    print("\n[EXERCISE 18]")
    exercise18()

    print("\n[EXERCISE 19]")
    exercise19()

    print("\n[EXERCISE 20]")
    exercise20(5)

    print("\n[EXERCISE 21]")
    exercise21()

    print("\n[EXERCISE 22]")
    exercise22(10, 3)
    exercise22(-10, 3)

    print("\n[EXERCISE 23]")
    exercise23(25.00, 80, 11)
    exercise23(40.00, 100, 15)

    print("\n[EXERCISE 24]")
    exercise24(10, 85)
    exercise24(2.5, 60)

    print("\n=======================================================================")
    print("======================= ALL EXERCISES COMPLETED =======================")
    print("=======================================================================\n")