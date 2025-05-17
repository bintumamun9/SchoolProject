import numpy as np
from scipy.optimize import minimize

def f(x):
    """
    A function to be minimized.
    
    Args:
        x (float): A single value
    
    Returns:
        float: The minimum value of f(x)
    """
    return 1.0 * x ** 2 - 5.0 * np.exp(-x)

# Find the minimum value and corresponding point
result = minimize(f, x0=0)
min_value = result.fun
minimum_point = result.x

print(f"Minimum value: {min_value}")
print(f"Minimum point: {minimum_point}")
