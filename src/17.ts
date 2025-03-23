import time
start_time = time.time()

print("Hello, World!")

end_time = time.time()
execution_time = end_time - start_time

if execution_time > 60:
    print("The code took too long to execute.")
else:
    print("The code executed successfully within the specified execution time.")

