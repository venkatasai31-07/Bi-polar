import os

replacements = {
    '--accent-red-glow': '--accent-green-glow',
    '--accent-red': '--accent-green',
    '#FF1E1E': '#00FF66',
    'rgba(255, 30, 30': 'rgba(0, 255, 102',
    'text-red': 'text-green',
    '#B31515': '#00B347'
}

files_to_edit = [
    'src/index.css',
    'src/App.jsx',
    'src/components/Hero.jsx',
    'src/data/siteData.jsx'
]

for file_path in files_to_edit:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Replacement complete.")
