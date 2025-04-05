import random
from bs4 import BeautifulSoup
import requests

def get_random_html():
    url = "http://example.com"
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        return soup
    else:
        raise Exception(f"Failed to retrieve the webpage: {response.status_code}")

def random_html_element(random_index):
    html = get_random_html()
    element_text = "random text"
    if random_index < len(html.find_elements(By.XPATH, "./text()")) and random_index != 0:
        return html.find_element(By.XPATH, f"./text()[{random_index}]").text
    else:
        return element_text

def generate_code():
    codes = {
        'HTML': get_random_html,
        'JavaScript': None,
        'Python': None,
        'Java': None,
        'C++': None,
        'SQL': None,
        'PHP': None,
        'Ruby': None
    }
    random_index = random.randint(0, len(codes) - 1)
    code = codes[random_index]
    return random_html_element(random_index)

generate_code()
