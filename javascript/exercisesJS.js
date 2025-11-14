// --- EXECUTION NOTES & CODE ARCHITECTURE ---
// 1. Input Handling: The 'prompt()' function is browser-specific and causes errors 
//    in the Node.js command-line environment (CMD/Terminal). To ensure all algorithms
//    are instantly runnable via 'node [filename].js' without external dependencies, 
//    all functions use parameters and are tested with hardcoded example values.
//    This demonstrates the core logic clearly and correctly.
// 2. Language: All problem statements, code comments, variable names, and output 
//    messages are written in English for international audience reach.
// --------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// --- EXERCISE 1 ---
// 1 - Write an algorithm that reads the values of A, B, and C, and then prints the sum of A and B, and shows whether the sum is less than C.

/**
 * Executes the core logic of the algorithm.
 * @param {number} a - The first input value.
 * @param {number} b - The second input value.
 * @param {number} c - The third input value.
 */
function exercise1(a, b, c) {
    // 1. Rigorous Input Validation
    if (isNaN(a) || isNaN(b) || isNaN(c) || typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        console.log(`Error. Please type a valid number for all inputs.`);
        return; // Stop execution if inputs are invalid.
    }

    const sum = a + b;

    // 2. Output Sum
    console.log(`The result of the sum of A (${a}) and B (${b}) is: ${sum}`);

    // 3. Conditional Check
    if (sum < c) {
        console.log(`The sum (${sum}) is less than C (${c}).`);
    } else {
        // More precise phrase: "is not less than" covers cases where sum == c
        console.log(`The sum (${sum}) is not less than C (${c}).`);
    }
}

// -----------------------------------------------------------------------------
// --- EXERCISE 2 ---
// 2 - Write an algorithm to receive any number and print whether the number is even or odd, positive or negative.

/**
 * Checks a given number and prints if it is even/odd and positive/negative.
 * @param {number} num - The input number to be evaluated.
 */
function exercise2(num) {
    // 1. Rigorous Input Validation
    if (isNaN(num) || typeof num !== 'number') {
        console.log(`Error: Input '${num}' is not a valid number.`);
        return; // Stop execution if input is invalid.
    }

    // Determine parity (Even or Odd). Math.trunc is used as parity applies only to the integer part.
    const evenOdd = Math.trunc(num) % 2 === 0 ? "even" : "odd";

    let posNeg;
    if (num > 0) {
        posNeg = "positive";
    } else if (num < 0) {
        posNeg = "negative";
    } else {
        posNeg = "zero"; // Special case for zero
    }

    console.log(`The number ${num} is ${evenOdd} and ${posNeg}.`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 3 ---
// 3 - Write an algorithm that reads two integer values, A and B. If the values of A and B are equal, the algorithm must sum both values; otherwise, it must multiply A by B. After either calculation, the result must be assigned to a variable C, and its value must be printed to the screen.

/**
 * Reads two integer values, performs a calculation (sum or multiplication) 
 * based on whether they are equal, and prints the result.
 * @param {number} a - The first integer value.
 * @param {number} b - The second integer value.
 */
function exercise3(a, b) {
    // 1. Rigorous Input Validation
    if (isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number') {
        console.log(`Error. Please type a valid number for all inputs.`);
        return; // Stop execution if inputs are invalid.
    }

    let C; // Variable C must be declared before the conditional block.

    if (a === b) {
        // Condition: Values are equal. Sum the values.
        C = a + b;
        console.log(`A (${a}) and B (${b}) are EQUAL. Operation: SUM (${a} + ${b})`);
    } else {
        // Condition: Values are different. Multiply A by B.
        C = a * b;
        console.log(`A (${a}) and B (${b}) are DIFFERENT. Operation: MULTIPLY (${a} * ${b})`);
    }

    console.log(`The final value of C is: ${C}.`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 4 ---
// 4 - Write an algorithm that receives an integer and prints its predecessor and successor to the screen

/**
 * Reads an integer and prints its predecessor and successor.
 * @param {number} num - The input number (integer).
 */
function exercise4(num) {
    // 1. Rigorous Input Validation (Must be a valid number AND an integer)
    if (isNaN(num) || typeof num !== 'number' || !Number.isInteger(num)) {
        console.log(`Error: Input must be a valid integer.`);
        return; // Stop execution if inputs are invalid.
    }

    const predecessor = num - 1;
    const successor = num + 1;

    console.log(`The number received is: ${num}`);
    console.log(`Predecessor: ${predecessor}`);
    console.log(`Successor: ${successor}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 5 ---
// 5 - Write an algorithm that reads the minimum wage value and a user's salary value, calculates how many minimum wages that user earns, and prints the result to the screen. (Base for the Minimum Wage: R$ 1,518.00).

/**
 * Calculates how many minimum wages a user earns based on a fixed base value.
 * @param {number} userSalary - The user's monthly salary.
 */
function exercise5(userSalary) {
    // 1. Rigorous Input Validation
    if (isNaN(userSalary) || typeof userSalary !== 'number' || userSalary < 0) {
        console.log(`Error: Input must be a valid non-negative number.`);
        return; // Stop execution if input is invalid.
    }

    // Set the base minimum wage value (R$ 1,518.00)
    const MINIMUM_WAGE = 1518.00;

    // Calculate the ratio of the user's salary to the minimum wage.
    const proportion = userSalary / MINIMUM_WAGE;

    // 2. Output Results
    console.log("--- Minimum Wage Calculation ---");
    console.log(`Minimum Wage: $${MINIMUM_WAGE.toFixed(2)}`);
    console.log(`User's Salary: $${userSalary.toFixed(2)}`);

    // Output proportion formatted to two decimal places
    console.log(`The user earns approximately ${proportion.toFixed(2)} minimum wages.`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 6 ---
// 6 - Write an algorithm that reads any value and prints it to the screen with a 5% adjustment (increase).

/**
 * Calculates a 5% increase on a given value and prints the original and adjusted values.
 * @param {number} value - The initial numerical value.
 */
function exercise6(value) {
    // 1. Rigorous Input Validation
    if (isNaN(value) || typeof value !== 'number') {
        console.log(`Error: Input must be a valid number.`);
        return; // Stop execution if inputs are invalid.
    }

    // Calculate the 5% adjustment (multiplying by 1.05 for a 5% increase).
    const adjustedValue = value * 1.05;

    console.log(`Original Value: $${value.toFixed(2)}`);
    console.log(`Adjusted Value (5% increase): $${adjustedValue.toFixed(2)}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 7 ---
// 7 - Write an algorithm that reads two boolean (logical) values and determines if both are TRUE or FALSE.

/**
 * Reads two boolean values and determines their relationship (both true, both false, or different).
 * @param {boolean} x - The first boolean value.
 * @param {boolean} y - The second boolean value.
 */
function exercise7(x, y) {
    // 1. Rigorous Input Validation (Must be strictly boolean)
    if (typeof x !== 'boolean' || typeof y !== 'boolean') {
        console.log(`Error: Both inputs must be valid boolean values (true or false).`);
        return;
    }

    if (x === y) {
        // If they are equal, check if they are both true or both false.
        if (x === true) { // Equivalent to (x && y)
            console.log(`Result: Both values are TRUE.`);
        } else { // Equivalent to (!x && !y)
            console.log(`Result: Both values are FALSE.`);
        }
    } else {
        // If they are not equal, one must be true and the other false.
        console.log(`Result: The values are DIFFERENT (one is TRUE, one is FALSE).`);
    }
}

// -----------------------------------------------------------------------------
// --- EXERCISE 8 ---
// 8 - Write an algorithm that reads three different integer values and prints the values to the screen in descending order.

/**
 * Reads three different integer values and prints them in descending order.
 * @param {number} x - The first integer value.
 * @param {number} y - The second integer value.
 * @param {number} z - The third integer value.
 */
function exercise8(x, y, z) {
    // 1. Rigorous Input Validation (Number, Integer, and Distinctness)
    if (isNaN(x) || isNaN(y) || isNaN(z) ||
        typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number' ||
        !Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(z)) {
        console.log(`Error: All inputs must be valid integers.`);
        return;
    }

    // Check if the values are distinct (as required by the prompt).
    if (x === y || x === z || y === z) {
        console.log(`Error: All three input values must be different.`);
        return;
    }

    // 2. Algorithm Core: Sorting
    const values = [x, y, z];

    // Sort in descending order (b - a).
    values.sort((a, b) => b - a);

    // 3. Output
    console.log(`Original inputs: X=${x}, Y=${y}, Z=${z}`);
    console.log(`Descending order: ${values.join(', ')}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 9 ---
// 9 - Write an algorithm that calculates a person's BMI (Body Mass Index), reads their weight and height, 
// and prints their condition to the screen according to the table below.

/**
 * Calculates a person's BMI (Body Mass Index) and determines their condition.
 * @param {number} height - The height of the person in meters (e.g., 1.75).
 * @param {number} weight - The weight of the person in kilograms (e.g., 70).
 */
function exercise9(height, weight) {
    // 1. Rigorous Input Validation (Number, Positive, No Zero Height)
    if (isNaN(height) || isNaN(weight) || typeof height !== 'number' || typeof weight !== 'number') {
        console.log(`Error: Both inputs must be valid numbers.`);
        return;
    }

    if (height <= 0 || weight <= 0) {
        console.log(`Error: Height and weight must be positive values.`);
        return;
    }

    // 2. Algorithm Core: Calculation (Calculate BMI first)
    const bmi = weight / (height * height);

    let condition;

    // 3. Conditional Logic (Using the numerical value of BMI)
    if (bmi < 18.5) {
        condition = "Underweight";
    } else if (bmi <= 24.9) {
        condition = "Normal Weight (Congratulations!)";
    } else if (bmi <= 29.9) {
        condition = "Slightly Overweight";
    } else if (bmi <= 34.9) {
        condition = "Obesity Grade I";
    } else if (bmi <= 39.9) {
        condition = "Obesity Grade II (Severe)";
    } else { // bmi >= 40.0
        condition = "Obesity Grade III (Morbid)";
    }

    // 4. Output: Format the BMI to one decimal place only for printing.
    console.log(`--- BMI Result ---`);
    console.log(`Height: ${height.toFixed(2)}m, Weight: ${weight.toFixed(2)}kg`);
    console.log(`Your calculated BMI is: ${bmi.toFixed(1)}`);
    console.log(`Condition: ${condition}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 10 ---
// 10 - Write an algorithm that reads three grades obtained by a student and prints the average of the grades to the screen.

/**
 * Calculates the average of three student grades.
 * @param {number} grade1 - The first student grade.
 * @param {number} grade2 - The second student grade.
 * @param {number} grade3 - The third student grade.
 */
function exercise10(grade1, grade2, grade3) {
    // 1. Rigorous Input Validation (Must be non-negative numbers)
    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) ||
        typeof grade1 !== 'number' || typeof grade2 !== 'number' || typeof grade3 !== 'number' ||
        grade1 < 0 || grade2 < 0 || grade3 < 0) {
        console.log(`Error: All inputs must be valid non-negative numbers.`);
        return;
    }

    // 2. Algorithm Core: Calculation
    const sum = grade1 + grade2 + grade3;
    const average = sum / 3;

    // 3. Output
    console.log(`--- Grade Average Calculation ---`);
    console.log(`Grades: ${grade1.toFixed(2)}, ${grade2.toFixed(2)}, ${grade3.toFixed(2)}`);
    // Output average formatted to two decimal places
    console.log(`The final average is: ${average.toFixed(2)}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 11 ---
// 11 - Write an algorithm that reads four grades obtained by a student, calculates the average of the grades, 
// and prints the student's name and whether the student was approved or failed. 
// For the student to be considered approved, their final average must be greater than or equal to 7.

const APPROVAL_THRESHOLD = 7.0;

/**
 * Calculates a student's final average from four grades and determines their approval status.
 * @param {string} studentName - The name of the student.
 * @param {number} grade1 - The first student grade.
 * @param {number} grade2 - The second student grade.
 * @param {number} grade3 - The third student grade.
 * @param {number} grade4 - The fourth student grade.
 */
function exercise11(studentName, grade1, grade2, grade3, grade4) {
    // 1. Rigorous Input Validation 
    // Check if grades are valid non-negative numbers
    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4) ||
        typeof grade1 !== 'number' || typeof grade2 !== 'number' || typeof grade3 !== 'number' || typeof grade4 !== 'number' ||
        grade1 < 0 || grade2 < 0 || grade3 < 0 || grade4 < 0) {
        console.log(`Error: All grades must be valid non-negative numbers.`);
        return;
    }
    // Check if name is a non-empty string
    if (typeof studentName !== 'string' || studentName.trim().length === 0) {
        console.log(`Error: Student name must be a non-empty string.`);
        return;
    }

    // 2. Algorithm Core: Calculation
    const sum = grade1 + grade2 + grade3 + grade4;
    const average = sum / 4;

    // 3. Approval Status Check (Must be >= 7.0)
    let status;
    if (average >= APPROVAL_THRESHOLD) {
        status = "Approved";
    } else {
        status = "Failed";
    }

    // 4. Output
    console.log(`--- Student Grade Report ---`);
    console.log(`Student: ${studentName}`);
    console.log(`Grades: ${grade1.toFixed(1)}, ${grade2.toFixed(1)}, ${grade3.toFixed(1)}, ${grade4.toFixed(1)}`);
    console.log(`Final Average: ${average.toFixed(2)}`);
    console.log(`Status: ${status}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 12 ---
// 12 - Write an algorithm that reads the value of a product and determines the value that must be paid, according to the buyer's choice of payment method. Print the final product value to be paid to the screen. Use the codes from the payment condition table to perform the appropriate calculation.

const DISCOUNT_CASH = 0.15; // 15% discount for Code 1
const DISCOUNT_CARD_SINGLE = 0.10; // 10% discount for Code 2
const INTEREST_INSTALLMENTS = 0.10; // 10% interest for Code 4

/**
 * Calculates the final price of a product based on the payment method code.
 * @param {number} productValue - The original price of the product.
 * @param {number} paymentCode - The payment condition code (1, 2, 3, or 4).
 */
function exercise12(productValue, paymentCode) {
    // 1. Rigorous Input Validation
    if (isNaN(productValue) || typeof productValue !== 'number' || productValue <= 0) {
        console.log(`Error: Product value must be a positive number.`);
        return;
    }
    if (isNaN(paymentCode) || typeof paymentCode !== 'number' || !Number.isInteger(paymentCode)) {
        console.log(`Error: Payment code must be an integer (1, 2, 3, or 4).`);
        return;
    }

    let finalPrice = productValue;
    let paymentCondition;

    // 2. Algorithm Core: Determine final price using switch
    switch (paymentCode) {
        case 1:
            // 1 - Cash or Pix: 15% discount
            finalPrice = productValue * (1 - DISCOUNT_CASH);
            paymentCondition = "Cash/Pix (15% Discount)";
            break;
        case 2:
            // 2 - Single Credit Card Payment: 10% discount
            finalPrice = productValue * (1 - DISCOUNT_CARD_SINGLE);
            paymentCondition = "Single Card Payment (10% Discount)";
            break;
        case 3:
            // 3 - Two Installments: Normal price
            paymentCondition = "Two Installments (Normal Price)";
            // finalPrice remains productValue
            break;
        case 4:
            // 4 - Three or More Installments: 10% interest
            finalPrice = productValue * (1 + INTEREST_INSTALLMENTS);
            paymentCondition = "Three+ Installments (10% Interest)";
            break;
        default:
            console.log(`Error: Invalid payment code (${paymentCode}). Please use codes 1, 2, 3, or 4.`);
            return;
    }

    // 3. Output
    console.log(`--- Payment Calculation Report ---`);
    console.log(`Original Price: $${productValue.toFixed(2)}`);
    console.log(`Payment Method: ${paymentCondition}`);
    console.log(`Final Price to be paid: $${finalPrice.toFixed(2)}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 13 ---
// 13 - Write an algorithm that reads a person's name and age and prints the person's name and whether they are a minor or of legal age.

const LEGAL_AGE_THRESHOLD = 18;

/**
 * Reads a person's name and age, and determines if they are a minor or of legal age.
 * @param {string} name - The person's name.
 * @param {number} age - The person's age.
 */
function exercise13(name, age) {
    // 1. Rigorous Input Validation
    // Age validation
    if (isNaN(age) || typeof age !== 'number' || age < 0) {
        console.log(`Error: Age must be a non-negative number.`);
        return;
    }
    // Name validation
    if (typeof name !== 'string' || name.trim().length === 0) {
        console.log(`Error: Name must be a non-empty string.`);
        return;
    }

    // 2. Algorithm Core: Determine status
    let status;
    // Check if the age is greater than or equal to the legal age threshold (18)
    if (age >= LEGAL_AGE_THRESHOLD) {
        status = "of legal age";
    } else {
        status = "a minor";
    }

    // 3. Output
    console.log(`--- Age Verification Report ---`);
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${name} is ${status}.`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 14 ---
// 14 - Write an algorithm that receives values A and B, swaps the value of A with B and the value of B with A, and prints the swapped values to the screen.

/**
 * Swaps the values of two variables (A and B) and prints the new values.
 * This is performed using Array Destructuring (modern JavaScript swap method).
 * @param {any} a - The first value.
 * @param {any} b - The second value.
 */
function exercise14(a, b) {
    // 1. Initial State Output (For clarity)
    console.log(`Initial values: A=${a} | B=${b}`);

    // 2. Algorithm Core: Swapping the values using Destructuring
    // The expression [b, a] creates a temporary array [B's value, A's value].
    // The assignment then reassigns the first element to 'a' and the second to 'b'.
    [a, b] = [b, a];

    // 3. Final State Output
    console.log(`Swapped values: A=${a} | B=${b}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 15 ---
// 15 - Write an algorithm that reads the year a person was born, prints to the screen how many years, months, and days that person has lived. 
// Take into account that a year has 365 days and a month has 30 days.

const DAYS_IN_YEAR = 365;
const DAYS_IN_MONTH = 30;

/**
 * Calculates a person's approximate age in years, months, and days based on their birth year.
 * @param {number} birthYear - The year the person was born (e.g., 1990).
 */
function exercise15(birthYear) {
    // 1. Rigorous Input Validation
    const currentYear = new Date().getFullYear();

    if (isNaN(birthYear) || typeof birthYear !== 'number' || !Number.isInteger(birthYear) || birthYear <= 1900 || birthYear > currentYear) {
        console.log(`Error: Birth year must be a valid integer between 1900 and ${currentYear}.`);
        return;
    }

    // 2. Algorithm Core: Calculation
    const ageInYears = currentYear - birthYear;

    // We convert the age entirely into days (as per the prompt's simplification: 365 days/year)
    const totalDays = ageInYears * DAYS_IN_YEAR;

    // Calculate Years
    const yearsLived = Math.floor(totalDays / DAYS_IN_YEAR);
    const daysAfterYears = totalDays % DAYS_IN_YEAR; // Days remaining after extracting full years

    // Calculate Months
    const monthsLived = Math.floor(daysAfterYears / DAYS_IN_MONTH);
    const finalDaysLived = daysAfterYears % DAYS_IN_MONTH; // Final days remaining

    // 3. Output
    console.log(`--- Life Duration Report ---`);
    console.log(`Birth Year: ${birthYear}`);
    console.log(`Total life duration (Approximate): ${yearsLived} years, ${monthsLived} months, and ${finalDaysLived} days.`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 16 ---
// 16 - Write an algorithm that reads three values representing the three sides of a triangle, verifies if they are valid, and then determines if the triangle is equilateral, isosceles, or scalene.

/**
 * Reads three side lengths (a, b, c), checks if they can form a valid triangle, 
 * and then classifies the triangle type.
 * @param {number} a - Length of side A.
 * @param {number} b - Length of side B.
 *@param {number} c - Length of side C.
 */
function exercise16(a, b, c) {
    // 1. Rigorous Input Validation (Must be positive numbers)
    if (isNaN(a) || isNaN(b) || isNaN(c) ||
        typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' ||
        a <= 0 || b <= 0 || c <= 0) {
        console.log(`Error: All inputs must be valid, positive numbers.`);
        return;
    }

    // 2. Triangle Validity Check (The sum of two sides must be greater than the third side)
    const isValid = (a + b > c) && (a + c > b) && (b + c > a);

    if (!isValid) {
        console.log(`The values (${a}, ${b}, ${c}) DO NOT form a valid triangle. Reason: The sum of two sides must be greater than the third.`);
        return;
    }

    // 3. Algorithm Core: Classification
    let type = "";

    if (a === b && b === c) {
        // If all three sides are equal
        type = "Equilateral";
    } else if (a === b || a === c || b === c) {
        // If at least two sides are equal (excluding the equilateral case)
        type = "Isosceles";
    } else {
        // If no sides are equal
        type = "Scalene";
    }

    // 4. Output
    console.log(`The values (${a}, ${b}, ${c}) form a VALID triangle.`);
    console.log(`The triangle is classified as: ${type}.`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 17 ---
// 17 - Write an algorithm that reads a temperature in Fahrenheit and calculates the corresponding temperature in Celsius. Print both temperatures to the screen.
// Formula: C = (5 * (F - 32) / 9)

/**
 * Reads a temperature in Fahrenheit and calculates the corresponding value in Celsius.
 *@param {number} fahrenheit - Temperature value in Fahrenheit.
 */
function exercise17(fahrenheit) {
    // 1. Rigorous Input Validation
    if (isNaN(fahrenheit) || typeof fahrenheit !== 'number') {
        console.log(`Error: Input must be a valid number.`);
        return;
    }

    // 2. Algorithm Core: Conversion Formula
    const celsius = (5 * (fahrenheit - 32)) / 9;

    // 3. Output (Printing both temperatures as requested)
    console.log(`--- Temperature Conversion ---`);
    console.log(`Fahrenheit: ${fahrenheit.toFixed(1)}°F`);
    console.log(`The corresponding temperature in Celsius is: ${celsius.toFixed(1)}°C`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 18 ---
// 18 - Francisco is 1.50m tall and grows 2 centimeters per year, while Sara is 1.10m tall and grows 3 centimeters per year. Write an algorithm that calculates and prints to the screen how many years it will take for Francisco to be taller than Sara.

const CM_PER_METER = 100;

/**
 * Calculates how many years it takes for the shorter person (Sara) to surpass the taller person (Francisco).
 */
function exercise18() {
    // Initial data (converted to cm for easier calculation)
    let franciscoHeightCm = 1.50 * CM_PER_METER; // 150 cm
    let saraHeightCm = 1.10 * CM_PER_METER;     // 110 cm

    // Growth rates
    const franciscoGrowth = 2; // cm per year
    const saraGrowth = 3;      // cm per year

    let years = 0;

    // Validation: Check if the overtaking is mathematically impossible 
    if (franciscoHeightCm >= saraHeightCm && franciscoGrowth >= saraGrowth) {
        console.log(`Initial Heights: Francisco (${franciscoHeightCm}cm) | Sara (${saraHeightCm}cm)`);
        console.log(`Result: The overtaking is impossible, as Francisco is already taller and does not grow slower than Sara.`);
        return;
    }

    // Algorithm Core: Loop runs AS LONG AS Francisco is taller or equal to Sara.
    // The loop stops on the year Sara becomes taller (as shown by your successful test).
    while (franciscoHeightCm >= saraHeightCm) {
        franciscoHeightCm += franciscoGrowth;
        saraHeightCm += saraGrowth;
        years++;
    }

    // Output
    console.log(`--- Growth Simulation Result ---`);
    console.log(`It took ${years} years for Sara to become taller than Francisco.`);
    console.log(`At year ${years}:`);
    console.log(`  Francisco's height: ${franciscoHeightCm.toFixed(2)} cm`);
    console.log(`  Sara's height: ${saraHeightCm.toFixed(2)} cm`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 19 ---
// 19 - Write an algorithm that prints the multiplication table from 1 to 10 to the screen.

/**
 * Generates and prints the multiplication tables from 1 to 10 using nested loops.
 */
function exercise19() {
    // Loop 1 (Outer): Defines the main factor (i = 1 to 10)
    for (let i = 1; i <= 10; i++) {
        console.log(`\n--- Multiplication Table for ${i} ---`);

        // Loop 2 (Inner): Defines the multiplier (j = 1 to 10)
        for (let j = 1; j <= 10; j++) {
            const result = i * j;
            console.log(`${i} x ${j} = ${result}`);
        }
    }
}

// -----------------------------------------------------------------------------
// --- EXERCISE 20 ---
// 20 - Write an algorithm that receives an integer and prints its multiplication table to the screen.

/**
 * Generates and prints the multiplication table (from 1 to 10) for a given integer.
 * @param {number} num - The integer for which the table will be generated.
 */
function exercise20(num) {
    // 1. Rigorous Input Validation (Must be an integer)
    if (isNaN(num) || typeof num !== 'number' || !Number.isInteger(num)) {
        console.log(`Error: Input must be a valid integer.`);
        return;
    }

    // 2. Algorithm Core: Single loop for table generation
    console.log(`\n--- Multiplication Table for ${num} ---`);

    for (let i = 1; i <= 10; i++) {
        const result = num * i;
        console.log(`${num} x ${i} = ${result}`);
    }
}

// -----------------------------------------------------------------------------
// --- EXERCISE 21 ---
// 21 - Write an algorithm that shows a random value between 0 and 100.

/**
 * Generates and prints a random integer value between 0 and 100 (inclusive).
 */
function exercise21() {
    // Generates a random integer between 0 and 100 (inclusive).
    const randomNumber = Math.floor(Math.random() * 101);

    console.log(`Generated random value: ${randomNumber}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 22 ---
// 22 - Write an algorithm that reads two integer values, A and B, and prints the quotient and the remainder of the integer division between them to the screen.

/**
 * Calculates and prints the integer quotient and the remainder of the division of A by B.
 * @param {number} a - The dividend (integer).
 * @param {number} b - The divisor (integer, must be non-zero).
 */
function exercise22(a, b) {
    // 1. Rigorous Input Validation (Must be integers)
    if (isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number' ||
        !Number.isInteger(a) || !Number.isInteger(b)) {
        console.log(`Error: Both inputs must be valid integers.`);
        return;
    }

    // 2. Division by Zero Check
    if (b === 0) {
        console.log(`Error: Division by zero is not allowed.`);
        return;
    }

    // 3. Algorithm Core: Calculation
    const quotient = Math.trunc(a / b);
    const remainder = a % b;

    // 4. Output
    console.log(`\n--- Division of ${a} by ${b} ---`);
    console.log(`Integer Quotient: ${quotient}`);
    console.log(`Remainder (Modulo): ${remainder}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 23 ---
// 23 - Write an algorithm that calculates a teacher's net salary. The provided information will be: the value of the class-hour, the number of classes taught in the month, and the INSS discount percentage. Print the final net salary to the screen.

/**
 * Calculates a teacher's net salary based on class hours, teaching volume, and INSS discount.
 * @param {number} hourlyRate - The value of one class-hour (e.g., 25.00).
 * @param {number} classesTaught - The number of classes taught in the month.
 * @param {number} inssDiscount - The INSS discount percentage (e.g., 11 for 11%).
 */
function exercise23(hourlyRate, classesTaught, inssDiscount) {
    // 1. Rigorous Input Validation (Must be positive numbers)
    if (isNaN(hourlyRate) || isNaN(classesTaught) || isNaN(inssDiscount) ||
        typeof hourlyRate !== 'number' || typeof classesTaught !== 'number' || typeof inssDiscount !== 'number' ||
        hourlyRate <= 0 || classesTaught <= 0 || inssDiscount < 0) {
        console.log(`Error: All inputs must be valid positive numbers (discount must be non-negative).`);
        return;
    }

    // 2. Algorithm Core: Calculation
    const grossSalary = hourlyRate * classesTaught;
    const discountAmount = (grossSalary * inssDiscount) / 100; // Calculate percentage discount
    const netSalary = grossSalary - discountAmount;

    // 3. Output
    console.log(`\n--- Teacher Salary Calculation ---`);
    console.log(`Gross Salary: $${grossSalary.toFixed(2)}`);
    console.log(`INSS Discount (${inssDiscount}%): $${discountAmount.toFixed(2)}`);
    console.log(`Final Net Salary: $${netSalary.toFixed(2)}`);
}

// -----------------------------------------------------------------------------
// --- EXERCISE 24 ---
// 24 - Write an algorithm that calculates the quantity of fuel (gasoline/ethanol) liters spent on a trip, knowing that the car travels 12km per liter. The algorithm must provide the user with the time spent on the trip, the average speed, the distance traveled, and the quantity of liters used for the trip.

const KM_PER_LITER = 12; // Fuel efficiency constant

/**
 * Calculates the distance traveled and fuel consumption based on travel time and average speed.
 * @param {number} travelTime - The time spent on the trip (e.g., in hours).
 * @param {number} averageSpeed - The average speed during the trip (e.g., in km/h).
 */
function exercise24(travelTime, averageSpeed) {
    // 1. Rigorous Input Validation
    if (isNaN(travelTime) || isNaN(averageSpeed) || typeof travelTime !== 'number' ||
        typeof averageSpeed !== 'number' || travelTime < 0 || averageSpeed < 0) {
        console.log(`Error: All inputs must be valid, non-negative numbers.`);
        return;
    }

    // 2. Algorithm Core: Calculation
    const distanceTraveled = travelTime * averageSpeed;
    const litersUsed = distanceTraveled / KM_PER_LITER;

    // 3. Output (Providing all required information to the user)
    console.log(`\n--- Trip Calculation Results ---`);
    console.log(`Input Time Spent: ${travelTime.toFixed(1)} hours`);
    console.log(`Input Average Speed: ${averageSpeed.toFixed(1)} km/h`);
    console.log(`-----------------------------------`);
    console.log(`Calculated Distance Traveled: ${distanceTraveled.toFixed(2)} km`);
    console.log(`Calculated Fuel Liters Used: ${litersUsed.toFixed(2)} liters`);
}

// -----------------------------------------------------------------------------
// --- EXECUTION BLOCK ---
// This block runs all exercises with hardcoded examples when the file is executed via Node.js (node filename.js)

console.log("=======================================================================");
console.log("=============== RUNNING ALL 24 ALGORITHMS (PORTFOLIO) ===============");
console.log("=======================================================================");

// --- EXERCISE 1 EXECUTION ---
console.log("\n[EXERCISE 1] ------------------------------------------------");
exercise1(10, 5, 20);
console.log("");
exercise1(50, 60, 100);

// --- EXERCISE 2 EXECUTION ---
console.log("\n[EXERCISE 2] ------------------------------------------------");
exercise2(18);
exercise2(-7);
exercise2(0);

// --- EXERCISE 3 EXECUTION ---
console.log("\n[EXERCISE 3] ------------------------------------------------");
exercise3(5, 5);
console.log("");
exercise3(8, 3);

// --- EXERCISE 4 EXECUTION ---
console.log("\n[EXERCISE 4] ------------------------------------------------");
exercise4(100);
console.log("");
exercise4(-5);

// --- EXERCISE 5 EXECUTION ---
console.log("\n[EXERCISE 5] ------------------------------------------------");
exercise5(3036.00);
console.log("");
exercise5(759.00);

// --- EXERCISE 6 EXECUTION ---
console.log("\n[EXERCISE 6] ------------------------------------------------");
exercise6(100);
console.log("");
exercise6(5000);

// --- EXERCISE 7 EXECUTION ---
console.log("\n[EXERCISE 7] ------------------------------------------------");
exercise7(true, true);
console.log("");
exercise7(false, false);

// --- EXERCISE 8 EXECUTION ---
console.log("\n[EXERCISE 8] ------------------------------------------------");
exercise8(5, 1, 10);
console.log("");
exercise8(-10, 0, -5);

// --- EXERCISE 9 EXECUTION ---
console.log("\n[EXERCISE 9] ------------------------------------------------");
exercise9(1.75, 70);
console.log("");
exercise9(1.80, 55);

// --- EXERCISE 10 EXECUTION ---
console.log("\n[EXERCISE 10] -----------------------------------------------");
exercise10(7.5, 6.5, 7.0);
console.log("");
exercise10(5, 6, 5);

// --- EXERCISE 11 EXECUTION ---
console.log("\n[EXERCISE 11] -----------------------------------------------");
exercise11("Alice Johnson", 8.0, 7.5, 7.0, 7.5);
console.log("");
exercise11("Bob Williams", 7.0, 6.0, 7.5, 7.0);

// --- EXERCISE 12 EXECUTION ---
console.log("\n[EXERCISE 12] -----------------------------------------------");
exercise12(100, 1);
console.log("");
exercise12(100, 4);

// --- EXERCISE 13 EXECUTION ---
console.log("\n[EXERCISE 13] -----------------------------------------------");
exercise13("Sarah Connor", 17);
console.log("");
exercise13("Jane Doe", 50);

// --- EXERCISE 14 EXECUTION ---
console.log("\n[EXERCISE 14] -----------------------------------------------");
exercise14(10, 20);
console.log("");
exercise14("Hello", "World");

// --- EXERCISE 15 EXECUTION ---
console.log("\n[EXERCISE 15] -----------------------------------------------");
exercise15(1990);
console.log("");
exercise15(2020);

// --- EXERCISE 16 EXECUTION ---
console.log("\n[EXERCISE 16] -----------------------------------------------");
exercise16(5, 5, 5);
console.log("");
exercise16(3, 4, 10); // Invalid

// --- EXERCISE 17 EXECUTION ---
console.log("\n[EXERCISE 17] -----------------------------------------------");
exercise17(212);
console.log("");
exercise17(32);

// --- EXERCISE 18 EXECUTION ---
console.log("\n[EXERCISE 18] -----------------------------------------------");
exercise18();

// --- EXERCISE 19 EXECUTION ---
console.log("\n[EXERCISE 19] -----------------------------------------------");
exercise19();

// --- EXERCISE 20 EXECUTION ---
console.log("\n[EXERCISE 20] -----------------------------------------------");
exercise20(5);

// --- EXERCISE 21 EXECUTION ---
console.log("\n[EXERCISE 21] -----------------------------------------------");
exercise21();

// --- EXERCISE 22 EXECUTION ---
console.log("\n[EXERCISE 22] -----------------------------------------------");
exercise22(10, 3);
console.log("");
exercise22(-10, 3);

// --- EXERCISE 23 EXECUTION ---
console.log("\n[EXERCISE 23] -----------------------------------------------");
exercise23(25.00, 80, 11);
console.log("");
exercise23(40.00, 100, 15);

// --- EXERCISE 24 EXECUTION ---
console.log("\n[EXERCISE 24] -----------------------------------------------");
exercise24(10, 85);
console.log("");
exercise24(2.5, 60);

console.log("\n=======================================================================");
console.log("======================= ALL EXERCISES COMPLETED =======================");
console.log("=======================================================================\n");