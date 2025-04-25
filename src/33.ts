import math

def calculate_factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * calculate_factorial(n - 1)

# Example usage:
result = calculate_factorial(5)
print(result)  # Output: 120
