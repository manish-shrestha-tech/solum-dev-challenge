def get_valid_int(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("Invalid input! Please enter an integer.")

t = get_valid_int("Enter number of test cases: ")

while t < 1 or t > 100:
    print("t must be between 1 and 100.")
    t = get_valid_int("Enter number of test cases: ")

for _ in range(t):
    while True:
        try:
            x, n = map(int, input("Enter x and n: ").split())
            if (x >= 1 and x <= 10) and (n >= 1 and n <= 10):
                break
            else:
                print("Both x and n must be >= 1.")
        except ValueError:
            print("Please enter two integers separated by a space.")

    if n % 2 == 0:
        print(0)
    else:
        print(x)
