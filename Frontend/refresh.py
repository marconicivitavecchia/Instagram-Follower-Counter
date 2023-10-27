print("prova")

import json
import time

# Define a function to read and write data
def read_and_write_data():
    try:
        # Read data from "data.json"
        with open("data.json", "r") as file:
            data = json.load(file)
            print("Data from data.json:")
            print(data)

        # Modify data (for demonstration, you can change this part)
        data['timestamp'] = time.time()

        # Write the modified data back to "data.json"
        with open("data.json", "w") as file:
            json.dump(data, file, indent=4)

    except FileNotFoundError:
        print("File 'data.json' not found")
    except json.JSONDecodeError:
        print("Failed to parse JSON data")

while True:
    read_and_write_data()
    time.sleep(5)