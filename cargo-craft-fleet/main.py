while True:
    try:
        t = int(input("Enter number of test cases\n"))
        if t >= 1 and t <= 1000:
            break

        print("Test cases must be greater than or equal to 1 or less than or equal to 1000")
    except ValueError:
        print("Please enter a valid number")

for _ in range(t):
    while True: 
        try:
            n = int(input("Enter the number of propulsion units\n"))
            if n >= 1 and n <= 10 ** 18:
                break
            print("Number of propulsion units must be greater than or equal to 1 or less than or equal to 10^18")
        except ValueError:
            print("Please enter a valid number")

    if n % 2 != 0 or n < 4:
        print(-1)
        continue

    max_crafts = n // 4

    if n % 6 == 0:
        min_crafts = n // 6
    else:
        min_crafts = (n // 6) + 1

    print(min_crafts, max_crafts)