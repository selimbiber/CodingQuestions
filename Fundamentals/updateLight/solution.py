from typing import Dict

def update_light(current: str) -> str:
    lights: Dict[str, str] = {
        'green': 'yellow',
        'yellow': 'red',
        'red': 'green'
    }
    
    return lights.get(current, '')

print(update_light('green')) # -> yellow
print(update_light('yellow')) # -> red
print(update_light('red')) # -> green